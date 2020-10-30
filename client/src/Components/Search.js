import React from "react";
import { Form, FormControl } from "react-bootstrap";
import PropTypes from "prop-types";

const Search = ({ searchChange, questions }) => {
  const handleChange = (e) => {
    searchChange(e.target.value);
  };

  return (
    <div className="container p-2 mb-3 bg-light d-flex justify-content-between">
      <h2 className="ml-3 ">
        {questions.length > 1
          ? `${questions.length} Questions`
          : `${questions.length} Question`}
      </h2>
      <Form inline>
        <FormControl
          className="searchBar mr-sm-2"
          type="text"
          aria-label="search bar"
          placeholder="Search questions"
          onChange={handleChange}
        />
      </Form>
    </div>
  );
};

Search.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      question_date: PropTypes.string,
      context: PropTypes.string,
    })
  ),
  searchChange: PropTypes.bool,
};

export default Search;
