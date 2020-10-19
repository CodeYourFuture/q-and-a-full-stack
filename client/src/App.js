/* eslint-disable linebreak-style */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import List from "./Components/List";
import AskQuestion from "./Components/AskQuestion";
import "./App.css";
import {
  getQuestions,
  postQuestion,
  postComment,
  getComments,
} from "./service";
import NavMenu from "./Components/NavMenu";

function App() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState(false);

  useEffect(() => {
    getQuestions().then((questions) => setData(questions));
  }, [formData]);

  const formMonitor = () => {
    setFormData(!formData);
  };
  return (
    <Router>
      <div className="App">
        <div className="container">
          <NavMenu />
          <Switch>
            <Route exact path="/ask">
              <AskQuestion
                formMonitor={formMonitor}
                postQuestion={postQuestion}
              />
            </Route>
            <Route exact path="/home">
              <List
                data={data}
                getComments={getComments}
                postComment={postComment}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
