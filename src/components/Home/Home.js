import React from "react";
import "./home.scss";
import Navbar from '../Header/header.js';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="well homePage">
          <h4>Hello Im OpsTalent React-Redux starter Kit</h4>
        </div>
      </div>
    );
  }
}
