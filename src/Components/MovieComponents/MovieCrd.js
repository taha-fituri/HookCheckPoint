import React from "react";
import Rating from "./Rating";
import "../../App.css";
import "./Movies.css";
import { Card } from "react-bootstrap";

function MovieCrd(props) {
  return (
    <div className="Cardcontain">
      <Card className="Card" style={{ width: "18rem", height: "500px" }}>
        <Card.Img variant="top" src={props.e.image} height="350px" />
        <Card.Body>
          <Card.Title>{props.e.name}</Card.Title>
          <Card.Text>{props.e.year}</Card.Text>
          <Card.Text>
            <Rating rate={props.e.rating} />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCrd;
