import React, { Component } from "react";
import "./Answer.css";
import { setAnswer } from "../actions/answer";
import { updateScore } from "../actions/score";
import { randomLetter } from "../actions/letter";
import { setTargetScore } from "../actions/targetScore";
import { connect } from "react-redux";

class Answer extends Component {
  state = {
    answer: "",
    answered: false,
    toggleVisibility: false,
    targetScore: 0
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value.charAt(0).toUpperCase() + value.slice(1)
    });
  };

  onChange2 = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
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
  timeUp = () => {
    alert("Your Time Is Up!");
  };

  toggleVisibility = () => {
    if (this.state.visibilityForm === true) {
      return this.setState({
        visibilityForm: false
      });
    } else {
      return this.setState({
        visibilityForm: true
      });
    }
  };

  onSubmit = event => {
    console.log("submit", this.state.targetScore);
    event.preventDefault();
    this.props.setAnswer(this.state);
    this.answerCheck();
    this.handleChange();
    this.setState({
      answer: "",
      answered: true
    });
    setTimeout(this.timeUp, 60000);
  };

  onSubmit2 = event => {
    event.preventDefault();
    this.props.setTargetScore(this.state.targetScore)
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
      <div>
        {!this.state.visibilityForm && (
          <button
            onClick={this.toggleVisibility}
            className="btn waves-effect waves-light"
          >
            Add Target Score
          </button>
        )}
        {this.state.visibilityForm && (
          <div className="form">
            <button
              onClick={this.toggleVisibility}
              className="btn waves-effect waves-light"
            >
              Hide form
            </button>
            <form onSubmit={this.onSubmit2}>
              <h4>Enter a Target Score</h4>
              <input
                type="number"
                name="targetScore"
                onChange={this.onChange2}
                value={this.state.targetScore}
                placeholder="Target Score"
                className="input"
                required
              />
              <div>
                <button className="btn waves-effect waves-light" type="number">
                  Add
                </button>
              </div>
            </form>
          </div>
        )}
        <div className="form">
          <form className="col s12 m4 l2" onSubmit={this.onSubmit}>
            <h3 className="teal-text text-darken-2">Your Answer</h3>
            <div>
              <label name="answer">
                Answer:
                <input
                  id="answer"
                  type="text"
                  value={this.state.answer}
                  name="answer"
                  onChange={this.onChange}
                />
              </label>
            </div>
            {this.state.answer && check}

            <div>
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
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
  { setAnswer, updateScore, randomLetter, setTargetScore }
)(Answer);
