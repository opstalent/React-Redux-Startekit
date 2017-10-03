import React from "react";
import "./app.scss";

class App extends React.Component {
  render() {
    return (
      <div className="well test">
        {this.props.children}
      </div>
    );
  }
}

export default App;
