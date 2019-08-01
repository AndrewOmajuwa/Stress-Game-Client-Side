import React, { Component } from "react";
import { connect } from "react-redux";

class ScoreBoard extends Component {


  render() {
    return (
      <nav className="nav-wrapper teal darke n-3">
        <div >
          <ul >
            <li className="right">
              <strong>Target Score: {this.props.targetScore} </strong>
            </li>
            <li>
              <strong>Actual Score: {this.props.score} </strong>
            </li>
          </ul>
        </div>
      </nav>
      
    );
  }
}


const mapStateToProps = reduxState => {
    return {
      score: reduxState.score,
      targetScore: reduxState.targetScore
    };
  };
  
  //use connect to call mapStateToProps after an action has been dispatched and handled by the reducers
  export default (
    connect(
      mapStateToProps,
    )(ScoreBoard)
  );
  