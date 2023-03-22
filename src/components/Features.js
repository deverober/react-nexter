import sprites from '../img/sprite.svg'
import Feature from './Feature'

export default function Features() {
    const features = [
        {
            href: `${sprites}#icon-global`,
            heading: "World's best luxury homes",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus."
        },
        {
            href: `${sprites}#icon-trophy`,
            heading: "Only the best properties",
            text: "Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia."
        },
        {
            href: `${sprites}#icon-map-pin`,
            heading: "All homes in top locations",
            text: "Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum."
        },
        {
            href: `${sprites}#icon-key`,
            heading: "New home in one week",
            text: "Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            href: `${sprites}#icon-presentation`,
            heading: "Top 1% realtors",
            text: "Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus."
        },
        {
            href: `${sprites}#icon-lock`,
            heading: "Secure payments on Nexter",
            text: "Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae."
        }
    ]

    return (
        <section className="features">
            {
                features.map((feature, index) => <Feature {...feature} key={index} />)
            }
        </section>
    )
}