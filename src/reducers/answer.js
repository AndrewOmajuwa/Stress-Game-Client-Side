//import action type
import { ANSWER } from "../actions/answer";

//define initial and altered redux state after action is dispatched.
export default (reduxState = null, action = {}) => {
  switch (action.type) {
    case ANSWER:
      return action.payload;
    default:
      return reduxState;
  }
};
