/* eslint-disable linebreak-style */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import SingleQuestion from "./Components/SingleQuestion";

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
            <Route exact path="/">
              <List
                data={data}
                getComments={getComments}
                postComment={postComment}
              />
            </Route>
            <Route
              path="/question/:questionId"
              render={({ match }) => {
                let question = data.find(
                  (q) => q.id === parseInt(match.params.questionId)
                );

                return <SingleQuestion {...question} />;
              }}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
