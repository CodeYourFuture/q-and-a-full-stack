/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { EditorState, convertToRaw } from "draft-js";
import Editor from "./Editor";
import draftToHtml from "draftjs-to-html";
import UserContext from "./Context";
import { Link } from "react-router-dom";

const AskQuestion = ({ postQuestion, formMonitor }) => {
  const user = useContext(UserContext);
  const [formData, setFormData] = useState({
    title: "",
    context: "",
    email: user.email,
  });
  const [redirect, setRedirect] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [isError, setIsError] = useState(false);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const updatedContext = {
      ...formData,
      context: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    };
    setFormData(updatedContext);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      if (formData.title.trim().length > 0) {
        user
          ?.getIdToken()
          .then((token) => {
            return postQuestion({
              title: formData.title,
              context: formData.context,
              email: formData.email,
              token: token,
            });
          })
          .then(() => {
            formMonitor();
            setRedirect(true);
            setFormData({
              title: "",
              context: "",
              email: user.email,
            });
            setIsError(false);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } else {
        setIsError(!isError);
      }
    }
  };

  const handleChange = (e) => {
    const updatedFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(updatedFormData);
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
              value={formData.title}
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
            {/* <UserContext.Consumer>
              {(user) => user && <div>This is {user.email}</div>}
            </UserContext.Consumer> */}
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

AskQuestion.propTypes = {
  postQuestion: PropTypes.func,
  formMonitor: PropTypes.func,
};

export default AskQuestion;
