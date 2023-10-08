import React from 'react';
import tripImage from '@/assets/trip-image.png';

const CreateTrip = () => {
  return (
    <div>
      <div className="form-wrapper">
        <div className="grid">
          <form className="create-trip-form ">
            <div className="col-one">
              <h2>CreateTrip</h2>
              <label htmlFor="location">Location</label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="City name"
              />
              <label htmlFor="check-in">Check-in</label>
              <div className="flex">
                <input
                  type="text"
                  name="startDate"
                  id="startDate"
                  placeholder="Start Date"
                ></input>
                <label htmlFor="check-out">Check-out</label>
                <input
                  type="text"
                  name="endDate"
                  id="endDate"
                  placeholder="End Date"
                ></input>
              </div>
              <label html for="travellers">
                Travellers
              </label>
              <input
                type="number"
                name="travellers"
                id="travellers"
                placeholder="Passenger"
              ></input>
              <button className="create-trip-button">Create Trip</button>
            </div>
            <div className="col-two">
              <img src={tripImage} alt="Trip Image" className="trip-image" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
