import Card from "./Card"
import icons from '../img/sprite.svg'
import home1 from '../img/house-1.jpeg'
import home2 from '../img/house-2.jpeg'
import home3 from '../img/house-3.jpeg'
import home4 from '../img/house-4.jpeg'
import home5 from '../img/house-5.jpeg'
import home6 from '../img/house-6.jpeg'

export default function Homes() {
    const homes = [
        {
            image: home1,
            altText: 'House 1',
            heartIconHref: `${icons}#icon-heart-full`,
            headerText: 'Beatiful Family House',
            mapPinIconHref: `${icons}#icon-map-pin`,
            location: 'USA',
            rooms: '5 rooms',
            roomsIconHref: `${icons}#icon-profile-male`,
            area: '325',
            areaIconHref: `${icons}#icon-expand`,
            price: '$1,200,000',
            priceIconHref: `${icons}#icon-key`
        },
        {
            image: home2,
            altText: 'House 2',
            heartIconHref: `${icons}#icon-heart-full`,
            headerText: 'Modern Glass Villa',
            mapPinIconHref: `${icons}#icon-map-pin`,
            location: 'Canada',
            rooms: '6 rooms',
            roomsIconHref: `${icons}#icon-profile-male`,
            area: '450',
            areaIconHref: `${icons}#icon-expand`,
            price: '$2,750,000',
            priceIconHref: `${icons}#icon-key`
        },
        {
            image: home3,
            altText: 'House 3',
            heartIconHref: `${icons}#icon-heart-full`,
            headerText: 'Cozy country house',
            mapPinIconHref: `${icons}#icon-map-pin`,
            location: 'UK',
            rooms: '4 rooms',
            roomsIconHref: `${icons}#icon-profile-male`,
            area: '250',
            areaIconHref: `${icons}#icon-expand`,
            price: '$850,000',
            priceIconHref: `${icons}#icon-key`
        },
        {
            image: home4,
            altText: 'House 4',
            heartIconHref: `${icons}#icon-heart-full`,
            headerText: 'Large Rustical Villa',
            mapPinIconHref: `${icons}#icon-map-pin`,
            location: 'Portugal',
            rooms: '6 rooms',
            roomsIconHref: `${icons}#icon-profile-male`,
            area: '480',
            areaIconHref: `${icons}#icon-expand`,
            price: '$1,950,000',
            priceIconHref: `${icons}#icon-key`
        },
        {
            image: home5,
            altText: 'House 5',
            heartIconHref: `${icons}#icon-heart-full`,
            headerText: 'Majestic Palace House',
            mapPinIconHref: `${icons}#icon-map-pin`,
            location: 'Germany',
            rooms: '18 rooms',
            roomsIconHref: `${icons}#icon-profile-male`,
            area: '4230',
            areaIconHref: `${icons}#icon-expand`,
            price: '$9,500,000',
            priceIconHref: `${icons}#icon-key`
        },
        {
            image: home6,
            altText: 'House 6',
            heartIconHref: `${icons}#icon-heart-full`,
            headerText: 'Modern Family Apartment',
            mapPinIconHref: `${icons}#icon-map-pin`,
            location: 'Italy',
            rooms: '3 rooms',
            roomsIconHref: `${icons}#icon-profile-male`,
            area: '180',
            areaIconHref: `${icons}#icon-expand`,
            price: '$600,000',
            priceIconHref: `${icons}#icon-key`
        },


    ]

    return (
        <section className="homes">
            {
                homes.map((home, index) => <Card {...home} key={index} />)
            }
        </section>
    )
}