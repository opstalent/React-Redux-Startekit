import React from 'react';
import {Menu} from 'semantic-ui-react';
// import {Login, Signup} from '../modules/auth';
import logo from '../../../media/track-logo.png';
import './header.scss';

const Navbar = ({location}) => (
  <Menu className="TopMenu">
    <Menu.Menu>
      <Menu.Item>
      <h3>Routes Run Well</h3>
      <img src={logo} alt="" className="NavbarLogo"/>
      </Menu.Item>
    </Menu.Menu>
    <Menu.Menu className="right-menu" position="right">
      <Menu.Item className="item">
        Sign Up
      </Menu.Item>
      <Menu.Item>
        Login
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;
