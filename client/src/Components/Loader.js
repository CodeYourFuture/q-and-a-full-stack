import React from "react";
import { Button, Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div>
      <Button
        className="primary-color d-flex mx-auto my-5 btn-lg p-2 text-white"
        variant="btn"
      >
        <Spinner as="span" animation="grow" role="status" aria-hidden="true" />
        &nbsp;Loading...
      </Button>
    </div>
  );
};

export default Loader;
