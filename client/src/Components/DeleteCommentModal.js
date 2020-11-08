import React from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const DeleteCommentModal = ({
  handleClose,
  show,
  removeComment,
  handleShowModal,
  handleCloseModal,
  showModal,
}) => {
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
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Decline
          </Button>
          <Button variant="primary" onClick={removeComment}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteCommentModal;

DeleteCommentModal.propTypes = {
  show: PropTypes.bool,
  removeComment: PropTypes.func,
  handleClose: PropTypes.func,
};
