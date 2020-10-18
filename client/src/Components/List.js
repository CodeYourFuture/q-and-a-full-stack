/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ShowContext from "./ShowContext";

const List = ({ data, postComment }) => {
  return (
    <div className="">
      {data.map((item) => (
        <ShowContext postComment={postComment} key={item.id} {...item} />
      ))}
    </div>
  );
};

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      question_date: PropTypes.string,
      context: PropTypes.string,
    })
  ),
  postComment: PropTypes.func,
};

export default List;
