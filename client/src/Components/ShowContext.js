import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Accordion, Card, Button } from "react-bootstrap";
import { FaChevronDown, FaChevronUp, FaLink, FaHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import Moment from "react-moment";
import { Comment } from "./Comment";
import ShowComments from "./ShowComments";
import UserContext from "./Context";

const ShowContext = ({
  id,
  title,
  context,
  postComment,
  getComments,
  question_date,
}) => {
  const [comments, setComments] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const [open, setOpen] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [likeCounter, setLikeCounter] = useState(0);
  const [viewsCounter, setViewsCounter] = useState(0);
  const [heartClicked, setHeartClicked] = useState(false);

  const user = useContext(UserContext);

  const handleClick = () => {
    setShowEdit(true);
    setHidden(true);
  };

  function createMarkup() {
    return { __html: context };
  }

  useEffect(() => {
    getComments(id).then((data) => {
      setComments(data);
    });
  }, [refresh]);

  useEffect(() => {
    !open ? setViewsCounter(viewsCounter + 1) : setViewsCounter(viewsCounter);
  }, [open]);

  const handleCancelClick = (state) => {
    setHidden(state);
  };

  const handleLikeClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setLikeCounter(likeCounter + 1);
    setHeartClicked(!heartClicked);
  };

  return (
    <Accordion className="p-2" defaultActiveKey="1">
      <Card className=" bg-light">
        <Card.Header
          as="header"
          id={`${id}`}
          className="text-left lead font-weight-bold"
        >
          <Accordion.Toggle
            as="div"
            variant="link"
            eventKey="0"
            className="quest-title py-3 border border-light rounded px-2 mb-5"
            onClick={() => setOpen(!open)}
          >
            <div className="p-2">
              <small>
                <a href={`/#${id}`} className="xs">
                  <FaLink />
                </a>
              </small>
              &nbsp;
              {title}
              {open ? (
                <FaChevronDown className="float-right ml-5" />
              ) : (
                <FaChevronUp className="float-right ml-5" />
              )}
              <Moment
                fromNow
                className="text-muted d-block font-weight-lighter"
              >
                {question_date}
              </Moment>
            </div>

            <div className="d-flex flex-row float-right text-secondary text-muted mt-4 mr-5 ">
              <div className="pl-2 d-flex flex-column text-secondary text-muted">
                <p className="text-muted ml-3">{comments.length} </p>
                <p className="text-muted"> Replies </p>
              </div>

              {!heartClicked ? (
                <div
                  onClick={handleLikeClick}
                  className="d-flex flex-column px-5"
                >
                  <p className="text-muted">{likeCounter}</p>
                  <FaHeart size={16} className="text-muted" />
                </div>
              ) : (
                <div
                  className="d-flex flex-column px-5"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    setLikeCounter(likeCounter - 1);
                    setHeartClicked(!heartClicked);
                  }}
                >
                  <p className="text-muted">{likeCounter}</p>
                  <FcLike size={18} className="text-muted" />
                </div>
              )}

              <div className="d-flex flex-column pr-2">
                <p className="text-muted">{viewsCounter}</p>
                <p className="text-muted">Views </p>
              </div>
            </div>
            {/* <Moment fromNow className="text-muted d-block font-weight-lighter">
              {question_date}
            </Moment> */}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Card.Text
              dangerouslySetInnerHTML={createMarkup()}
              className="text-left py-2 ml-2 bg-white"
            />
            {user && (
              <div className="d-flex justify-content-end">
                <a href="" className="mr-3">
                  edit
                </a>
                <a href="" className="mr-3">
                  delete
                </a>
              </div>
            )}
            <ShowComments comments={comments} />

            <Accordion defaultActiveKey="1">
              <Accordion.Toggle
                as="div"
                variant="link"
                eventKey={refresh ? "0" : "1"}
              >
                {user && !hidden && (
                  <Button
                    onClick={handleClick}
                    className="primary-color float-left mb-3 mt-3 font-weight-bold text-white"
                    variant="button"
                  >
                    Answer this Question
                  </Button>
                )}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={refresh ? "0" : "1"}>
                <Comment
                  setRefresh={setRefresh}
                  showEdit={showEdit}
                  refresh={refresh}
                  postComment={postComment}
                  id={id}
                  handleCancelClick={handleCancelClick}
                  setShowEdit={setShowEdit}
                />
              </Accordion.Collapse>
            </Accordion>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

ShowContext.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  context: PropTypes.string,
  getComments: PropTypes.func,
  postComment: PropTypes.func,
  question_date: PropTypes.string,
};

export default ShowContext;
