import React, { Component } from 'react';
import NavBAR from '../commons/navBar';

class SignUp extends Component {
  state = {
    userName: '',
    email: '',
    password: ''
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = () => {
    const { userName, email, password } = this.state;
    localStorage.setItem('userName', userName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    this.props.history.push('/login');
  };

  render() {
    const { userName, email, password } = this.state;
    return (
      <React.Fragment>
        <NavBAR/>
      <div class="container" style={{margin: '200px 0 0 400px'}}>
        <h3 className="title-home"> Welcome to Vodafone Phone Number Generator App, please sign up to get started</h3>
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-group row">
          <label htmlFor="col-sm-2 col-form-label" className="col-sm-2 col-form-label">
            Name
            </label>
            <div class="col-4">
            <input
              className="form-control input-control"
              type="text"
              name="userName"
              value={userName}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="col-sm-2 col-form-label" className="col-sm-2 col-form-label">
            Email
            </label>
            <div class="col-4">
            <input
              className="form-control"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group row" >
          <label htmlFor="col-sm-2 col-form-label" className="col-sm-2 col-form-label">
            Password {' '}
            </label>
            <div class="col-4">
            <input
              className="form-control"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary col-sm-1" style={{margin: ' 10px 350px 0 300px'}}>
          Sign up
        </button>
      </form>
      </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
