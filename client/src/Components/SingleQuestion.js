import React from "react";
import PropTypes from "prop-types";

export default function SingleQuestion({ context }) {
  console.log(context);
  return (
    // <div className="container">Single Question Display Under Construction</div>
    <>
      <div>{context}</div>
      {/* <ShowContext
        postComment={postComment}
        getComments={getComments}
        id={id}
        title={title}
        context={context}
      /> */}
    </>
  );
}

SingleQuestion.propTypes = {
  context: PropTypes.string,
};
