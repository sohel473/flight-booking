import React from "react";
import Booking from "./Booking";
import { useSelector } from "react-redux";

export default function Flights() {
  const flights = useSelector((state) => state.flights);
  const flightsTable = (
    <div className="table-container">
      <table className="booking-table">
        <thead className="bg-gray-100/50">
          <tr className="text-black text-left">
            <th>Destination From</th>
            <th>Destination To</th>
            <th className="text-center">Journey Date</th>
            <th className="text-center">Guests</th>
            <th className="text-center">Class</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody
          className="divide-y divide-gray-300/20"
          id="lws-previewBooked"
        >
          {/* <Booking /> */}
          {flights.map((flight) => (
            <Booking
              key={flight.id}
              id={flight.id}
              from={flight.from}
              to={flight.to}
              date={flight.date}
              guests={flight.guests}
              ticketClass={flight.ticketClass}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
  // console.log(flights);
  return <>{flights.length > 0 ? flightsTable : null}</>;
}
