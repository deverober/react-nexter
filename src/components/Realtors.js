import realtor1 from '../img/realtor-1.jpeg'
import realtor2 from '../img/realtor-2.jpeg'
import realtor3 from '../img/realtor-3.jpeg'

import Realtor from './Realtor'

export default function Realtors() {
    const realtors = [
        {
            id: 1,
            realtorImg: realtor1,
            realtorName: 'Erik Feiman',
            housesSold: '245'
        },
        {
            id: 2,
            realtorImg: realtor2,
            realtorName: 'Kim Brown',
            housesSold: '212'
        },
        {
            id: 3,
            realtorImg: realtor3,
            realtorName: 'Toby Ramsey',
            housesSold: '198'
        }
    ]

    return (
        <div className="realtors">
            <h3 className="heading-3">Top 3 Realtors</h3>
            <div className="realtors__list">
                {
                    realtors.map((realtor) => <Realtor {...realtor} key={realtor.id} />)
                }
            </div>
        </div>
    )
}