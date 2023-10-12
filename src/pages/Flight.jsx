import React from 'react';
import ReservationIcon from '@/assets/hotelTwo.svg';
import Map from '@/assets/travel-pic.jpg';

const Flight = () => {
  return (
    <section
      className="reservation-container"
      style={{
        display: 'flex',
        height: '70vh',
        backgroundImage: `url(${Map})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <form className="reservation-wrapper flex-col">
        <div className="reservation-text">
          <img src={ReservationIcon} alt="reservation icon" />
          <p>Enter Flight Reservation</p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="bookingConfirmation">Airline Confirmation</label>
          <input
            type="text"
            id="bookingConfirmation"
            name="bookingConfirmation"
            placeholder="Optional"
          />
          <div className="field-container">
            <div className="flex-col-start">
              <label htmlFor="airline">Airline</label>
              <input
                type="text"
                id="airline"
                name="airline"
                placeholder="Enter the airline name"
              />
            </div>
            <div className="flex-col-start">
              <label htmlFor="flight">Flight</label>
              <input
                type="text"
                id="flight"
                name="flight"
                placeholder="Optional"
              />
            </div>
          </div>
          <label htmlFor="departAirport">Depart Airport</label>
          <input
            type="text"
            id="departAirport"
            name="departAirport"
            placeholder="Entering Depart Airport"
          />
          <label htmlFor="arrivalAirport">Arrival Airport</label>
          <input
            type="text"
            id="arrivalAirport"
            name="arrivalAirport"
            placeholder="Entering Arrival Airport"
          />
          <div className="date-range">
            <div className="checkinDate-container flex-col-start">
              <label htmlFor="departDate">Depart Date</label>
              <div className="reservation-flex">
                <input type="date" id="departDate" name="departDate" />
                <div className="flex-col-start">
                  <input type="time" id="departTime" name="departTime" />
                </div>
              </div>
            </div>
            <div className="checkOutDate-container flex-col-start">
              <label htmlFor="arrivalDate">Arrival Date</label>
              <div className="flex">
                <input type="date" id="arrivalDate" name="arrivalDate" />
                <div className="flex-col">
                  <input type="time" id="arrivalTime" name="arrivalTime" />
                </div>
              </div>
            </div>
          </div>
          <div className="center">
            <button
              className="save-button"
              type="button"
              style={{ filter: 'none' }}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Flight;
