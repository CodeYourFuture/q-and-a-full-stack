/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React,{ useState,useEffect } from "react";


const List = ({ data })=>{
	const [openQ,setOpenQ] = useState(false);

	const openContext = (e)=>{
		if (e.target.lastChild.className == "hidden"){
			e.target.lastChild.className = "visible";
		} else if(e.target.lastChild.className == "visible") {
			e.target.lastChild.className = "hidden";
		} else {
			return;
		}
	};

	return (
		<ul className="list-group">
			{data.map((question) => (
				<div key={question.id}  onClick={openContext}>
					<li className="list-group-item d-flex my-2 bg-light">
						<span className="mr-auto p-2">{question.title}</span>
						<span className="badge badge-primary badge-pill p-3">14</span>
						<span className="badge p-3">{question.question_date}</span>
					</li>
					<div className ="hidden" id={question.id}>{question.context}</div>
				</div>
			))}
		</ul>
	);
};

export default List;