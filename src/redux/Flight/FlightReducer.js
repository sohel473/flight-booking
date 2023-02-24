import { ADD_FLIGHT, REMOVE_FLIGHT } from "./actionTypes";

const initialState = [
  // {
  //   id: 1,
  //   from: "Dhaka",
  //   to: "Cox's Bazar",
  //   date: "2021-08-01",
  //   guests: "1",
  //   ticketClass: "Economy",
  // },
];

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FLIGHT:
      // console.log("Add Flight");
      // console.log(action.payload);
      return [...state, action.payload];
    case REMOVE_FLIGHT:
      return state.filter((flight) => flight.id !== action.payload.id);
    default:
      return state;
  }
};

export default flightReducer;
