import Header from '@/components/Header';
import TwoWeekTripPlan from '@/components/TwoWeekTripPlan';
import TripPlanning from '@/components/TripPlanning';
import AirtravBestServices from '@/components/AirtravBestServices';
import DiscoverFeatures from '@/components/DiscoverFeatures';
import EasyTripBooking from '@/components/EasyTripBooking';
import HowItWorks from '@/components/HowItWorks';

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <TripPlanning />
      <EasyTripBooking />
      <AirtravBestServices />
      {/* <HowItWorks /> */}
      <DiscoverFeatures />
      <TwoWeekTripPlan />
    </>
  );
};

export default Home;
