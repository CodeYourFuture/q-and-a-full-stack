import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

export default function SingleQuestion({ data }) {
  const { questionId } = useParams();

  return (
    <div className="container">Single Question Display Under Construction</div>
  );
}

SingleQuestion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      question_date: PropTypes.string,
      context: PropTypes.string,
    })
  ),
};
