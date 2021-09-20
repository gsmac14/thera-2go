import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";
import CardSigup from "../CardSignup";

function CardLogin() {
  const [formObject, setFormObject] = useState({});

  //Handles input made by user
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  //Event handler for onClick
  function handleSubmit(event) {
    event.preventDefault();

    logInUser(formObject.email, formObject.password);
    function logInUser(email, password) {
      if (formObject.email && formObject.password) {
        API.getUser({
          email: formObject.email,
          password: formObject.password,
        })
          .then()
          .catch((err) => console.log(err));
      }
    }
  }
  return (
    <div className="container-fluid">
       <div className="row">
         <div className="col-md-6 logCol">

      <div className="card text-center">
        <div className="card-header header">Login</div>
        <div className="card-body body">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="inputEmail"
                placeholder="Email"
              ></input>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
              ></input>
            </div>
            <button type="submit" className="btn btn-primary sub">
              Submit
            </button>
          </form>
        </div>
        </div>
         </div>
         <div className="col-md-6 signCol">
            <CardSigup/>
         </div>
       </div>

    </div>
  );
}

export default CardLogin;
