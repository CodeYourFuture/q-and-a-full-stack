import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import {
  ContentState,
  EditorState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import Editor from "./Editor";
import { Redirect, Link } from "react-router-dom";
import UserContext from "./Context";

const EditQuestion = ({ id, title, context, updateQuestion, formMonitor }) => {
  const blocksFromHTML = convertFromHTML(context || "");
  const questionContext = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );
  const user = useContext(UserContext);
  const [state, setState] = useState({
    id: id,
    title: title,
    context: context,
    email: "",
  });
  const [redirect, setRedirect] = useState(false);
  const [isError, setIsError] = useState(false);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(questionContext)
  );

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const updatedContext = {
      ...state,
      context: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    };
    setState(updatedContext);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.title.trim().length > 0) {
      user
        ?.getIdToken()
        .then((token) => {
          return updateQuestion({
            id: state.id,
            title: state.title,
            context: state.context,
            email: user.email,
            token: token,
          });
        })
        .then(() => {
          formMonitor();
          setRedirect(true);
          //   setState({
          //     title: "",
          //     context: "",
          //     email: user.email,
          //   });
          setIsError(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      setIsError(!isError);
    }
  };
  const handleChange = (e) => {
    const updatedFormData = {
      ...state,
      [e.target.name]: e.target.value,
    };
    setState(updatedFormData);
  };

  return (
    <div className="mb-5">
      {redirect && <Redirect to="/" />}
      <form
        className="my-4 mx-auto p-3 bg-secondary text-left text-white rounded"
        onSubmit={handleSubmit}
      >
        <div className="form-group rounded">
          <label className="lead w-100" htmlFor={"title"}>
            <span className="font-weight-bold">Title</span>
            <p>
              Be specific and imagine you’re asking a question to another person
            </p>
            <input
              name="title"
              type="text"
              className="input-field form-control"
              id="title"
              onChange={handleChange}
              value={state.title}
              aria-describedby="emailHelp"
              placeholder="Enter Title"
            ></input>
            {isError && (
              <div className="alert alert-danger w-50 mx-auto" role="alert">
                <strong>Oh snap!</strong> Please add a title
              </div>
            )}
          </label>
        </div>
        <div className="form-group">
          <label className="lead w-100" htmlFor="context">
            <span className="font-weight-bold">Context</span>
            <p>
              Include all the information someone would need to answer your
              question
            </p>
            <Editor
              editorState={editorState}
              onEditorStateChange={onEditorStateChange}
            />
          </label>
        </div>

        <button
          type="submit"
          className="secondary-color btn font-weight-bold text-white"
        >
          Submit
        </button>
        <Link to="/">
          <button type="button" className="tertiary btn m-3 font-weight-bold">
            Cancel
          </button>
        </Link>
      </form>
    </div>
  );
};

export default EditQuestion;

EditQuestion.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  context: PropTypes.string,
  updateQuestion: PropTypes.func,
  formMonitor: PropTypes.func,
};
