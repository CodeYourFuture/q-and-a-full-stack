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
  postUser,
  incrementLikes,
  incrementViews,
  deleteQuestion,
  deleteComment,
  updateQuestion,
} from "./service";
import NavMenu from "./Components/NavMenu";
import ScrollHandler from "./Components/ScrollHandler";
import * as firebase from "firebase";
import UserContext from "./Components/Context";
import Footer from "./Components/Footer";
import EditQuestion from "./Components/EditQuestion";
import Loader from "./Components/Loader";

const firebaseConfig = {
  apiKey: "AIzaSyDCnn6mfzVroh7VQcln9atjfaa8nIEZUlQ",
  authDomain: "q-and-a-342c1.firebaseapp.com",
  databaseURL: "https://q-and-a-342c1.firebaseio.com",
  projectId: "q-and-a-342c1",
  storageBucket: "q-and-a-342c1.appspot.com",
  messagingSenderId: "248622209912",
  appId: "1:248622209912:web:fbfcb6ec6e58e198f8c68d",
  measurementId: "G-8JVYMM2GNB",
};

firebase.initializeApp(firebaseConfig);

function App() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState(false);
  const [user, setUser] = useState(null);
  const [refresher, setRefresher] = useState(false);
  const [hideAsk, setHideAsk] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  firebase.auth().onAuthStateChanged((user) => setUser(user));

  useEffect(() => {
    user
      ? postUser({
          userId: user.uid,
          email: user.email,
        })
      : null;
  }, [user]);

  useEffect(() => {
    getQuestions().then((questions) => {
      setData(questions);
      setIsLoading(false);
    });
  }, [formData, refresher]);

  const formMonitor = () => {
    setFormData(!formData);
  };
  return (
    <Router>
      <ScrollHandler>
        <UserContext.Provider value={user}>
          <div className="App">
            <div className="container">
              <NavMenu hideAsk={hideAsk} />
              {isLoading ? (
                <Loader />
              ) : (
                <Switch>
                  {user && (
                    <Route exact path="/ask">
                      <AskQuestion
                        setHideAsk={setHideAsk}
                        formMonitor={formMonitor}
                        postQuestion={postQuestion}
                      />
                    </Route>
                  )}
                  <Route exact path="/">
                    <List
                      questions={data}
                      getComments={getComments}
                      postComment={postComment}
                      incrementLikes={incrementLikes}
                      incrementViews={incrementViews}
                      deleteQuestion={deleteQuestion}
                      refresher={refresher}
                      setRefresher={setRefresher}
                      deleteComment={deleteComment}
                      setHideAsk={setHideAsk}
                    />
                  </Route>
                  <Route
                    path="/edit-question/:questionId"
                    render={({ match }) => {
                      let question = data.find(
                        (q) => q.id === parseInt(match.params.questionId)
                      );
                      return (
                        question && (
                          <EditQuestion
                            {...question}
                            updateQuestion={updateQuestion}
                            formMonitor={formMonitor}
                            setHideAsk={setHideAsk}
                          />
                        )
                      );
                    }}
                  />
                </Switch>
              )}
              <Footer />
            </div>
          </div>
        </UserContext.Provider>
      </ScrollHandler>
    </Router>
  );
}

export default App;
