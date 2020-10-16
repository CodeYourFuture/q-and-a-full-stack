/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";
import TestLI from "./TestLI";
import { propTypes } from "react-bootstrap/esm/Image";

const List = ({ data, postComment }) => {
  return (
    <div className="">
      {data.map((item) => (
        // <ListItem key={item.id} {...item} />
        <TestLI postComment={postComment} key={item.id} {...item} />
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
