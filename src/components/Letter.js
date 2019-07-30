import React, { Component } from "react";

export default class Letter extends Component {
  render() {
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
    function randomLetter() {
      return letters[Math.floor(Math.random() * letters.length)].toUpperCase();
    }
    return (
      <div>
        <h1>Letter</h1>
        Type in an animal name starting with the letter
        <h2>{randomLetter()}</h2>
      </div>
    );
  }
}
