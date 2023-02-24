// write reducers here

import { combineReducers } from "redux";
import flightReducer from "./Flight/FlightReducer";

const rootReducer = combineReducers({
  flights: flightReducer,
});

export default rootReducer;
