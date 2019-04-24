import React from 'react';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import User from './User';
import Devices from './Devices'
import NoMatch from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigatorBar'
import { Jumbotron } from './components/Jumbotron';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
   <React.Fragment>
     <NavigationBar></NavigationBar>
      <Jumbotron/>
     <Layout>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/user" component={User} />
        <Route exact path="/devices" component={Devices} />
        <Route component="{ NoMatch }" />
      </Switch>
    </Router>
    </Layout>

   </React.Fragment>
  );
}

export default App;
