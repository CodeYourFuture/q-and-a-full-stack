import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { useEffect } from "react";

const ScrollHandler = ({ children, location }) => {
  useEffect(() => {
    console.log(location);
    let hash = window.decodeURI(location.hash.replace("#", ""));
    let element = document.getElementById(hash);
    console.log(element);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView();
      }, 0);
    }
  });

  return children;
};

ScrollHandler.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
  }).isRequired,
};

export default withRouter(ScrollHandler);
