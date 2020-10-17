import React from "react";
import PropTypes from "prop-types";
import { Accordion, Card, Button } from "react-bootstrap";
import { Comment } from "./Comment";

const ListItem = ({ id, title, context, postComment }) => {
  return (
    <Accordion defaultActiveKey="1">
      <Card>
        <Card.Header className="text-left">
          <Accordion.Toggle as="div" variant="link" eventKey="0">
            {title}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Card.Text className="text-left">{context}</Card.Text>
            <Accordion defaultActiveKey="1">
              <Accordion.Toggle as="div" variant="link" eventKey="0">
                <Button className="mx-auto" variant="primary">
                  Answer this Question
                </Button>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Comment postComment={postComment} id={id} />
              </Accordion.Collapse>
            </Accordion>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

ListItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  //   question_date: PropTypes.string,
  context: PropTypes.string,
  postComment: PropTypes.func,
};

export default ListItem;
