import LandingPage from '../components/LandingPage/LandingPage';
import Header from '../components/Header/HeaderComponent';
import NextTripCardsWrapper from '../components/next-trip-cards/NextTripCardsWrapper';

function AirbnbContainer() {
    return (
        <div>
            <Header />
            <LandingPage />
            <NextTripCardsWrapper />
        </div>
    );
}
export default AirbnbContainer