import React from 'react';
import ReservationIcon from '@/assets/hotelTwo.svg';
import Map from '@/assets/travel-pic.jpg';

const Hotel = () => {
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
          <p>Enter Hotel / Apartment Reservation</p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="bookingConfirmation">Booking Confirmation</label>
          <input
            type="text"
            id="bookingConfirmation"
            name="bookingConfirmation"
            placeholder="Optional"
          />
          <div className="field-container">
            <div className="flex-col-start">
              <label htmlFor="hotelName">Hotel Name</label>
              <input
                type="text"
                id="hotelName"
                name="hotelName"
                placeholder="Enter the hotel name"
              />
            </div>
            <div className="flex-col-start">
              <label htmlFor="hotelPhone">Hotel Phone</label>
              <input
                type="text"
                id="hotelPhone"
                name="hotelPhone"
                placeholder="Optional"
              />
            </div>
          </div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter the location"
          />
          <div className="date-range">
            <div className="checkinDate-container flex-col-start">
              <label htmlFor="checkInDate">Check-in Date</label>
              <div className="flex">
                <input type="date" id="checkInDate" name="checkInDate" />
                <div className="flex-col-start">
                  <input type="time" id="checkInTime" name="checkInTime" />
                </div>
              </div>
            </div>
            <div className="checkOutDate-container flex-col-start">
              <label htmlFor="checkOutDate">Check-out Date</label>
              <div className="reservation-flex">
                <input type="date" id="checkOutDate" name="checkOutDate" />
                <div className="flex-col">
                  <input type="time" id="checkOutTime" name="checkOutTime" />
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

export default Hotel;
