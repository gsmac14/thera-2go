import React, { useState } from "react";
import API from "../../utils/API";
import {ExerciseList, ExerciseListItem} from "../ExerciseList"
import { Container, Row, Col } from "../Grid";
import Input from "../Input";
import Button from "../Button";



function UserPage() {
//set the state
const [exercises, setExercises] = useState([]);
const [exerciseSearch, setExerciseSearch] = useState("");

const handleInputChange = event => {
  //Update the state
  const {value} = event.target;
  setExerciseSearch(value);
};

//handles submit in seach input
const handleFormSubmit = event =>{
  event.preventDefault();
  API.getImage(exerciseSearch)
  .then(res => setExercises(res.data))
  .catch(err => console.log(err))
}
return(
    <div>
        <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="ExerciseSearch"
                      value={exerciseSearch}
                      onChange={handleInputChange}
                      placeholder="Search For an Exercise"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      onClick={handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                        Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-12">
            {!exercises.length ? (
              <h1 className="text-center">No Exercises to Display</h1>
            ) : (
              <ExerciseList>
                {exercises.map(exercises => {
                  return (
                    <ExerciseListItem
                      key={exercises.title}
                      title={exercises.title}
                      explain={exercises.explain}
                      thumbnail={exercises.thumbnail}
                    />
                  );
                })}
              </ExerciseList>
            )}
          </Col>
        </Row>
      </Container>
    </div>
)
}

export default UserPage;