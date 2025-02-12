import './DishCard.scss';
import starImg from '../../assets/icons/star.svg';
import addBtn from '../../assets/icons/card-add-btn.svg';

function DishCard({img, title, highlight, time, rating, price, none}) {
    let className;
    
    switch(highlight) {
        case 'Trending':
        className = 'red';
        break;

        case 'Healthy':
        className = 'yellow';
        break;

        case 'Supreme':
        className = 'green';
    }

    return (
        <div className={`dish-card-container ${none}`}>
            <img className='dish-img' src={img} alt="dish" />

            <div className="dish-card-info">
                <div className="dish-card-text">
                    <p className={`dish-card-highlight ${className}`}>{highlight}</p>
                    <h4 className="dish-card-title">{title}</h4>
                </div>

                <div className="dish-card-rating">
                    <p className="card-time">{`${time}min •`}</p>
                        <img src={starImg} alt="star" />
                        <p className="rating">{rating}</p>
                </div>

                <div className="dish-card-price">
                    <p className="card-price">{price}<span className='light'>.99</span></p>
                    <img src={addBtn} alt="buttonAdd" className="card-add-btn" />
                </div>
            </div>
        </div>
    )
}

export default DishCard;