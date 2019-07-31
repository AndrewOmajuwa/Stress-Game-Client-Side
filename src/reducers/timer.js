//import action type
import { TIMER, TIMEROFF } from "../actions/timer";

const initialState = {
    timerOn: false
  };

//define initial and altered redux state after action is dispatched.
export default (reduxState = initialState, action = {}) => {
  switch (action.type) {
    case TIMER:
      return action.payload;
      case TIMEROFF:
      return action.payload;
    default:
      return reduxState;
  }
};
