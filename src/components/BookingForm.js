import React, { useState } from "react";

function BookingForm({ dispatch, state }) {
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("17:00");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(reservationDate);
    console.log(reservationTime);
    console.log(numberOfGuests);
    console.log(occasion);
  };

  function handleDateChange(e) {
    setReservationDate(e.target.value);
    dispatch({ type: "update_times", selectedDate: e.target.value });
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={reservationDate}
        onChange={handleDateChange}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time "
        value={reservationTime}
        onChange={(e) => {
          setReservationTime(e.target.value);
        }}
      >
        {state?.availableTimes?.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={numberOfGuests}
        onChange={(e) => {
          setNumberOfGuests(e.target.value);
        }}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => {
          setOccasion(e.target.value);
        }}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />

      <p>Hello! You are {state?.age}.</p>
    </form>
  );
}

export default BookingForm;