import React, { Component } from "react";
import { setAnswer } from "../actions/answer";
import { updateScore } from "../actions/score";
import { randomLetter } from "../actions/letter";
import { connect } from "react-redux";

class Answer extends Component {
  state = {
    answer: "",
    answered: false
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value.charAt(0).toUpperCase() + value.slice(1)
    });
  };

  answerCheck = () => {
    const correctAnswer = this.props.countries.includes(this.state.answer);
    if (correctAnswer) {
      this.props.updateScore();
    }
  };

  handleChange = () => {
    this.props.randomLetter();
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.setAnswer(this.state.answer);
    this.answerCheck();
    this.handleChange();
    this.setState({
      answer: "",
      answered: true
    });
  
    
  };

  render() {
    if (!this.props.countries) {
      return "Loading";
    }
    if(this.state.answered) {

    }

    const correctAnswer = this.props.countries.includes(this.state.answer);

    const check = correctAnswer ? 'Correct Answer' : 'Incorrect Answer'

    const answerCheck = this.state.answer && check 

    console.log("ANSWER", this.state.answer)

    return (
      <form className="white" onSubmit={this.onSubmit}>
        <h3>Your Answer</h3>
        <div>
          <label name="answer">
            Answer:
            <input
              type="answer"
              value={this.state.answer}
              name="answer"
              onChange={this.onChange}
            />
          </label>
        </div>
        {this.state.answer && check}
        
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    answer: reduxState.answer,
    countries: reduxState.countries
  };
};

export default connect(
  mapStateToProps,
  { setAnswer, updateScore, randomLetter }
)(Answer);
