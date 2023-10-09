import Header from '@/components/Header';
import TwoWeekTripPlan from '@/components/TwoWeekTripPlan';
import TripPlanning from '@/components/TripPlanning';

import AirtravBestServices from '@/components/AirtravBestServices';

import DiscoverFeatures from '@/components/DiscoverFeatures';
import EasyTripBooking from '@/components/EasyTripBooking';

const Home = () => {
  return (
    <>
      <Header />
      <TripPlanning />
      <EasyTripBooking />
      <DiscoverFeatures />
      <TwoWeekTripPlan />
      <AirtravBestServices />
    </>
  );
};

export default Home;