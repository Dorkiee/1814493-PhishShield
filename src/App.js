import React from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Home from "./Pages/HomePage.js";
import { useParams } from 'react-router-dom';
//import ProtectedRoutes from "./components/Navbar/ProtectedRoutes.js";
import HomeNavigation from './components/Navbar/Navigation.js';
import DNavtigation from './components/Navbar/DashboardNav.js';
import SelectSignup from './Pages/SelectRegisteration.js'
import UserSignup from './Pages/userRegisteration.js';
import AdminSignup from './Pages/adminRegisteration.js';
import Login from './Pages/Login.js';
import Dashboard from "./Pages/Portal/Dashboard.js";

import ListUser from "./Pages/SOCDashboardPages/Users.js"
import Department from "./Pages/SOCDashboardPages/Department.js";
import Training from "./Pages/SOCDashboardPages/Training.js";
import PhishingSim from "./Pages/SOCDashboardPages/Phishing.js";
import ExaminationPortal from "./Pages/SOCDashboardPages/ExaminationPortal.js";
import GetStarted from "./Pages/SOCDashboardPages/GetStarted.js";

import Examination from "./Pages/EmployeeDashboardPages/Examination.js";
import CurrentTraining from "./Pages/EmployeeDashboardPages/CurrentTraining.js";
import EditUsers from "./Pages/SOCDashboardPages/EditUsers.js";


const App = () => {
  const loggedIn = window.localStorage.getItem("isLoggedIn");
  console.log(loggedIn, "login");
  const {id} = useParams();
  return (
    <div className="App">
     <Router>
      <HomeNavigation />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/select-sign-up" element={<SelectSignup/>} />
          <Route path="/sign-up" element={<UserSignup/>} />
          <Route path="/sign-up-admin" element={<AdminSignup/>} />
          <Route path="/log-in" element={<Login/>} />       

          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/Get-Started" element={<GetStarted/>} />    
          <Route path="/Users" element={<ListUser/>} />
          <Route path="/Department" element={<Department/>}></Route>
          <Route path="/Training" element={<Training/>}></Route>
          <Route path="/Phishing" element={<PhishingSim/>}></Route>
          <Route path="/ExaminationPortal" element={<ExaminationPortal/>}></Route>
          <Route path="/edits/:id" element={<EditUsers/>}/>

          
          <Route path="/Current-Training" element={<CurrentTraining/>}></Route>
          <Route path="/Examination" element={<Examination/>}></Route>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
