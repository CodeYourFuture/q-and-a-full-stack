import React, { useState } from "react";

const AskQuestion = ({ handleTitle, handleBody }) => {
	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	const handleClick = () => {
		setOpen(true);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleTitle(title);
		handleBody(body);
		console.log({ title, body });
	};
	const handleInputChange = (e) => {
		setTitle(e.target.value);
	};
	const handleTextChange = (e) => {
		setBody(e.target.value);
	};

	return (
		<>
			<button
				onClick={handleClick}
				type="button"
				className="btn btn-info m-3"
			>
        	Ask a question
			</button>
			{open && (
				<form onSubmit={handleSubmit} className="my-4 w-75 mx-auto p-3 bg-secondary text-left text-white">
					<div className="form-group w-100">
						<p className="lead" >Title</p>
						<label className="w-100" htmlFor="string" >
              				Be specific and imagine you’re asking a question to another person
			  				<input
								type="text"
								className="form-control mt-2"
								value={title}
								onChange={handleInputChange}
								placeholder="Enter Title"
							></input>
						</label>
					</div>
					<div className="form-group">
						<p  className="lead">Body</p>
						<label className="w-100"  htmlFor="string" >
              			Include all the information someone would need to answer your
              			question
			  				<textarea
								value={body}
								onChange={handleTextChange}
								type="text"
								className="form-control mt-2"
								rows="5"
								placeholder="Enter Question"
							></textarea>
						</label>
					</div>
					<button type="submit" className="btn btn-info">
            			Submit
					</button>
				</form>
			)}
		</>
	);
};

export default AskQuestion;
