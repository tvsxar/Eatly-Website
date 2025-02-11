import './Restaurants.scss';
import arrowRight from '../../assets/icons/arrow-right-gray.svg';
import RestCard from '../RestCard/RestCard';
import chikenImg from '../../assets/images/restaurants-chiken.png';
import burgerImg from '../../assets/images/restaurants-burger.png';

function Restaurants() {
    return (
        <section className="restaurants">
            <div className="container">
                <div className="restaurants-content">
                    <h2 className="restaurants-title">Our Top <span className='purple'>Restaurants</span></h2>

                    <div className="restaurants-cards">
                        <RestCard img={chikenImg} highlight={`Healthy`} 
                        title={`The Chicken King`} rating={`4.8`} />
                        <RestCard img={burgerImg} highlight={`Trending`} 
                        title={`The Burger King`} rating={`4.9`} />
                        <RestCard img={burgerImg} highlight={`Trending`} 
                        title={`The Burger King`} rating={`4.9`} />
                    </div>
                </div>

                <div className="restaurants-btn">
                    <a href="#!" className="restaurants-link">
                        <p>View All</p>
                        <img src={arrowRight} alt="arrow" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Restaurants;