import React, { useState, useEffect } from "react";
import Frame from "../../img/icons/Frame.svg";
import Vector1 from "../../img/icons/Vector (1).svg";
import Vector3 from "../../img/icons/Vector (3).svg";
import { useDispatch, useSelector } from "react-redux";
import { addFlight } from "../../redux/Flight/actions";

export default function Inputs() {
  const flights = useSelector((state) => state.flights);
  const dispatch = useDispatch();
  // console.log(flights);
  // console.log(flights.length);

  const [formValues, setFormValues] = useState({
    from: "",
    to: "",
    date: "",
    guests: "",
    ticketClass: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // console.log(flights.length);
  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addFlight({ ...formValues, id: flights.length + 1 }));
    // console.log(formValues);
    setFormValues({
      from: "",
      to: "",
      date: "",
      guests: "",
      ticketClass: "",
    });
  };

  const isButtonDisabled = flights.length === 3;
  const handleButtonClick = (event) => {
    // console.log("handleButtonClick");
    if (isButtonDisabled) {
      event.preventDefault();
      // console.log("You cannot add more than 3 flights.");
      setErrorMessage("You cannot add more than 3 flights.");
    } else {
      // console.log("You can add more flights.");
      setErrorMessage("");
      handleSubmit(event);
    }
  };

  useEffect(() => {
    // console.log("useEffect");
    // console.log(flights);
    // console.log(flights.length);
  }, [flights]);

  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form
          className="first-hero lws-inputform"
          onSubmit={handleButtonClick}
        >
          {/* <!-- From --> */}
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src={Frame} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="from"
                id="lws-from"
                value={formValues.from}
                onChange={handleChange}
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- To --> */}
          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src={Frame} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="to"
                id="lws-to"
                value={formValues.to}
                onChange={handleChange}
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- Date --> */}
          <div className="des-from">
            <p>Journey Date</p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full date"
              name="date"
              id="lws-date"
              value={formValues.date}
              onChange={handleChange}
              required
            />
          </div>

          {/* <!-- Guests --> */}
          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src={Vector1} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="guests"
                id="lws-guests"
                value={formValues.guests}
                onChange={handleChange}
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          {/* <!-- Class --> */}
          <div className="des-from !border-r-0">
            <p>Class</p>
            <div className="flex flex-row">
              <img src={Vector3} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="ticketClass"
                id="lws-ticketClass"
                value={formValues.ticketClass}
                onChange={handleChange}
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          {/* <!-- Button --> */}
          <button
            className="addCity"
            type="submit"
            id="lws-addCity"
            // disabled={isButtonDisabled}
          >
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm">Book</span>
          </button>

          {/* <!-- Error message --> */}
          {errorMessage && (
            <div style={{ color: "red" }} className="text-red-500 text-sm">
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
