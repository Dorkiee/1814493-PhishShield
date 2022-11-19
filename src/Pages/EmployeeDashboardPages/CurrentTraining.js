import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import "../../_CSS/dashboardCSS.css";
import DashboardNav from "../../components/Navbar/DashboardNav.js";

export default class CurrentTraining extends Component {
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
              <div class="info">
              Here is list of training that needs to be complete 
              </div>
              </div>
              </div>
              </nav>
            </div>
        );
    }
}