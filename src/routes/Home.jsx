import React from 'react';
import Header from '@/components/Header';
import TwoWeekTripPlan from '@/components/TwoWeekTripPlan';
import TripPlanning from '@/components/TripPlanning';
import DiscoverFeatures from '@/components/DiscoverFeatures';
import EasyTripBooking from '@/components/EasyTripBooking';

const Home = () => {
  return (
    <div>
      <Header />
      <TripPlanning />
      <EasyTripBooking />
      <DiscoverFeatures />
      <TwoWeekTripPlan />
    </div>
  );
};

export default Home;
