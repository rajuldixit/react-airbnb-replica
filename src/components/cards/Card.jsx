const Card = (props, key) => {
    return(
        <div className="card">
            <div className="card-image">
                <img src={props.placeDetails.imgRef} className="image"/>
            </div>
            <div style={{backgroundColor: props.placeDetails.bgColor}} className="card-details">
                <span>{props.placeDetails.placeName}</span>
                <span>{props.placeDetails.distance} km away</span>
            </div>
        </div>
    )
}

export default Card