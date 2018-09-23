import React from 'react'
import {
  Router,
  Route
} from 'react-router-dom';

import history from '../History';
// import {
//   SignupComponent,
//   DashBoard
// } from './../components/index';

import {
  Signin,Signup,DashBoard
} from './../container/index';

const ParentApp = () => (
  <div>
    {/* App routing goes here!! */}
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/" component={Signin} /> 
    <Route exact path="/signin" component={Signin} /> 
    <Route exact path="/dashboard" component={DashBoard} />

  </div>
);

const AppRoutes = () => {
  return (
    <Router history={history}>
      <Route component={ParentApp} />
    </Router>
  )
};

export default AppRoutes;