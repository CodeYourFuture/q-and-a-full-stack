import React, { useState } from "react";

const AskQuestion = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        className="btn btn-info m-3"
      >
        Ask a question
      </button>
      {open && (
        <form className="my-4 w-75 mx-auto p-3 bg-secondary text-left text-white">
          <div className="form-group">
            <label className="lead" >Title</label>
            <br></br>
            <label >
              Be specific and imagine you’re asking a question to another person
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Title"
            ></input>
          </div>
          <div className="form-group">
            <label className="lead">Body</label>
            <br></br>
            <label >
              Include all the information someone would need to answer your
              question
            </label>
            <textarea
              type="text"
              className="form-control"
              rows="5"
              placeholder="Enter Question"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default AskQuestion;
