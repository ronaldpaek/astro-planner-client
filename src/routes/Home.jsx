import React from 'react';
import Header from '@/components/Header';
import TwoWeekTripPlan from '@/components/TwoWeekTripPlan';
import TripPlanning from '@/components/TripPlanning';
import DiscoverFeatures from '../components/DiscoverFeatures';

const Home = () => {
  return (
    <div>
      <Header />
      <TripPlanning />
      <DiscoverFeatures />
      <TwoWeekTripPlan />
    </div>
  );
};

export default Home;
