import React from "react";
import PropTypes from "prop-types";

export default function SingleQuestion({ context }) {
  return <div>{context}</div>;
}

SingleQuestion.propTypes = {
  context: PropTypes.string,
};
