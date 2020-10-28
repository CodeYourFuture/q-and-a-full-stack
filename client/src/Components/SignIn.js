import React from "react";
import "../App.css";
import { StyledFirebaseAuth } from "react-firebaseui";
import * as firebase from "firebase";

class SignIn extends React.Component {
  state = {
    isSignedIn: false,
  };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => this.setState({ isSignedIn: !!user }));
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div className="">
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      );
    } else {
      return (
        <div>
          <a
            className="btn btn-danger mr-4 mt-3"
            height="40"
            onClick={() => firebase.auth().signOut()}
          >
            Sign out
          </a>
        </div>
      );
    }
  }
}

export default SignIn;
