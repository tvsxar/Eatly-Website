import './Features.scss';
import FeaturesItem from '../FeaturesItem/FeaturesItem';

function Features() {
    return (
        <section className="features">
            <div className="container">
                <div className="features-content">
                    <FeaturesItem title={`10K+`} 
                    description={`Satisfied Costumers All Great Over The World`} />
                    <FeaturesItem item={'item'} title={`4M`} 
                    description={`Healthy Dishes Sold Including Milk Shakes Smooth`} />
                    <FeaturesItem title={`99.99%`} 
                    description={`Reliable Customer Support We Provide Great Experiences`} />
                </div>
            </div>
        </section>
    )
}

export default Features;