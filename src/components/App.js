import React from "react";
import "../stylesheets/main.scss";
import "./app.scss";

// app component
export default class App extends React.Component {
  // render
  render() {
    return (
      <div className="container-test">
        {this.props.children}
      </div>
    );
  }
}
