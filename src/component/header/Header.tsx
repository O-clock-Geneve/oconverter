import CustomLink from "../customLink/CustomLink";

export default function Header() {
    return <header className="header">
        <h1 className="header__title">Converter</h1>
        <div className="header__value">1 euro</div>
        <nav>
            <CustomLink url="about"><div><p>About us</p></div></CustomLink>
            <CustomLink url="contact-us">Contact Us</CustomLink>
            <CustomLink url="donation">Donation please</CustomLink>
        </nav>
        </header>
}