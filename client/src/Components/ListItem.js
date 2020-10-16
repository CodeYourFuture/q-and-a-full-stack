import React, { useState } from "react";
import PropTypes from "prop-types";

const ListItem = ({ id, title, context }) => {
  const [open, setOpen] = useState(false);
  const handleClick = (id) => (e) => {
    if (e.currentTarget.id == id) {
      console.log(e.currentTarget.id);
      setOpen(!open);
    }
  };

  return (
    <button className="" key={id} id={id} onClick={handleClick(id)}>
      <div>
        <span className="">{title}</span>
      </div>
      <div className={open ? "visible" : "hidden"}>{context}</div>
    </button>
  );
};

ListItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  question_date: PropTypes.string,
  context: PropTypes.string,
};

export default ListItem;
