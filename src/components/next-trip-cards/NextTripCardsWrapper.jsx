import Card from '../cards/Card';
import image1 from '../../icons/images1.jfif';
import image2 from '../../icons/images2.jfif';
import image3 from '../../icons/images3.jfif';
import image4 from '../../icons/images4.jpg';

const NextTripCardsWrapper = () => {

    const placesDetails = [
        {'placeName': 'Lonavla', 'distance': '55', 'bgColor': '#d93b30', 'imgRef': image1},
        {'placeName': 'Calangute', 'distance': '333', 'bgColor': '#cc2d4a', 'imgRef': image2},
        {'placeName': 'Alibag', 'distance': '106', 'bgColor': '#bc1a6e', 'imgRef': image3},
        {'placeName': 'Panchghaani', 'distance': '68', 'bgColor': '#de3151', 'imgRef': image4}
    ];

    return(
        <div className='next-trip-cards-wrapper'>
            <h4>Inspiration for your next trip</h4>
            <div className='align-inline'>
                {
                    placesDetails?.map((item,index) => (
                        <div className='card-item'>
                            <Card placeDetails={item} key={index} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NextTripCardsWrapper