import React from 'react';
import * as math from "mathjs";
import Button from "./button";
import Input from "./input";
import Btn from "./equal-btn";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      ops: [
        ["7", "8", "9", "/"],
        ["4", "5", "6", "*"],
        ["1", "2", "3", "+"],
        ["^", "0", ".", "-"]
      ]
    };
  }

  handleEqual = () => {
    this.setState({
      input: math.eval(this.state.input)
    });
  };

  handleChange = val => {
    this.setState({
      input: this.state.input + val
    });
  };

  renderButtons = () => {
    return this.state.ops.map(row => {
      return (
        <div className="row">
          {row.map(digit => {
            return <Button handleClick={this.handleChange}>{digit}</Button>;
          })}
        </div>
      );
    });
  };

  render() {
    return (
      <div className="app">
        <Input input={this.state.input} />
        {this.renderButtons()}
        <div className="row">
          <button
            className="clearBtn"
            onClick={() => this.setState({ input: "" })}
          >
            CLEAR
          </button>
          <Btn label="equal" handleClick={this.handleEqual}>
            =
          </Btn>
        </div>
      </div>
    );
  }
}

export default App;
