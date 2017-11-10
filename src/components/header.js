import React from 'react';
import {Menu} from 'semantic-ui-react';
import logo from '../../media/track-logo.png';
const Navbar = () => (
  <Menu>
    <Menu.Menu>
      <Menu.Item>
      Main menu test
      <img src={logo} alt=""/>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;
