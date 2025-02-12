import './Dishes.scss';
import arrowRight from '../../assets/icons/arrow-right-gray.svg';
import DishCard from '../DishCard/DishCard';
import chikenImg from '../../assets/images/card-chiken-img.png';
import fishImg from '../../assets/images/card-fish-img.png';
import turkeyImg from '../../assets/images/card-turkey-img.png';

function Dishes() {
    return (
        <section className="dishes">
            <div className="container">
                <div className="dishes-content">
                    <h2 className="dishes-title">Our Top <span className='purple'>Dishes</span></h2>

                    <div className="dishes-cards">
                        <DishCard img={chikenImg} highlight={'Healthy'} 
                        title={`Chicken Hell`} time={`24`} rating={`4.8`} price={`$12`} />
                        <DishCard img={turkeyImg} highlight={'Trending'} 
                        title={`Swe Dish`} time={`34`} rating={`4.9`} price={`$19`} />
                        <DishCard img={fishImg} highlight={'Supreme'} 
                        title={`Swe Dish`} time={`34`} rating={`4.9`} price={`$19`} />
                        <DishCard img={chikenImg} highlight={'Healthy'} 
                        title={`Chicken Hell`} time={`24`} rating={`4.8`} price={`$12`} />
                        <DishCard img={turkeyImg} highlight={'Trending'} none={`none`}
                        title={`Swe Dish`} time={`34`} rating={`4.9`} price={`$19`} />
                    </div>
                </div>

                <div className="dishes-btn">
                        <a href="#!" className="dishes-link">
                            <p>View All</p>
                            <img src={arrowRight} alt="arrow" />
                        </a>
                </div>
            </div>
        </section>
    )
}

export default Dishes;