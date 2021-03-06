/* eslint-disable linebreak-style */
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Accordion, Card, Button } from "react-bootstrap";
import { FaChevronDown, FaChevronUp, FaLink, FaHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import Moment from "react-moment";
import { Comment } from "./Comment";
import ShowComments from "./ShowComments";
import UserContext from "./Context";
import ClapButton from "./ClapButton";
import DeleteQuestionModal from "./DeleteQuestionModal";

const ShowContext = ({
  id,
  title,
  context,
  email,
  postComment,
  getComments,
  question_date,
  incrementLikes,
  likes,
  incrementViews,
  views,
  deleteQuestion,
  setRefresher,
  refresher,
  deleteComment,
}) => {
  const [comments, setComments] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const [open, setOpen] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [likeCounter, setLikeCounter] = useState(likes);
  const [viewsCounter, setViewsCounter] = useState(views);
  const [clapClicked, setClapClicked] = useState(likes > 0);
  const [commentRefresher, setCommentRefresher] = useState(false);
  const [show, setShow] = useState(false);

  const user = useContext(UserContext);

  const handleClose = () => setShow(false);

  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

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
  }, [refresh, commentRefresher]);

  useEffect(() => {
    !open ? setViewsCounter(viewsCounter + 1) : setViewsCounter(viewsCounter);
  }, [open]);

  const handleCancelClick = (state) => {
    setHidden(state);
  };

  const handleLikeClick = (event) => {
    incrementLikes(id).then((response) => {
      setLikeCounter(response);

      setClapClicked(response > 0);
    });
    event.preventDefault();
    event.stopPropagation();
  };

  const removeQuestion = (e) => {
    e.preventDefault();
    user
      .getIdToken()
      .then((token) => {
        return deleteQuestion({
          id: id,
          email: user.email,
          token: token,
        });
      })
      .then((result) => {
        setRefresher(!refresher);
        console.log(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const viewsController = () => {
    incrementViews(id).then((response) => {
      setViewsCounter(response);
    });
  };

  return (
    <Accordion className="p-2" defaultActiveKey="1">
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="0"
          id={`${id}`}
          className="quest-title card-header"
          onClick={() => {
            setOpen(!open);
            if (open) {
              viewsController();
            }
          }}
        >
          <div className="p-2 lead font-weight-bold">
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
              className="text-muted d-block font-weight-lighter mt-2"
            >
              {question_date}
            </Moment>
          </div>

          <div className="d-flex flex-row float-right text-secondary text-muted mt-4 mr-5 ">
            <div className="pl-2 d-flex flex-column text-secondary text-muted">
              <p className="text-muted ml-3 margin-bottom">{comments.length}</p>
              <p className="text-muted">
                {comments.length == 1 ? `Reply` : `Replies`}
              </p>
            </div>
            <div onClick={handleLikeClick} className="d-flex flex-column px-3">
              <p className="text-muted margin-bottom pl-1">{likeCounter}</p>
              {clapClicked ? <ClapButton /> : <ClapButton />}
            </div>
            <div className="d-flex flex-column pr-2">
              <p className="text-muted margin-bottom pl-2">{viewsCounter}</p>
              <p className="text-muted">Views</p>
            </div>
          </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="border-top bg-light">
            <div
              className={
                context.trim().length > 7
                  ? "bg-white rounded card"
                  : "bg-white rounded"
              }
            >
              {context.trim().length > 7 ? (
                <Card.Text
                  dangerouslySetInnerHTML={createMarkup()}
                  className="text-left py-2 px-3"
                />
              ) : (
                <Card.Text dangerouslySetInnerHTML={createMarkup()} />
              )}
              <DeleteQuestionModal
                handleClose={handleClose}
                show={show}
                removeQuestion={removeQuestion}
              />

              {user?.email === email && (
                <div className="d-flex justify-content-end">
                  <a href={`/edit-question/${id}`} className="mr-3">
                    edit
                  </a>
                  <a href="" onClick={handleShow} className="mr-3">
                    delete
                  </a>
                </div>
              )}
            </div>

            <ShowComments
              comments={comments}
              deleteComment={deleteComment}
              setCommentRefresher={setCommentRefresher}
              commentRefresher={commentRefresher}
              handleShow={handleShow}
              handleClose={handleClose}
              show={show}
              removeQuestion={removeQuestion}
            />

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
  email: PropTypes.string,
  getComments: PropTypes.func,
  postComment: PropTypes.func,
  question_date: PropTypes.string,
  incrementLikes: PropTypes.func,
  likes: PropTypes.number,
  incrementViews: PropTypes.func,
  views: PropTypes.number,
  deleteQuestion: PropTypes.func,
  setRefresher: PropTypes.func,
  refresher: PropTypes.bool,
  deleteComment: PropTypes.func,
};

export default ShowContext;
