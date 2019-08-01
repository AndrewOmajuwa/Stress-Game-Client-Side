import React, { Component } from "react";
import { connect } from "react-redux";
import { setTime, setTime2 } from "../actions/timer";
import Alert from './Sound'

class Timer extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  handleChange = () => {
    this.props.setTime({ timerOn: true });
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
        this.props.setTime2({ timerOn: false });
        alert("Your Time Is Up!!!");
      }
    }, 10);
    this.handleChange();
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
    this.props.setTime2({ timerOn: false });
  };
  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({
        timerTime: this.state.timerStart
      });
    }
  };

  adjustTimer = input => {
    const { timerTime, timerOn } = this.state;
    const max = 216000000;
    if (!timerOn) {
      if (input === "incHours" && timerTime + 3600000 < max) {
        this.setState({ timerTime: timerTime + 3600000 });
      } else if (input === "decHours" && timerTime - 3600000 >= 0) {
        this.setState({ timerTime: timerTime - 3600000 });
      } else if (input === "incMinutes" && timerTime + 60000 < max) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === "incSeconds" && timerTime + 1000 < max) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 1000 });
      }
    }
  };


  render() {
    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);
    const alert = () => {
      if(this.props.timer.timerOn === true)
      return (
       <Alert />
      ) 
     }

    return (
      <div>
        <div className="Countdown-label">Hours : Minutes : Seconds</div>
        <div className="Countdown-display">
          <button className="btn-floating btn-large waves-effect waves-light blue" onClick={() => this.adjustTimer("incHours")}>&#8679;</button>
          <button className="btn-floating btn-large waves-effect waves-light blue" onClick={() => this.adjustTimer("incMinutes")}>
            &#8679;
          </button>
          <button className="btn-floating btn-large waves-effect waves-light blue" onClick={() => this.adjustTimer("incSeconds")}>
            &#8679;
          </button>
          <div className="Countdown-time">
            <h1>
              {" "}
              {hours} : {minutes} : {seconds}
            </h1>
          </div>
          <button className="btn-floating btn-large waves-effect waves-light blue" onClick={() => this.adjustTimer("decHours")}>&#8681;</button>
          <button className="btn-floating btn-large waves-effect waves-light blue" onClick={() => this.adjustTimer("decMinutes")}>
            &#8681;
          </button>
          <button className="btn-floating btn-large waves-effect waves-light blue" onClick={() => this.adjustTimer("decSeconds")}>
            &#8681;
          </button>
          <br /> <br/>
          {timerOn === false &&
            (timerStart === 0 || timerTime === timerStart) && (
              <button className="btn waves-effect waves-light" onClick={this.startTimer}>Start</button>
            )}
          {timerOn === true && timerTime >= 1000 && (
            <button className="btn waves-effect waves-light" onClick={this.stopTimer}>Stop</button>
          )}
          {timerOn === false &&
            (timerStart !== 0 &&
              timerStart !== timerTime &&
              timerTime !== 0) && (
              <button class="btn waves-effect waves-light" onClick={this.startTimer}>Resume</button>
            )}
          {(timerOn === false || timerTime < 1000) &&
            (timerStart !== timerTime && timerStart > 0) && (
              <button className="btn waves-effect waves-light" onClick={this.resetTimer}>Reset</button>
            )}
        </div>
        <div>
          {alert()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    timer: reduxState.timer
  };
};

//use connect to call mapStateToProps after an action has been dispatched and handled by the reducers
export default connect(
  mapStateToProps,
  { setTime, setTime2 }
)(Timer);
