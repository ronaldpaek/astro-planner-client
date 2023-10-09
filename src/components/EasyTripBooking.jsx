import tripAdvisor from '@/assets/tripAdvisor.png';
import airbnb from '@/assets/airbnb.png';
import cargo from '@/assets/cargo.png';
import itata from '@/assets/itata.png';
import frame from '@/assets/frame.png';

export default function EasyTripBooking() {
  return (
    <div className="main-container flex ">
      <div className="left-and-right">
        <div className="left-content">
          <div className="heading-container flex-col">
            <h1>Easy Trip Booking Website</h1>
            <div className="flex-col">
              <p>
                A new way to book travel online, saving you time. With trip,
                there are no confusing spreadsheets or complicated searches. We
                just ask the right questions, find the best deal for you, then
                book it.
              </p>
            </div>
          </div>
          <div className="card-content">
            <div className="indiviual-card">
              <img className="img" src={tripAdvisor} alt="TripAdvisor" />
              <div className="card-details">
                <div className="card-title-EasyTrip">Trip Advisor</div>
                <span className="card-info">Cheap flights </span>
                <span className="card-info">Amazing Experiences</span>
              </div>
            </div>
            <div className="indiviual-card">
              <img src={airbnb} alt="Airbnb" />
              <div className="card-details">
                <div className="card-title-EasyTrip">Arbnb</div>
                <span className="card-info">
                  Choose from a wide range of properties when booking.
                </span>
              </div>
            </div>
            <div className="indiviual-card">
              <img src={cargo} alt="Turkish cargo" />
              <div className="card-details">
                <div className="card-title-EasyTrip">Turkish Kargo</div>
                <span className="card-info">Best flights </span>
                <span className="card-info">Amazing Services</span>
              </div>
            </div>
            <div className="indiviual-card">
              <img src={itata} alt="Itata" />
              <div className="card-details">
                <div className="card-title-EasyTrip">Itata</div>
                <span className="card-info">Cheap Flights </span>
                <span className="card-info">Amazing Experiences</span>
              </div>
            </div>
          </div>
        </div>
        <img className="frameImg" src={frame} alt="welcome-frame" />
      </div>
    </div>
  );
}
