import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const Comment = ({ id, postComment }) => {
  const [comment, setComment] = useState({ questionId: id, comment: "" });

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
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="commentForm.textArea">
        <Form.Label>Answer goes here:</Form.Label>
        <Form.Control
          name="comment"
          onChange={handleChange}
          as="textarea"
          rows="3"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

Comment.propTypes = {
  id: PropTypes.number,
  postComment: PropTypes.func,
};
