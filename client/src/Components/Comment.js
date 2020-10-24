import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import Editor from "./Editor";
import draftToHtml from "draftjs-to-html";

export const Comment = ({ id, postComment, setRefresh, refresh, showEdit }) => {
  const [comment, setComment] = useState({ questionId: id, comment: "" });
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const updatedComment = {
      ...comment,
      comment: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    };
    setComment(updatedComment);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.comment.trim().length > 7) {
      postComment({ questionId: comment.questionId, comment: comment.comment })
        .then(() => {
          setComment({ ...comment, context: "" });
          setRefresh(!refresh);
          setEditorState(
            EditorState.push(editorState, ContentState.createFromText(""))
          );
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      alert("please fill in the reply field");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="commentForm.textArea">
        <Form.Label>Answer goes here:</Form.Label>
        {showEdit && (
          <Editor
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
          />
        )}
      </Form.Group>
      <Button className="float-left mb-3" variant="info" type="submit">
        Submit
      </Button>
    </Form>
  );
};

Comment.propTypes = {
  id: PropTypes.number,
  postComment: PropTypes.func,
  setRefresh: PropTypes.func,
  refresh: PropTypes.bool,
  showEdit: PropTypes.bool,
};
