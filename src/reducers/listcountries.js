//import action type
import { COUNTRIES } from "../actions/listcountries";

//define initial and altered redux state after action is dispatched.
export default (reduxState = null, action = {}) => {
  switch (action.type) {
    case COUNTRIES:
      return [...action.payload]
    default:
      return reduxState;
  }
};
