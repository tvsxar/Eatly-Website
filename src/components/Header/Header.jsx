import './Header.scss';
import { useState, useEffect } from 'react';
import Button from '../Button/Button'
import eatlyLogo from '../../assets/logos/eatly-logo.svg';
import line from '../../assets/others/header-line.svg';
import ratingLogo from '../../assets/logos/trustpilot-logo.svg';
import stars from '../../assets/others/stars.svg';
import headerImg from '../../assets/images/header-img.jpg';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isMenuOpen]);
    
    return (
        <header className="header">
            <div className="container">
                <div className="header-nav">
                    <div className="header-logo">
                        <img src={eatlyLogo} alt="eatly-logo" className="logo" />
                        <h3 className="logo-text">eatly</h3>
                    </div>

                    <nav className="nav-content">
                        <div className={`burger-menu ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>

                        {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
                        {isMenuOpen && (
                            <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
                                <ul>
                                    <li><a href="#!" className="mobile-nav-item">Menu</a></li>
                                    <li><a href="#!" className="mobile-nav-item">Blog</a></li>
                                    <li><a href="#!" className="mobile-nav-item">Pricing</a></li>
                                    <li><a href="#!" className="mobile-nav-item">Contact</a></li>
                                    <li><a href="#!" className="mobile-nav-item">Login</a></li>
                                    <li><a href="#!" className="mobile-nav-item">Sign Up</a></li>
                                </ul>
                            </div>
                        )}
                    </nav>
                </div>

                <div className="header-content">
                    <div className="header-text">
                        <div className="subtitle-container">
                            <img src={line} alt="line" />
                            <h4 className="header-subtitle">OVER 1000 USERS</h4>
                        </div>
                        <h1 className="header-title">Enjoy Foods Over <span className="purple">World</span></h1>
                        <p className="header-description">Eatly help you set saving 
                            goals, earn cash back offers, Go to disclaimer for more 
                            details and get paychecks up to two days early. <span className="purple">Get a $20 bonus.</span></p>
                    </div>

                    <div className="header-buttons">
                        <Button>Get Started</Button>
                        <Button>Go Pro</Button>
                    </div>

                    <div className="header-rating">
                        <img src={ratingLogo} alt="trustpilot" className="rating-logo" />
                        <img src={stars} alt="stars" className="rating-stars" />
                        <p className="rating-number">4900+</p>
                    </div>

                    <div className="header-img-container">
                        <img src={headerImg} alt="meal" className="header-img" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;