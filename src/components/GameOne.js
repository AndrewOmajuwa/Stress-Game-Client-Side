import React, { Component } from "react";
import ScoreBoard from "./ScoreBoard";
import Letter from "./Letter";
import Timer from "./Timer";
import Answer from "./Answer";
import Countries from "./Countries";

export default class GameOne extends Component {
  render() {
    return (
      <div>
        <ScoreBoard />
        <Letter />
        <Timer />
        <Answer />
        <Countries />
      </div>
    );
  }
}
