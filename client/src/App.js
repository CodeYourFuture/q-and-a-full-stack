/* eslint-disable linebreak-style */
import React, { useState } from "react";
import List from "./Components/TestList";
import AskQuestion from "./Components/AskQuestion";

import "./App.css";

function App() {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	const handleTitle = (newTitle) =>{
		setTitle(newTitle);
	};
	const handleBody = (newBody) =>{
		setBody(newBody);
	};
	return (
		<div className="App">
			<div className="container">
		  <AskQuestion handleTitle={handleTitle} handleBody={handleBody} />
		  <List title={title} body={body} />
			</div>
	  	</div>
	);
}

export default App;
