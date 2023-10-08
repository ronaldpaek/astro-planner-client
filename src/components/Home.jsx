import React from 'react';
import TwoWeekTripPlan from '@/components/TwoWeekTripPlan';
import TripPlanning from '@/components/TripPlanning';

const Home = () => {
  return (
    <div>
      <TripPlanning />
      <TwoWeekTripPlan />
    </div>
  );
};

export default Home;
