import React, { Component } from "react";
import { connect } from "react-redux";
import { randomLetter } from "../actions/letter";

class Letter extends Component {

    componentDidMount(){
        this.props.randomLetter()
    }
    
  render() {
    return (
      <div className="teal-text text-darken-2">
        <h1 className="teal-text text-darken-2">From-Letter-To-Word</h1>
        Type in a country starting with the letter
        <h2>{this.props.letter}</h2>
      </div>
    );
  }
}


const mapStateToProps = reduxState => {
    return {
      letter: reduxState.letter
    };
  };
  
export default (
    connect(
      mapStateToProps, { randomLetter }
    )(Letter)
  );
