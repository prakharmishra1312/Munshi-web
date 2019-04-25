import React from "react";

import { Form } from "react-bootstrap";

class Login extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <div className="form-row">
            <div className="form-group col-md-5">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
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
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group  col-md-5">
              <label for="inputFirstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="inputFirstName"
                placeholder="First Name"
              />
            </div>
            <div className="form-group col-md-5">
              <label for="inputLastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="inputLastName"
                placeholder="Last Name"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </Form>
      </div>
    );
  }
}

export default Login;
