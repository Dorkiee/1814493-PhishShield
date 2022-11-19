
import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const SelectLogin = () => {
  return (
    <div>
        <Nav>
          <NavItem>
            <NavLink to="/log-in-Admin" className="nav-link">
             <p>Admin Login</p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/log-in" className="nav-link">
              Employee Login
            </NavLink>
          </NavItem>
        </Nav>
    </div>
  );
};
  
export default SelectLogin;