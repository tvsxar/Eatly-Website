import './Header.scss';
import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import Nav from '../Nav/Nav';
import MobileNav from '../MobileNav/MobileNav';
import eatlyLogo from '../../assets/logos/eatly-logo.svg';
import line from '../../assets/others/header-line.svg';
import ratingLogo from '../../assets/logos/trustpilot-logo.svg';
import stars from '../../assets/others/stars.svg';
import headerImg from '../../assets/images/header-img.png';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false);

    function toggleMenu() {
        if(isTextVisible) {
            setTimeout(() => setIsMenuOpen(!isMenuOpen), 300);
        } else {
            setIsMenuOpen(!isMenuOpen);
        }

        setTimeout(() => setIsTextVisible(!isTextVisible), 150)
    }

    useEffect(() => {
        document.body.classList.toggle('no-scroll', isMenuOpen);
    }, [isMenuOpen]);
    
    return (
        <header className="header">
            <div className="container">
                <div className="header-nav">
                    <div className="header-logo">
                        <img src={eatlyLogo} alt="Eatly logo" className="logo" />
                        <h3 className="logo-text">eatly</h3>
                    </div>

                    <nav className="nav-content">
                        <MobileNav isMenuOpen={isMenuOpen} 
                        isTextVisible={isTextVisible} 
                        toggleMenu={toggleMenu} />

                        <Nav />
                    </nav>
                </div>

                <div className="header-content">
                    <div className="text-container">
                        <div className="header-text">
                            <div className="subtitle-container">
                                <img className='line' src={line} alt="line" />
                                <h4 className="header-subtitle">OVER 1000 USERS</h4>
                            </div>
                            <h1 className="header-title">Enjoy Foods <span className="extra-text">All</span> Over <span className="extra-text">The </span><span className="purple">World</span></h1>
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