export default function Card({ image, altText, heartIconHref, headerText, mapPinIconHref, location, rooms, roomsIconHref, area, areaIconHref, price, priceIconHref }) {
    return (
        <div className="home">
            <img src={image} alt={altText} className="home__img" />
            <svg className="home__like">
                <use href={heartIconHref}></use>
            </svg>
            <h5 className="home__name">{headerText}</h5>
            <div className="home__location">
                <svg>
                    <use href={mapPinIconHref}></use>
                </svg>
                <p>{location}</p>
            </div>

            <div className="home__rooms">
                <svg>
                    <use href={roomsIconHref}></use>
                </svg>
                <p>{rooms}</p>
            </div>

            <div className="home__area">
                <svg>
                    <use href={areaIconHref}></use>
                </svg>
                <p>{area} m<sup>2</sup></p>
            </div>

            <div className="home__price">
                <svg>
                    <use href={priceIconHref}></use>
                </svg>
                <p>{price}</p>
            </div>
            <button className="btn home__btn">Contact realtor</button>
        </div>
    )
}