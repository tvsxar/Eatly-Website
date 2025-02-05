import './FeaturesItem.scss';

function FeaturesItem({ title, description, item }) {
    return (
        <div className={`features-title-container ${item}`}>
        <h1 className="features-title">{title}</h1>
        <p className="features-description">{description}</p>
        </div>
    )
}

export default FeaturesItem;