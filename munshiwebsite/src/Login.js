import React from 'react';

import { Form } from 'react-bootstrap';

class Login extends React.Component{
    

    render(){
        return (

            <div>
                <Form className="form-inline">
  <div className="form-group row">
    <label for="inputEmail" className="col-sm-2 col-form-label">Username</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputEmail" placeholder="Username"/>
    </div>
  </div>
  <div className="form-group row">
    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Login</button>
    </div>
  </div>
  
</Form>
            </div>
        );
    }
}

 export default Login;