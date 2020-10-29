import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import Editor from "./Editor";
import draftToHtml from "draftjs-to-html";

export const Comment = ({
  id,
  postComment,
  setRefresh,
  refresh,
  showEdit,
  handleCancelClick,
}) => {
  const [comment, setComment] = useState({ questionId: id, comment: "" });
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [isError, setIsError] = useState(false);

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
          setIsError(false);
          handleCancelClick(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      setIsError(!isError);
    }
  };

  const handleClick = () => {
    setRefresh(!refresh);
    handleCancelClick(false);
  };

  return (
    <>
      {showEdit && (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="commentForm.textArea">
            <Form.Label>Your answer will be displayed here:</Form.Label>
            {showEdit && (
              <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
              />
            )}
          </Form.Group>

          {isError && (
            <div className="alert alert-danger w-50 mx-auto" role="alert">
              <strong>Oh snap!</strong> Please add an answer
            </div>
          )}
          <Button className="float-left mb-3 p-3" variant="info" type="submit">
            Submit
          </Button>
          <Button
            onClick={handleClick}
            className="float-left mb-3 ml-3 bg-light text-info p-3"
            variant="info"
            type="submit"
          >
            Cancel
          </Button>
        </Form>
      )}
    </>
  );
};

Comment.propTypes = {
  id: PropTypes.number,
  postComment: PropTypes.func,
  setRefresh: PropTypes.func,
  refresh: PropTypes.bool,
  showEdit: PropTypes.bool,
};
