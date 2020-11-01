/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import PropTypes from "prop-types";
import ShowContext from "./ShowContext";
import Search from "./Search";
import UserContext from "./Context";

const List = ({ questions, postComment, getComments }) => {
  let userOnlyQuestions = [];
  let filteredQuestions = [];
  const user = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [userQuestions, setUserQuestions] = useState(false);

  const handleUserQuestions = (e) => {
    setUserQuestions(e.target.value);
  };

  const searchChange = (searchValue) => {
    setSearchTerm(searchValue);
  };

  user
    ? (userOnlyQuestions = questions.filter(({ email }) => email == user.email))
    : null;

  userQuestions
    ? (filteredQuestions = userOnlyQuestions.filter(({ title }) =>
        title.toLowerCase().includes(searchTerm.toLowerCase())
      ))
    : (filteredQuestions = questions.filter(({ title }) =>
        title.toLowerCase().includes(searchTerm.toLowerCase())
      ));

  return (
    <div className="container">
      <div className="d-flex">
        <Search
          searchChange={searchChange}
          questions={questions}
          filteredQuestions={filteredQuestions}
        />
        {user && (
          <ToggleButtonGroup
            onClick={handleUserQuestions}
            type="radio"
            name="options"
            defaultValue={false}
          >
            <ToggleButton className="w-50 pt-3 font-weight-bold" value={false}>
              All
            </ToggleButton>
            <ToggleButton
              className="w-50 pt-3 pl-2 font-weight-bold"
              value={true}
            >
              Mine
            </ToggleButton>
          </ToggleButtonGroup>
        )}
      </div>
      {filteredQuestions ? (
        filteredQuestions.map((item) => (
          <ShowContext
            postComment={postComment}
            getComments={getComments}
            key={item.id}
            {...item}
          />
        ))
      ) : userQuestions && userOnlyQuestions.length > 0 ? (
        userOnlyQuestions.map((item) => (
          <ShowContext
            postComment={postComment}
            getComments={getComments}
            key={item.id}
            {...item}
          />
        ))
      ) : questions.length > 0 ? (
        questions.map((item) => (
          <ShowContext
            postComment={postComment}
            getComments={getComments}
            key={item.id}
            {...item}
          />
        ))
      ) : (
        <div className="border border-danger">
          There are no questions to display
        </div>
      )}
      {searchTerm && filteredQuestions.length === 0 && (
        <div className="border border-danger">
          Sorry, No match for the search.
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
