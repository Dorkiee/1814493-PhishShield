import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

//NEED TO DISTINGUSION WITH USER WANTS TO LOGIN AND POST THE RIGHT DATA BASED ON ROLE??? 
//TICK "isAdmin" TO TRUE IF EMAIL MATCH ADMIN USER'S EMAIL AND LOG THEM INTO THE SOC_DASHBOARD ??

class userLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      u_email: "",
      u_password: "",
      role: "user",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { u_email, u_password, role } = this.state;
    console.log(u_email, u_password);
    fetch("http://localhost:4000/app/log-in", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        u_email,
        u_password,
        role,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userERegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("isLoggedIn", true);
          window.localStorage.setItem("accoutType", this.state.role);
          window.location.href = "/EmployeeDashboard";
        }
      });
  }
  
  render () {
  return (
    <div class="containerForm">
    <form onSubmit={this.handleSubmit}>
    <h3>Sign In</h3>

    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        onChange={(e) => this.setState({ u_email: e.target.value })}
      />
    </div>

    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        onChange={(e) => this.setState({ u_password: e.target.value })}
      />
    </div>

    <div className="mb-3">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          Remember me
        </label>
      </div>
    </div>

    <div className="d-grid">
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
    <p className="forgot-password text-right">
      <a href="/select-sign-up">Sign Up</a>
    </p>
  </form> 
  </div>  
  );
  }
};
  
export default userLogin;