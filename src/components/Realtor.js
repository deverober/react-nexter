export default function Realtor({ realtorImg, realtorName, housesSold }) {
    return (
        <>
            <img src={realtorImg} alt="Realtor 1" className="realtors__img" />
            <div className="realtors__details">
                <h4 className="heading-4 heading-4--light">{realtorName}</h4>
                <p className="realtors__sold">{housesSold} houses sold</p>
            </div>
        </>
    )
}