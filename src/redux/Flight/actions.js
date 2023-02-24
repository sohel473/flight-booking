import { ADD_FLIGHT, REMOVE_FLIGHT } from "./actionTypes";

export const addFlight = (flight) => {
  // console.log("Add Flight");
  return {
    type: ADD_FLIGHT,
    payload: flight,
  };
};

export const removeFlight = (id) => {
  return {
    type: REMOVE_FLIGHT,
    payload: id,
  };
};
