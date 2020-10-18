/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React, { useState } from "react";
import PropTypes from "prop-types";

const AskQuestion = ({ postQuestion, formMonitor }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    context: "",
  });

  const showQuickForm = () => {
    setOpen(!open);
  };

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    postQuestion({ title: formData.title, context: formData.context })
      .then(() => {
        formMonitor();
        setOpen(!open);
        setFormData({
          title: "",
          context: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
      <button
        onClick={showQuickForm}
        type="button"
        className="btn btn-info m-3"
      >
        Ask a question
      </button>
      {open && (
        <form
          className="my-4 w-75 mx-auto p-3 bg-secondary text-left text-white"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label className="lead w-100" htmlFor={"title"}>
              <span className="font-weight-bold">Title</span>
              <p>
                Be specific and imagine you’re asking a question to another
                person
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
              <textarea
                onChange={handleChange}
                value={formData.context}
                name="context"
                type="text"
                className="form-control"
                rows="5"
                id="context"
                placeholder="Enter Question"
              ></textarea>
            </label>
          </div>

          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      )}
    </>
  );
};

AskQuestion.propTypes = {
  postQuestion: PropTypes.func,
  formMonitor: PropTypes.func,
};

export default AskQuestion;
