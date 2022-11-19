import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import "../../_CSS/Table-Fourm.css";
import DashboardNav from "../../components/Navbar/DashboardNav.js";

export default class Department extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }  
  
  componentDidMount() {
        fetch("http://localhost:4000/app/Dashboard", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            }, 
            body: JSON.stringify ({
                token: window.localStorage.getItem("token"),
            }),
        })

        .then((response) => response.json())
        .then((data) => {
            console.log(data, "userData");
            this.setState({ userData: data.data})
        });
    }

    signOut = () => {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("isLoggedIn");
      window.localStorage.href = "/home";
    }




    render () {
      const isAdmin = this.state.userData.isAdmin;
      console.log(isAdmin, "role");
        return (
          <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
        <div class="wrapper">
        <DashboardNav/>
          <div class="main_content">
            {/*<div class="header">Welcome!! user name here</div>*/}
            <div class="info">
            <div class="Tabelcontainer">
            <div>
                <a href="/add-user" class="border-shadow">
                    <span class="text-gradient">Add Department<i></i></span>
                </a>
            </div>
            <form class="table-content">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th>Department Name</th>
                            <th>Report To</th>
                            <th>User Assigned</th>
                            <th>All Tasks Done</th>
                            <th>Task In Progress</th>
                            <th>Not Started</th>
                            <th>Created</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>No Department</td>
                      <td>Add Email</td>
                      <td>1</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>Oct 20,2022</td>
                    </tr>
                    <tr>
                      <td>Marketing & Sales</td>
                      <td>Add Email</td>
                      <td>1</td>
                      <td>2</td>
                      <td>0</td>
                      <td>0</td>
                      <td>Oct 20,2022</td>
                    </tr>
                    <tr>
                      <td>Finance</td>
                      <td>Add Email</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>Oct 20,2022</td>
                    </tr>

                    </tbody>
                </table>
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