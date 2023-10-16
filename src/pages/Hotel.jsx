import React, { useState } from 'react';
import ReservationIcon from '@/assets/hotelTwo.svg';
import Map from '@/assets/travel-pic.jpg';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { hotels } from '../lib/data';
import { API } from '../lib/api-index';
import { useToken } from '@/contexts/TokenContext';
import useCreateReservation from '@/hooks/useCreateReservation';

const Hotel = () => {
  const navigate = useNavigate();
  const [hotelName, setHotelName] = useState('');
  const [hotelPhone, setHotelPhone] = useState('');
  const [hotelLocation, setHotelLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [confirmationNum, setConfirmationNum] = useState('');
  const [error, setError] = useState('');

  const { setReservations } = useOutletContext();
  const { token } = useToken();
  const { tripId } = useParams();
  const createReservation = useCreateReservation(token, 'hotel', {
    onSuccess: (data) => {
      setReservations((prevReservations) => [
        ...prevReservations,
        data.reservation,
      ]);
      console.log('hotelData', data);
      navigate(`/car/${tripId}`);
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    if (!checkIn || !checkOut || !hotelName || !hotelLocation) {
      setError('Please select hotel, dates, and location.');
      return;
    }
    // Convert checkIn and checkOut dates to ISO-8601 format
    const isoCheckIn = new Date(checkIn).toISOString();
    const isoCheckOut = new Date(checkOut).toISOString();

    createReservation.mutate({
      hotelName,
      hotelPhone,
      hotelLocation,
      departureDate: isoCheckIn,
      arrivalDate: isoCheckOut,
      bookingConfirmation: confirmationNum,
      tripId,
    });
  };

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
          <h2>Enter Hotel / Apartment Reservation</h2>
        </div>
        <div className="input-wrapper">
          <label htmlFor="bookingConfirmation">Booking Confirmation</label>
          <input
            type="text"
            id="bookingConfirmation"
            name="bookingConfirmation"
            className="input-field"
            placeholder="Optional"
            value={confirmationNum}
            onChange={(e) => setConfirmationNum(e.target.value)}
          />
          <div className="field-container">
            <div className="flex-col-start">
              <label htmlFor="hotelName">Hotel Name</label>
              <select
                type="text"
                id="hotelName"
                name="hotelName"
                placeholder="Enter the hotel name"
                className="input-field"
                value={hotelName}
                onChange={(e) => setHotelName(e.target.value)}
              >
                <option value="">Select a hotel</option>
                {hotels.map((hotel, index) => {
                  return (
                    <option key={index} value={hotel.name}>
                      {hotel.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex-col-start">
              <label htmlFor="hotelPhone">Hotel Phone</label>
              <input
                type="text"
                id="hotelPhone"
                name="hotelPhone"
                placeholder="Optional"
                className="input-field"
                value={hotelPhone}
                onChange={(e) => setHotelPhone(e.target.value)}
              />
            </div>
          </div>
          <label htmlFor="location">Location</label>
          <select
            type="text"
            id="location"
            name="location"
            placeholder="Enter the location"
            className="input-field"
            value={hotelLocation}
            onChange={(e) => setHotelLocation(e.target.value)}
          >
            <option value="">Select an hotel location</option>
            {hotels.map((hotel, index) => {
              return (
                <option key={index} value={hotel.location}>
                  {hotel.location}
                </option>
              );
            })}
          </select>
          <div className="date-range">
            <div className="checkinDate-container flex-col-start">
              <label htmlFor="checkInDate">Check-in Date</label>
              <div className="reservation-flex">
                <input
                  type="date"
                  id="checkInDate"
                  name="checkInDate"
                  className="date-time-field"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
                <input
                  type="time"
                  id="checkInTime"
                  name="checkInTime"
                  className="date-time-field"
                />
              </div>
            </div>
            <div className="checkOutDate-container flex-col-start">
              <label htmlFor="checkOutDate">Check-out Date</label>
              <div className="reservation-flex">
                <input
                  type="date"
                  id="checkOutDate"
                  name="checkOutDate"
                  className="date-time-field"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
                <input
                  type="time"
                  id="checkOutTime"
                  name="checkOutTime"
                  className="date-time-field"
                />
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
        </div>
        {error && <p className="error-message flex">{error}</p>}
      </form>
    </section>
  );
};

export default Hotel;
