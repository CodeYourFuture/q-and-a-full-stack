import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import Editor from "./Editor";
import draftToHtml from "draftjs-to-html";
import UserContext from "./Context";

export const Comment = ({
  id,
  postComment,
  setRefresh,
  refresh,
  showEdit,
  handleCancelClick,
}) => {
  const user = useContext(UserContext);
  const [comment, setComment] = useState({
    questionId: id,
    comment: "",
    email: "",
  });
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
      user
        ?.getIdToken()
        .then((token) => {
          return postComment({
            questionId: comment.questionId,
            comment: comment.comment,
            email: user.email,
            token: token,
          });
        })
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
    e.preventDefault();
    setRefresh(!refresh);
    handleCancelClick(false);
  };

  return (
    <>
      {showEdit && (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="commentForm.textArea" className="mt-3">
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
            className="float-left mb-3 ml-3 p-3 bg-light text-info"
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
  handleCancelClick: PropTypes.func,
};
