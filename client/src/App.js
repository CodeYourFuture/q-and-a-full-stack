/* eslint-disable linebreak-style */
import React from "react";
import List from "./Components/TestList";
import AskQuestion from "./Components/AskQuestion";

import "./App.css";
// import { getMessage } from "./service";
// import logo from "./logo.svg";

// export function App() {
// 	const [message, setMessage] = useState("Loading...");

// 	useEffect(() => {
// 		getMessage().then((message) => setMessage(message));
// 	}, []);

// 	return (
// 		<main role="main">
// 			<div>
// 				<img className="logo" data-qa="logo" src={logo} alt="Just the React logo" />
// 				<h1 className="message" data-qa="message">{message} local mesage</h1>
// 			</div>
// 		</main>
// 	);
// }

function App() {
	return (
		<div className="App">
			<div className="container">
		  <AskQuestion />
		  <List />
			</div>
	  	</div>
	);
}

export default App;
