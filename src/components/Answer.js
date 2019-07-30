import React, { Component } from "react";

const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

export default class Answer extends Component {
  state = {
    answer: ""
  };

   randomLetter = () => {
    return letters[Math.floor(Math.random() * letters.length)].toUpperCase();
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  
  onSubmit = event => {
      console.log('the state is', this.state)
    // const { answer } = this.state;
    // this.props.checkAnswer(answer);
    this.randomLetter()
    event.preventDefault();
  };

  render() {
    return (
      <form className="white" onSubmit={this.onSubmit}>
        <h3>Your Answer</h3>
        <div>
          <label name="answer">
            Answer:
            <input
              type="answer"
              value={this.state.value}
              name="answer"
              onChange={this.onChange}
            />
          </label>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}
