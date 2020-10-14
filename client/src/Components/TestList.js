/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import { getQuestions } from "../service";
import React,{ useState,useEffect } from "react";

const TestList = ({ title })=>{
	const [data,setData] = useState([]);

	useEffect(() => {
		getQuestions().then((questions) => setData(questions));
	},[]);

	useEffect(() => {
		let newQ = { title: title, id:1111111 };
		let arr = [...data, newQ];
		setData(arr);
	},[title]);

	return (
		<ul className="list-group">
			{data.reverse().map((question) => (
				<div key={question.id}>
					<li className="list-group-item d-flex my-2 bg-light">
						<span className="mr-auto p-2">{question.title}</span>
						<span className="badge badge-primary badge-pill p-3">14</span>
						<span className="badge p-3">{question.question_date}</span>
					</li>
				</div>
			))}
		</ul>
	);
};

export default TestList;