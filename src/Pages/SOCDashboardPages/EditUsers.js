import React, { Component } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
import DashboardNav from "../../components/Navbar/DashboardNav.js";
import withRouter from "./withRouter.js";

class EditUsers extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        isAdmin: false,
      }
    this.onChangeFirstName = this.onChangeFirstName.bind(this)
    this.onChangeLastName = this.onChangeLastName.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangeRole = this.onChangeRole.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }


  componentDidMount() {

    axios.get('http://localhost:4000/app/edits/' + this.props.params.id)
      .then(response => {

        this.setState({
        email: response.data.email,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        role: response.data.role
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  onChangeFirstName(event) {
    this.setState({ firstName: event.target.value })
  }
  onChangeLastName(event) {
    this.setState({ lastName: event.target.value })
  }
  onChangeEmail(event) {
    this.setState({ email: event.target.value })
  }
  onChangeRole(event) {
    this.setState({ role: event.target.value })
  }
  onSubmit(event) {
    event.preventDefault()

    const editUserObject = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      role: this.state.role
    };
    axios.put('http://localhost:4000/app/update/' + this.props.params.id, editUserObject)
      .then((res) => {
        console.log(res.data)
        console.log('User successfully updated')
      }).catch((error) => {
        console.log(error)
      })
    // Redirect to employee list 
   
  }

  render() {
    return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
    <div class="wrapper">
    <DashboardNav/>
    <div class="main_content">
    <div class="info">
      <div class="containerForm">
        <form onSubmit={this.onSubmit} >
          <div className='mb-3'>
              <label>Update Email Address</label>
              <input className="form-control" 
              type="email" 
              id="email" 
              placeholder={this.state.email}
              onChange={this.onChangeEmail}
              value={this.state.email}
              />
          </div>
          <div className="mb-3">
            <label>Update First Name</label>
              <input  type="text" 
               id="firstName"  
               className="form-control"
               placeholder="First Name *"
               onChange={this.onChangeFirstName}
              value={this.state.firstName}
               />
          </div>
          <div className="mb-3">
            <label>Update Last Name</label>
              <input  type="text" 
              id="lastName" 
              className="form-control" 
              placeholder="Last Name *"
              onChange={this.onChangeLastName}
              value={this.state.lastName}
              />
          </div>
          <div className="mb-3">
            <label>Update Role</label>
              <input className="form-control" 
              type="role"  
              id="role" 
              placeholder="Role *"
              onChange={this.onChangeRole}
              value={this.state.role}
              />
          </div>
          <div className='d-grid'>
          <button type='submit' className='btn btn-primary' value='Submit'>
            Update User
          </button>
          </div>
          </form>
          </div>

        </div>
        </div>
        </div>
        </nav>

    </div>
    );
  }
}
export default withRouter(EditUsers);