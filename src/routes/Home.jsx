import React from 'react';
import Header from '@/components/Header';
import TwoWeekTripPlan from '@/components/TwoWeekTripPlan';
import TripPlanning from '@/components/TripPlanning';
import AirtravBestServices from '@/components/AirtravBestServices';

const Home = () => {
  return (
    <div>
      <Header />
      <TripPlanning />
      <TwoWeekTripPlan />
      <AirtravBestServices />
    </div>
  );
};

export default Home;
