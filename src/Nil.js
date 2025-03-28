import React, { Component } from "react";

class Greeting extends Component {
  static defaultProps = {
    message: "Hello Gokul!"
  };

  render() {
    return <h1 className="bg-primary">{this.props.message}</h1>;
  }
}

export default Greeting;
