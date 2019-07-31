//import action type
import { SCORE } from "../actions/score";

//define initial and altered redux state after action is dispatched.
export default (reduxState = 0, action = {}) => {
  switch (action.type) {
    case SCORE:
      return reduxState + 1
    default:
      return reduxState;
  }
};
