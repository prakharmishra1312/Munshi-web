import React from "react";
import axios from "axios";

import { Form } from "react-bootstrap";

class Login extends React.Component {
  handleSubmit = event => {
    const url = "http://localhost:8081/api/v1/users/";
    event.preventDefault();
    
    var target=event.target;
    const user = {
      id: target.email.value,
      username: target.email.value,
      email: target.email.value,
      firstName: target.firstname.value,
      middleName: target.middlename.value,
      lastName: target.lastname.value,
    };
    console.log(user);

    axios.post(url, user).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error.response.data)
  });
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}> 
          <div className="form-row">
            <div className="form-group col-md-5">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
                name="email"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-5">
              <label for="inputPassword4">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                placeholder="Password"
                name="password"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group  col-md-3">
              <label for="inputFirstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="inputFirstName"
                placeholder="First Name"
                name="firstname"
              />
            </div>
            <div className="form-group  col-md-3">
              <label for="inputMiddleName">Middle Name</label>
              <input
                type="text"
                className="form-control"
                id="inputMiddleName"
                placeholder="Middle Name"
                name="middlename"
              />
            </div>
            <div className="form-group col-md-3">
              <label for="inputLastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="inputLastName"
                placeholder="Last Name"
                name="lastname"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </Form>
      </div>
    );
  }
}

export default Login;
