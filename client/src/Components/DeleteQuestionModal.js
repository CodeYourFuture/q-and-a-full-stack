import React from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const DeleteQuestionModal = ({ handleClose, show, removeQuestion }) => {
  console.log("handleClose", handleClose);
  console.log("show", show);
  console.log("removeQuestion", removeQuestion);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Continue Deleting Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to continue?</Modal.Body>
        <Modal.Footer className="border-0">
          <Button
            variant="none"
            onClick={removeQuestion}
            className="btn secondary-color text-white"
          >
            Delete
          </Button>
          <Button variant="none" onClick={handleClose} className="btn tertiary">
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteQuestionModal;

DeleteQuestionModal.propTypes = {
  show: PropTypes.bool,
  removeQuestion: PropTypes.func,
  handleClose: PropTypes.func,
};
