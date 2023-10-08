import React from 'react';
import Header from '@/components/Header';
import TwoWeekTripPlan from '@/components/TwoWeekTripPlan';
import TripPlanning from '@/components/TripPlanning';

const Home = () => {
  return (
    <div>
      <Header />
      <TripPlanning />
      <TwoWeekTripPlan />
    </div>
  );
};

export default Home;
