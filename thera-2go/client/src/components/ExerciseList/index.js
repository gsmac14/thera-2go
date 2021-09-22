import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both ExerciseList and ExerciseListItem from this file

// ExerciseList renders a bootstrap list item
export function ExerciseList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// ExerciseListItem renders a bootstrap list item containing data from the exercise api call
export function ExerciseListItem({
  thumbnail,
  title,
  explain
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail || "https://placehold.it/300x300"} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>Explaination: {explain}</p>

          </Col>
        </Row>
      </Container>
    </li>
  );
}