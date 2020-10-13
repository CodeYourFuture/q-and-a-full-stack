/* eslint-disable linebreak-style */
import React from "react";

import data from "../../database/questions.json";

const List = () => {
	return (
		<ul className="list-group">
			{data.map((question) => (
				<div key={question.id}>
					<li className="list-group-item d-flex my-2 bg-light">
						<span className="mr-auto p-2">{question.title}</span>
						<span className="badge badge-primary badge-pill p-3">14</span>
						<span className="badge p-3">{question.Date}</span>
					</li>
				</div>
			))}
		</ul>
	);
};

export default List;
