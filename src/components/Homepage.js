import React, { Component } from "react";
import { Link } from 'react-router-dom'
import './Homepage.css'

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="homepage">
          <h1>From Letter To Country</h1>
          <h5>Instructions</h5>
            Below you will find links to two games. <br/>
            Both games follow the same set of rules and adopt identical question and answer formats. <br/>
            The Key difference between both games? One incorporates visual and auditory stressors and the other one doesn't. <br/>
            <strong>Question Format:</strong> Players are Shown a <em><strong>letter</strong></em> and asked to list a <em><strong>country</strong></em> beginning with the aformentioned letter. <br/>
            <strong>Answer Format:</strong> Players are required to type in their response and <strong>press submit</strong> to validate their answer. <br/>
            <h5>The Goal</h5>
            Try and reach the <em><strong>target score</strong></em> (displayed at the top right corner of screen)  within the set time-limit
            <h6>No pressure, Don't Stress</h6>
          
          <Link to="/gameone">Game 1</Link>
           <Link to="/gametwo">Game 2</Link>
        </div>
      </div>
    );
  }
}
