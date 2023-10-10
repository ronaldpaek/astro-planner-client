import React from 'react';
import HotelIcon from '@/assets/hotelTwo.svg';

const HotelReservation = () => {
  return (
    <section className="hotel-reservation-container">
      <form className="hotel-confirmation flex-col-start">
        <div className="hotel-reservation flex">
          <img src={HotelIcon} alt="hotel icon"></img>
          <h2 className="hotel-text">Enter Hotel / Apartment Reservation</h2>
        </div>
        <label htmlFor="bookingConfirmation">Booking Confirmation</label>
        <input
          type="text"
          id="bookingConfirmation"
          name="bookingConfirmation"
          placeholder="Optional"
        ></input>
        <div className="hotel-container flex-start">
          <div className="flex-col-start">
            <label htmlFor="hotelName">Hotel Name</label>
            <input
              type="text"
              id="hotelName"
              name="hotelName"
              placeholder="Enter a hotel name"
              style={{ textAlign: 'left' }}
            />
          </div>
          <div className="flex-col-start">
            <label htmlFor="hotelPhone">Hotel Phone</label>
            <input
              type="text"
              id="hotelPhone"
              name="hotelPhone"
              placeholder="Optional"
              style={{ textAlign: 'left' }}
            />
          </div>
        </div>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Entering a location will help optimize your trip"
        />
        <div className="flex">
          <div className="checkinDate-container flex-col-start">
            <label htmlFor="checkInDate">Check In Date</label>
            <div className="flex">
              <input type="date" id="checkInDate" name="checkInDate"></input>
              <div className="flex-col">
                <input type="time" id="checkInTime" name="checkInTime"></input>
              </div>
            </div>
          </div>
          <div className="checkOutDate-container flex-col-start">
            <label htmlFor="checkOutDate">Check Out Date</label>
            <div className="flex">
              <input type="date" id="checkOutDate" name="checkOutDate"></input>
              <div className="flex-col">
                <input
                  type="time"
                  id="checkOutTime"
                  name="checkOutTime"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <button className="save-button" type="button">
          Save
        </button>
      </form>
    </section>
  );
};

export default HotelReservation;
