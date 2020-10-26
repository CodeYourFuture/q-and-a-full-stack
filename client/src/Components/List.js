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
    title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Search searchChange={searchChange} />
      {questions.length > 0 ? (
        searchTerm.length === 0 ? (
          questions.map((item) => (
            <ShowContext
              postComment={postComment}
              getComments={getComments}
              key={item.id}
              {...item}
            />
          ))
        ) : filteredQuestions.length > 0 ? (
          filteredQuestions.map((item) => (
            <ShowContext
              postComment={postComment}
              getComments={getComments}
              key={item.id}
              {...item}
            />
          ))
        ) : (
          <div className="border border-danger">
            Nothing matches your search
          </div>
        )
      ) : (
        <div className="border border-danger">
          There are no questions to display
        </div>
      )}
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
