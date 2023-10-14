import { color } from "@chakra-ui/react";
import { Component } from "react";
import { render } from "sass";

class classNameDisplay extends Component {
  state = {
    Name: "Ezekiel",
    middle: "Bassey",
    last: "Archibong",
    from: "Cross River State",
  };
  style = {
    color: "white",
    fontSize: "16px",
    margin: "0px",
    background: "red",
    width: "400px",
    display: "flex",
    flexDirection: "column",
  };
  render() {
    return (
      <>
        <p style={this.style}>
          I'm {this.state.Name} {this.state.middle} {this.state.last} and i'm
          from {this.state.from}
          <p style={this.style}>c</p>
        </p>
      </>
    );
  }
}
export default classNameDisplay;
