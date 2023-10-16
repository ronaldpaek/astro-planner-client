import tripImage from '@/assets/trip-image.png';
import { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { Location } from '@/lib/data';
import { FaCaretDown } from 'react-icons/fa';

import useCreateTrip from '@/hooks/useCreateTrip';
import { useToken } from '@/contexts/TokenContext';

const API_URL = import.meta.env.VITE_API_URL;

const CreateTrip = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [error, setError] = useState('');
  const [passengers, setPassengers] = useState(1);

  const createTrip = useCreateTrip(
    // onSuccess callback
    (data) => {
      const tripId = data.trip.id;
      navigate(`/flight/${tripId}`);
    },
    // onError callback
    (error) => {
      setError(error.message);
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    if (!destination) {
      setError('Please select a destination.'); // Display an error if no destination is selected
      return;
    }
    //condition to check if checkin date is before checkout date
    if (checkIn > checkOut) {
      setError('Check-in date must be before check-out date.');
      return;
    }

    // Convert checkIn and checkOut dates to ISO-8601 format
    const isoCheckIn = new Date(checkIn).toISOString();
    const isoCheckOut = new Date(checkOut).toISOString();
    // Convert passengers from a string to an integer
    const passengersInt = parseInt(passengers, 10);

    createTrip.mutate({
      location: destination,
      checkIn: isoCheckIn,
      checkOut: isoCheckOut,
      passengers: passengersInt,
    });
  };

  return (
    <div className="create-trip-container">
      <form onSubmit={handleSubmit} className="create-trip-form">
        <div className="col-one">
          <h2>Create Trip</h2>
          <label htmlFor="location">Destination</label>
          <div className="select-container">
            <select
              type="text"
              name="location"
              id="location"
              placeholder="City name"
              className="select-box"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="">Select a Destination</option>
              {Location.map((city) => {
                return (
                  <option key={city} value={city}>
                    {city}
                  </option>
                );
              })}
            </select>
            <div className="icon-container">
              <FaCaretDown />
            </div>
          </div>
          <label htmlFor="check-in">Check-in</label>
          <div className="flex">
            <input
              type="date"
              name="startDate"
              id="startDate"
              placeholder="Start Date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
            <label htmlFor="check-out">Check-out</label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              placeholder="End Date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
          <label htmlFor="travellers">Travellers</label>
          <input
            type="text"
            name="travellers"
            id="travellers"
            placeholder="Passenger"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
          />
          <button type="submit" className="create-trip-button">
            Create Trip
          </button>
        </div>
        <div className="col-two">
          <img src={tripImage} alt="Trip" className="trip-image" />
          {error && <p className="error-message flex">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default CreateTrip;
