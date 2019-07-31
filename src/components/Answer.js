import React, { Component } from "react";
import './Answer.css'
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
    if (this.state.answered) {
    }

    const correctAnswer = this.props.countries.includes(this.state.answer);

    const check = correctAnswer ? "Correct Answer" : "Incorrect Answer";

    const answerCheck = this.state.answer && check;

    return (
      <div class="container">
      <form class="col s12 m4 l2"  onSubmit={this.onSubmit}>
        <h3 class="teal-text text-darken-2">Your Answer</h3>
        <div>
          <label for="Answer" name="answer">
            Answer:
            <input
            id="answer" type="text" 
              value={this.state.answer}
              name="answer"
              onChange={this.onChange}
            />
          </label>
        </div>
        {this.state.answer && check}

        <div>
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </form>
      </div>
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
