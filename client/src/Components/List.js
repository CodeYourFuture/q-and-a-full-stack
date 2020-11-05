/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import ShowContext from "./ShowContext";
import Search from "./Search";
import UserContext from "./Context";

const List = ({
  questions,
  postComment,
  getComments,
  incrementLikes,
  incrementViews,
  deleteQuestion,
  refresher,
  setRefresher,
  deleteComment,
}) => {
  let userOnlyQuestions = [];
  let filteredQuestions = [];
  const user = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [userQuestions, setUserQuestions] = useState(false);

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
          userQuestions={userQuestions}
          setUserQuestions={setUserQuestions}
          deleteQuestion={deleteQuestion}
        />
      </div>
      {filteredQuestions ? (
        filteredQuestions.map((item) => (
          <ShowContext
            postComment={postComment}
            getComments={getComments}
            incrementLikes={incrementLikes}
            incrementViews={incrementViews}
            deleteQuestion={deleteQuestion}
            setRefresher={setRefresher}
            refresher={refresher}
            deleteComment={deleteComment}
            key={item.id}
            {...item}
          />
        ))
      ) : userQuestions && userOnlyQuestions.length > 0 ? (
        userOnlyQuestions.map((item) => (
          <ShowContext
            postComment={postComment}
            getComments={getComments}
            incrementLikes={incrementLikes}
            incrementViews={incrementViews}
            deleteQuestion={deleteQuestion}
            setRefresher={setRefresher}
            refresher={refresher}
            deleteComment={deleteComment}
            key={item.id}
            {...item}
          />
        ))
      ) : questions.length > 0 ? (
        questions.map((item) => (
          <ShowContext
            postComment={postComment}
            getComments={getComments}
            incrementLikes={incrementLikes}
            incrementViews={incrementViews}
            deleteQuestion={deleteQuestion}
            setRefresher={setRefresher}
            deleteComment={deleteComment}
            refresher={refresher}
            key={item.id}
            {...item}
          />
        ))
      ) : (
        <div className="border border-danger">
          There are no questions to display
        </div>
      )}
      {searchTerm && filteredQuestions.length === 0 ? (
        <div className="border border-danger p-2 text-center">
          Sorry, No match for the search.
        </div>
      ) : (
        !searchTerm &&
        questions.length === 0 && (
          <div className="border border-danger p-2 text-center">
            There are no questions to display
          </div>
        )
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
  incrementLikes: PropTypes.func,
  incrementViews: PropTypes.func,
  deleteQuestion: PropTypes.func,
  refresher: PropTypes.bool,
  setRefresher: PropTypes.func,
  deleteComment: PropTypes.func,
};

export default List;
