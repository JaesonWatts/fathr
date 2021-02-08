import React, { Component } from 'react';
import axios from 'axios';
// import { response } from 'express';

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    const {
      email,
      password,
      password_confirmation
    } = this.state
    event.preventDefault();
    axios
      .post("http://127.0.0.1:3001/registrations",
      {
        user: {
        email: email,
        password: password,
        password_confirmation: password_confirmation
        }
      },
      { 
        withCredentials: true 
      })
      .then(res => {
      console.log("registration response", res);
    }).catch(error => {
      console.log("registration error", error);
    });
  }

  handleChange(event) {
    
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={this.state.email} 
            onChange={this.handleChange} 
            required 
          />

              <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={this.state.password} 
            onChange={this.handleChange} 
            required 
          />

<input 
            type="password" 
            name="password_confirmation" 
            placeholder="Password Confirmation" 
            value={this.state.password_confirmation} 
            onChange={this.handleChange} 
            required 
          />
          <button type='submit'>Register</button>

        </form>
      </div>
      );
  }
}