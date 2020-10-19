import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Accordion, Card, Button } from "react-bootstrap";
import { Comment } from "./Comment";
import ShowComments from "./ShowComments";

const ShowContext = ({ id, title, context, postComment, getComments }) => {
  const [showComment, setShowComment] = useState(false);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(id).then((data) => {
      setComments(data);
      console.log(data);
    });
  }, []);

  const handleSubmit = () => {
    setShowComment(!showComment);
  };

  return (
    <Accordion className="p-2" defaultActiveKey="1">
      <Card className=" bg-light">
        <Card.Header className="text-left lead font-weight-bold">
          <Accordion.Toggle
            as="div"
            variant="link"
            eventKey="0"
            className="py-3"
          >
            {title}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Card.Text className="text-left py-2">{context}</Card.Text>
            <ShowComments comments={comments} />
            <Accordion defaultActiveKey="1">
              <Accordion.Toggle as="div" variant="link" eventKey="0">
                <Button className="float-right mb-3" variant="info">
                  Answer this Question
                </Button>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Comment
                  handleSubmit={handleSubmit}
                  postComment={postComment}
                  id={id}
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
  //comment: PropTypes.string,
  //question_date: PropTypes.string,
  context: PropTypes.string,
  getComments: PropTypes.func,
  postComment: PropTypes.func,
};

export default ShowContext;
