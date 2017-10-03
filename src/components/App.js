import React from "react";
import "./app.scss";

// app component
export default class App extends React.Component {
  // render
  render() {
    return (
      <div className="well test">
        {this.props.children}
      </div>
    );
  }
}
