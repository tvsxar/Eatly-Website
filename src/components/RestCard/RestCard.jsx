import './RestCard.scss';
import starImg from '../../assets/icons/star.svg';
import bookmarkImg from '../../assets/icons/bookmark.svg';

function RestCard({ img, highlight, title, rating }) {
    let className;

    if(highlight === 'Trending') className = 'red';

    return (
        <div className="card-container">
            <img src={img} alt="image" className="card-img" />

            <div className="card-info">
                <div className="card-text">
                    <div className="card-highlight">
                        <p className={`highlight ${className}`}>{highlight}</p>
                        <h4 className="card-title">{title}</h4>
                    </div>
                    <div className="card-rating">
                        <p className="card-time">24min •</p>
                        <img src={starImg} alt="star" />
                        <p className="rating">{rating}</p>
                    </div>
                </div>

                <div className="card-bookmark">
                    <img src={bookmarkImg} alt="bookmark" />
                </div>
            </div>
        </div>
    )
}

export default RestCard;