import React from 'react';
// import {Menu} from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// import {Login, Signup} from '../auth/index.js'
import './footer.scss';
export default class Footer extends React.Component {
  render() {
    return (
      <div className="mainFooter">
      <div className=" attached stackable menu">
        <div className="ui container">
          <a className="item">
            <i className="home icon"></i> FOOTER
          </a>
        </div>
      </div>
      </div>
    );
  }
}
