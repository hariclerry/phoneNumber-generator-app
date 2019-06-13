import React from 'react';
import { Fragment } from 'react';

class NavBAR extends React.Component {
  state = {};
  render() {
    return (
      <Fragment>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="/">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
              <a class="nav-item nav-link" href="/">
                Features
              </a>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default NavBAR;
