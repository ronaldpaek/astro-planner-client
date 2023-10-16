import React from 'react';
import ReservationIcon from '@/assets/hotelTwo.svg';
import Map from '@/assets/travel-pic.jpg';
import { useState } from 'react';
import { useOutletContext, useNavigate, useParams } from 'react-router-dom';
import { flights } from '../lib/data';
import { FaCaretDown } from 'react-icons/fa';

import useCreateReservation from '../hooks/useCreateReservation';
import { useToken } from '../contexts/TokenContext';

const Flight = () => {
  const navigate = useNavigate();
  const [airlineConNum, setAirlineConNum] = useState('');
  const [airline, setAirline] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [error, setError] = useState('');

  const { setReservations } = useOutletContext();
  const { token } = useToken();
  const { tripId } = useParams();
  const createReservation = useCreateReservation(token, 'flight', {
    onSuccess: (data) => {
      setReservations((prevReservations) => [
        ...prevReservations,
        data.reservation,
      ]);
      console.log('flightData', data);
      navigate(`/hotel/${tripId}`);
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    if (
      !departureAirport ||
      !arrivalAirport ||
      !departureDate ||
      !arrivalDate
    ) {
      setError('Please select airline, dates, departure and arrival airports.');
      return;
    }

    //condition to check if departure date is before arrival date
    if (departureDate > arrivalDate) {
      setError('Departure date must be before arrival date.');
      return;
    }
    // Convert checkIn and checkOut dates to ISO-8601 format
    const isoCheckIn = new Date(arrivalDate).toISOString();
    const isoCheckOut = new Date(departureDate).toISOString();

    const reservationData = {
      departureAirport,
      arrivalAirport,
      departureDate: isoCheckIn,
      arrivalDate: isoCheckOut,
      airlineName: airline,
      flightNumber,
      bookingConfirmation: airlineConNum,
      tripId,
    };

    console.log('reservationData', reservationData);
    createReservation.mutate(reservationData);
  };

  console.log('in the flight');

  return (
    <section
      className="reservation-container"
      style={{
        display: 'flex',
        backgroundImage: `url(${Map})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <form onSubmit={handleSubmit} className="reservation-wrapper flex-col">
        <div className="reservation-text">
          <img src={ReservationIcon} alt="reservation icon" />
          <h2>Enter Flight Reservation</h2>
        </div>
        <div className="input-wrapper">
          <label htmlFor="bookingConfirmation">Airline Confirmation</label>
          <input
            type="text"
            id="bookingConfirmation"
            name="bookingConfirmation"
            className="input-field"
            placeholder="Optional"
            value={airlineConNum}
            onChange={(e) => setAirlineConNum(e.target.value)}
          />
          <div className="field-container">
            <div className="flex-col-start">
              <label htmlFor="airlineName">Airline</label>
              <div className="select-container">
                <select
                  type="text"
                  id="airline"
                  name="airline"
                  placeholder="Enter an airline"
                  className="select-box"
                  value={airline}
                  onChange={(e) => setAirline(e.target.value)}
                >
                  <option value="">Select a flight</option>
                  {flights.map((flight, index) => {
                    return (
                      <option key={index} value={flight.airline}>
                        {flight.airline}
                      </option>
                    );
                  })}
                </select>
                <div className="icon-container">
                  <FaCaretDown />
                </div>
              </div>
            </div>
            <div className="flex-col-start">
              <label htmlFor="flightNum">Flight Number</label>
              <input
                type="text"
                id="flightNum"
                name="flightNum"
                placeholder="Optional"
                className="input-field"
                value={flightNumber}
                onChange={(e) => setFlightNumber(e.target.value)}
              />
            </div>
          </div>
          <label htmlFor="departureAirport">Departure Airport</label>
          <div className="select-container">
            <select
              type="text"
              id="departureAirport"
              name="departureAirport"
              placeholder="Entering Depart Airport"
              className="select-box"
              value={departureAirport}
              onChange={(e) => setDepartureAirport(e.target.value)}
            >
              <option value="">Select a Departure Airport</option>
              {flights.map((flight, index) => {
                return (
                  <option key={index} value={flight.departureAirport}>
                    {flight.departureAirport}
                  </option>
                );
              })}
            </select>
            <div className="icon-container">
              <FaCaretDown />
            </div>
          </div>
          <label htmlFor="arrivalAirport">Arrival Airport</label>
          <div className="select-container">
            <select
              type="text"
              id="arrivalAirport"
              name="arrivalAirport"
              placeholder="Entering Arrival Airport"
              className="select-box"
              value={arrivalAirport}
              onChange={(e) => setArrivalAirport(e.target.value)}
            >
              <option value="">Select a Arrival Airport</option>
              {flights.map((flight, index) => {
                return (
                  <option key={index} value={flight.arrivalAirport}>
                    {flight.arrivalAirport}
                  </option>
                );
              })}
            </select>
            <div className="icon-container">
              <FaCaretDown />
            </div>
          </div>
          <div className="date-range">
            <div className="checkinDate-container flex-col-start">
              <label htmlFor="departureDate">Departure Date</label>
              <div className="reservation-flex">
                <input
                  type="date"
                  id="departureDate"
                  name="departureDate"
                  className="date-time-field"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
              </div>
            </div>
            <div className="checkOutDate-container flex-col-start">
              <label htmlFor="arrivalDate">Arrival Date</label>
              <div className="reservation-flex">
                <input
                  type="date"
                  id="arrivalDate"
                  name="arrivalDate"
                  className="date-time-field"
                  value={arrivalDate}
                  onChange={(e) => setArrivalDate(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="center">
          <button
            className="save-button"
            type="submit"
            style={{ filter: 'none' }}
          >
            Save
          </button>
        </div>
        {error && <p className="error-message flex">{error}</p>}
      </form>
    </section>
  );
};

export default Flight;
