import './MobileNav.scss';

function MobileNav({ isMenuOpen, isTextVisible, toggleMenu }) {
    return (
        <div className="mobile-menu">
            <div className={`burger-menu ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
            <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
                <ul className={`mobile-nav ${isTextVisible ? 'open' : ''}`}>
                    <li><a href="#!" className="mobile-nav-item">Menu</a></li>
                    <li><a href="#!" className="mobile-nav-item">Blog</a></li>
                    <li><a href="#!" className="mobile-nav-item">Pricing</a></li>
                    <li><a href="#!" className="mobile-nav-item">Contact</a></li>
                    <li><a href="#!" className="mobile-nav-item bold">Login</a></li>
                    <li><a href="#!" className="mobile-nav-item bold purple">Sign Up</a></li>
                </ul>
            </div>
        </div>
    )
}

export default MobileNav;