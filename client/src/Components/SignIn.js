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
          <button
            onClick={() => firebase.auth().signOut()}
            className="btn btn-danger font-weight-bold text-white mr-4 mt-3"
          >
            Sign out
          </button>
        </div>
      );
    }
  }
}

export default SignIn;
