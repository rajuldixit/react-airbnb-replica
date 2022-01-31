import Card from '../cards/Card';

const NextTripCardsWrapper = () => {

    const placesDetails = [
        {'placeName': 'Lonavla', 'distance': '55', 'bgColor': '#d93b30'},
        {'placeName': 'Calangute', 'distance': '333', 'bgColor': '#cc2d4a'},
        {'placeName': 'Alibag', 'distance': '106', 'bgColor': '#bc1a6e'},
        {'placeName': 'Panchghaani', 'distance': '68', 'bgColor': '#de3151'}
    ];

    return(
        <div className='next-trip-cards-wrapper'>
            <h4>Inspiration for your next trip</h4>
            {
                placesDetails?.map((item,index) => {
                    <Card placeDetails={item} key={index}/>
                })
            }
        </div>
    )
}

export default NextTripCardsWrapper