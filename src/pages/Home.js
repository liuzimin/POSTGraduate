import "../css/styles.css";
import Item from "../components/Items";
import React, { Component } from "react";

export class Home extends Component {
  state = { clicked: [true, false, false], text: "pt. 1" };

  click = (index) => {
    console.log("meow");
    var temp = [false, false, false];
    temp[index] = true;
    this.setState({ clicked: temp });
    if (index === 0) {
      this.setState({ text: "pt. 1" });
    } else if (index === 1) {
      this.setState({ text: "pt. 2" });
    } else {
      this.setState({ text: "pt. 3" });
    }
  };

  render() {
    return (
      <div className="background">
        <div className="header">
          {this.state.clicked.map((values, index) => (
            <div onClick={() => this.click(index)}>
              <Item id={index} clicked={this.state.clicked[index]}></Item>
            </div>
          ))}
          <div className="desc">{this.state.text}</div>
        </div>
      </div>
    );
  }
}

export default Home;
