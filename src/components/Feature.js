export default function Feature({ href, heading, text }) {
    return (
        <div className="feature">
            <svg className="feature__icon">
                <use href={href}></use>
            </svg>
            <h4 className="heading-4 heading-4--dark">{heading}</h4>
            <p className="feature_text">{text}</p>
        </div>
    )
}