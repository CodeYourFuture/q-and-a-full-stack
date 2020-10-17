/* eslint-disable linebreak-style */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";
import { propTypes } from "react-bootstrap/esm/Image";

const List = ({ data, postComment }) => {
  return (
    <div className="">
      {data.map((item) => (
        <ListItem postComment={postComment} key={item.id} {...item} />
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
