import React, { Component } from 'react';
import NavBAR from '../commons/navBar';

class Login extends Component {
  state = {
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
    const { email, password } = this.state;
    if (
      email === localStorage.getItem('email') &&
      password === localStorage.getItem('password')
    ) { 
      this.props.history.push('/home');
    } else
    alert("Wrong email or password")
  };

  render() {
    const { email, password } = this.state;
    return (
    <div>
      <NavBAR/>
      <h3 style={{margin: '200px 300px 0 700px'}}> Please login </h3>
        <div class="container" style={{margin: '40px 350px 0 400px'}}> 
      <form onSubmit={this.handleFormSubmit}>
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
        <button type="submit" className="btn btn-primary col-sm-1" style={{margin: ' 10px 200px 0 300px'}}>
          Login
        </button>
      </form>
      </div>
      </div>
    );
  }
}

export default Login;
