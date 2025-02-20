import './Feedback.scss';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// images
import customerImg from '../../assets/images/reviews-img.png';
import quotes from '../../assets/icons/quotes.svg';
import stars from '../../assets/others/stars.svg';

// components
import ReviewCard from '../ReviewCard/ReviewCard';
import Discount from '../Discount/Discount';

function Feedback() {
    const [progress, setProgress] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => (prev >= 100 ? 0 : prev + 1));
        }, 100);

        return () => clearInterval(interval);
    }, [])

    return (
        <section className="feedback">
            <div className="container">
                <div className="feedback-content">
                    <h2 className="feedback-title"><span className="purple">Customer</span> Say</h2>

                    <div className="feedback-flex">

                    {isDesktop && 
                        <div className="review-card-main static">
                            <div className="review-info">
                                <div className="review-user">
                                    <img src={customerImg} alt="customer" className="customer-img" />
                                    <div className="review-text">
                                        <h4 className="review-name">Alexander R.</h4>
                                        <p className="review-duration">01 Year With Us</p>
                                    </div>
                                </div>
                                <img src={quotes} alt="quotes" className="review-quotes" />
                            </div>
                            <p className="review-description">{`“ Online invoice payment 
                            helps companies save time, are faster and save maximum effort 
                            for the clients and save maximum effort. Online invoice payment 
                            helps companies save time ”`}</p>
                            <img src={stars} alt="raiting" className="review-raiting" />
                        </div>}

                    <div className="swiper-container">
                    <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true, type: 'progressbar' }}
                    autoplay={{ delay: 10000, disableOnInteraction: false }}
                    loop={true} onSlideChange={() => setProgress(0)}
                    className="reviews"
                    >
                    {!isDesktop && 
                        <SwiperSlide>
                        <div className="review-card-main">
                            <div className="review-info">
                                <div className="review-user">
                                    <img src={customerImg} alt="customer" className="customer-img" />
                                    <div className="review-text">
                                        <h4 className="review-name">Alexander R.</h4>
                                        <p className="review-duration">01 Year With Us</p>
                                    </div>
                                </div>
                                <img src={quotes} alt="quotes" className="review-quotes" />
                            </div>
                            <p className="review-description">{`“ Online invoice payment 
                            helps companies save time, are faster and save maximum effort 
                            for the clients and save maximum effort. Online invoice payment 
                            helps companies save time ”`}</p>
                            <img src={stars} alt="raiting" className="review-raiting" />
                        </div>
                        </SwiperSlide>}

                    <SwiperSlide><ReviewCard /></SwiperSlide>
                    <SwiperSlide><ReviewCard /></SwiperSlide>
                    <SwiperSlide><ReviewCard /></SwiperSlide>
                    </Swiper>
                    
                    
                    <div className="progress-bar-container">
                        <div
                            className="progress-bar"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    </div>

                    </div>
                </div>

                <div className="discount-container">
                        <Discount />
                </div>
            </div>
        </section>
    )
}

export default Feedback;