import './Promotion.scss';
import arrowRight from '../../assets/icons/arrow-right.svg';
import promotionMobile from '../../assets/images/promotion-mobile.png';
import Button from '../Button/Button';

function Promotion() {
    return (
        <section className="promotion">
            <div className="container">
                <div className="promotion-content">
                    <div className="promotion-info">
                        <h2 className="promotion-title">Premium <span className='purple'>Quality</span> For Your Health</h2>
                        <ul className="promotion-list">
                            <li className="list-item">Premium quality food is made with 
                                ingredients that are packed with essential vitamins, minerals.</li>
                            <li className="list-item">These foods promote overall wellness 
                                by support healthy digestion and boosting immunity</li>
                        </ul>
                        <div className="promotion-button">
                            <Button>
                                Download
                                <img src={arrowRight} alt="arrowRight" />
                            </Button>
                        </div>
                    </div>

                    <div className="promotion-img">
                        <img className='promotion-mobile' src={promotionMobile} alt="promotionMobile" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Promotion;