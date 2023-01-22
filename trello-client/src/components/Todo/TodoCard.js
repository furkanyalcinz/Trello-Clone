import React from "react";
import {
  Button,
  CardBody,
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
const TodoCard = (props) => {
  return (
    
    
    <Card
      style={{
        width: "18rem", marginRight: 30
      }}
    >
      <img alt="Sample" src="https://picsum.photos/300/200" />
      <CardBody>
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {props.taskStatu}
        </CardSubtitle>
        <CardText>{props.description}</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
    
  );
};

export default TodoCard;
