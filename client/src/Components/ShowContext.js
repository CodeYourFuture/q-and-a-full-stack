import React, { useState } from "react";
import PropTypes from "prop-types";
import { Accordion, Card, Button } from "react-bootstrap";
import { Comment } from "./Comment";

const ShowContext = ({ id, title, context, postComment }) => {
  const [showComment, setShowComment] = useState(false);

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
  postComment: PropTypes.func,
};

export default ShowContext;
