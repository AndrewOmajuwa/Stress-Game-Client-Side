//import action type
import { TARGETSCORE } from "../actions/targetScore";

//define initial and altered redux state after action is dispatched.
export default (reduxState = null, action = {}) => {
  switch (action.type) {
    case TARGETSCORE:
      return action.payload;
    default:
      return reduxState;
  }
};
