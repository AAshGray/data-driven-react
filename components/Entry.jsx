export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.location.img.src}
                    alt={props.location.img.alt}
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src="../images/marker.png" 
                    alt="map marker icon"
                />
                <span className="country">{props.location.country}</span>
                <a href={props.location.googleMapsLink}>View on Google Maps</a>
                <h2 className="entry-title">{props.location.title}</h2>
                <p className="trip-dates">{props.location.dates}</p>
                <p className="entry-text">{props.location.text}</p>
            </div>
        </article>
    )
}