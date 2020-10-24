/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { EditorState, convertToRaw } from "draft-js";
import Editor from "./Editor";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

const AskQuestion = ({ postQuestion, formMonitor }) => {
  const [formData, setFormData] = useState({
    title: "",
    context: "",
  });
  const [redirect, setRedirect] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

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
        postQuestion({ title: formData.title, context: formData.context })
          .then(() => {
            formMonitor();
            setRedirect(true);
            setFormData({
              title: "",
              context: "",
            });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } else {
        alert("Please fill in the question title field");
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
    <>
      {redirect && <Redirect to="/" />}
      <form
        className="my-4 w-75 mx-auto p-3 bg-secondary text-left text-white"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label className="lead w-100" htmlFor={"title"}>
            <span className="font-weight-bold">Title</span>
            <p>
              Be specific and imagine you’re asking a question to another person
            </p>
            <input
              name="title"
              type="text"
              className="form-control"
              id="title"
              onChange={handleChange}
              value={formData.title}
              aria-describedby="emailHelp"
              placeholder="Enter Title"
            ></input>
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

        <button type="submit" className="btn btn-info">
          Submit
        </button>
      </form>
    </>
  );
};

AskQuestion.propTypes = {
  postQuestion: PropTypes.func,
  formMonitor: PropTypes.func,
};

export default AskQuestion;
