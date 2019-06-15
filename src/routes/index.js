import React from "react";

import { Route } from "react-router-dom";

import Signup from "../components/user/register";
import Login from "../components/user/login";
import Generator from '../components/phoneNumberGenerator';


class Routes extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Route exact path="/" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Generator} />
        </div>
      </div>
    );
  }
}
export default Routes;