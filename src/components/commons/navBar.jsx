import React from 'react';
import { Fragment } from 'react';
import { Link } from "react-router-dom";

class NavBAR extends React.Component {
  state = {};
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-item nav-link active" to="/login">
                Login
                </Link>
                <Link className="nav-item nav-link active" to="/">
                Sign Up
                </Link>
              <h2 className="nav-item nav-link" style={{marginLeft: '320px'}}>
              Vodafone Phone Number generator
              </h2>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default NavBAR;
