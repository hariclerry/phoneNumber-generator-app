import React from 'react';
import { Fragment } from 'react';

class NavBAR extends React.Component {
  state = {};
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
              <h1 className="nav-item nav-link" style={{marginLeft: '320px'}}>
              CHM Phone Number generator
              </h1>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default NavBAR;
