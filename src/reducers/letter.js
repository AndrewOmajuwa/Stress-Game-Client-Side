//import action type
import { LETTER } from "../actions/letter";

//define initial and altered redux state after action is dispatched.
export default (reduxState = null, action = {}) => {
  switch (action.type) {
    case LETTER:
      return action.payload;
    default:
      return reduxState;
  }
};
