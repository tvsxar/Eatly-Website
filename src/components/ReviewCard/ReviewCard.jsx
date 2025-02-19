import './ReviewCard.scss';

// image
import stars from '../../assets/others/stars.svg';

function ReviewCard() {
    return (
        <div className="review-card">
            <p className="review-card-description">{`“ Online invoice payment 
                helps companies save time, are faster and save maximum effort 
                for the clients and save maximum effort. Online invoice payment 
                helps companies save time ”`}</p>

            <img src={stars} alt="raiting" className="review-card-raiting" />
        </div>
    )
}

export default ReviewCard;