/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ShowContext from "./ShowContext";
import Search from "./Search";

const List = ({ questions, postComment, getComments }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchChange = (searchValue) => {
    setSearchTerm(searchValue);
  };

  const filteredQuestions = questions.filter(({ title }) =>
    title.includes(searchTerm)
  );

  return (
    <div className="container">
      <Search searchChange={searchChange} />
      {!searchTerm &&
        questions.map((item) => (
          <ShowContext
            postComment={postComment}
            getComments={getComments}
            key={item.id}
            {...item}
          />
        ))}
      {filteredQuestions.map((item) => (
        <ShowContext
          postComment={postComment}
          getComments={getComments}
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};

List.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      question_date: PropTypes.string,
      context: PropTypes.string,
    })
  ),
  postComment: PropTypes.func,
  getComments: PropTypes.func,
};

export default List;
