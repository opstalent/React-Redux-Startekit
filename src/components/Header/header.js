import React from 'react';
import {Menu} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import {Login, Signup} from '../auth/index.js';
import logo from '../../../media/track-logo.png';
import './header.scss';

export default class Navbar extends React.Component {
  render() {
    return (
      <Menu className="TopMenu">
        <Menu.Menu>
          <Menu.Item>
          <h3>Routes Run Well</h3>
          <img src={logo} alt="" className="NavbarLogo"/>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu className="right-menu" position="right">
          <Menu.Item className="item">
            <Link to="/signup">Signup</Link>
          </Menu.Item>
          <Menu.Item>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
