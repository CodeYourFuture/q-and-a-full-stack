import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const Comment = ({ id, postComment }) => {
  const [comment, setComment] = useState({ questionId: id, comment: "" });
  const [showComment, setShowComment] = useState(false);

  const handleChange = (e) => {
    const updatedComment = {
      ...comment,
      [e.target.name]: e.target.value,
    };
    setComment(updatedComment);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment({ questionId: comment.questionId, comment: comment.comment })
      .then(() => {
        setComment({ ...comment, context: "" });
      })
      .then(setShowComment(!showComment))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="commentForm.textArea">
          {/* <Form.Label>Answer goes here:</Form.Label> */}
          <Form.Control
            name="comment"
            onChange={handleChange}
            as="textarea"
            rows="5"
          />
        </Form.Group>
        <Button className="float-left mb-3" variant="info" type="submit">
          Submit
        </Button>
      </Form>
      {showComment && <div>{comment.comment}</div>}
    </>
  );
};

Comment.propTypes = {
  id: PropTypes.number,
  postComment: PropTypes.func,
};
