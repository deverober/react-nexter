import headerLogo from '../img/logo.png'
import bbcLogo from '../img/logo-bbc.png'
import biLogo from '../img/logo-bi.png'
import tcLogo from '../img/logo-techcrunch.png'
import forbesLogo from '../img/logo-forbes.png'

export default function Header() {
    return (
        <header className='header'>
            <img src={headerLogo} alt="Nexter Logo" className="header__logo" />
            <h3 className="heading-3">Your own home:</h3>
            <h1 className="heading-1">The ultimate personal freedom</h1>
            <button className="btn header__btn">View our properties</button>
            <div className="header__seenon-text">Seen on</div>
            <div className="header__seenon-logos">
                <img src={bbcLogo} alt="BBC Logo" />
                <img src={forbesLogo} alt="Forbes Logo" />
                <img src={tcLogo} alt="Tech Crunch Logo" />
                <img src={biLogo} alt="Forbes Logo" />
            </div>
        </header>
    )
}