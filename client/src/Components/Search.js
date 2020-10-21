import React from "react";

const Search = () => {
  return (
    <form className="my-4 w-75 mx-auto p-3 bg-secondary text-left text-white">
      <div className="form-group">
        <label className="lead w-100">
          <input
            name="title"
            type="text"
            className="form-control"
            id="title"
            // value=""
            aria-describedby="emailHelp"
            placeholder="Search a question title"
          ></input>
        </label>
        <button type="button" className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
