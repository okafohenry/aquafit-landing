import AliceCarousel from "react-alice-carousel";
import previous from "../../assets/imgs/larrow.svg";
import next from "../../assets/imgs/rarrow.svg";
import { reviews } from "../../utils/constants";
import ReviewCard from "./ReviewCard";


function Reviews(){
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
    }

    return (
        <section id="reviews" className="reviews-container">
            <h3>Reviews</h3>

            <div data-aos="fade-up" className='review-carousel'>
                <AliceCarousel
                    mouseTracking
                    responsive={responsive}
                    controlsStrategy="alternate"
                    autoPlay={true}
                    autoPlayInterval={5000}
                    infinite={true}
                    keyboardNavigation={true}
                    renderPrevButton={() => {
                        return <img src={previous} className="previous-btn" alt='previous' />
                    }}
                    renderNextButton={() => {
                        return <img src={next} className="next-btn" alt='next' />
                    }}
                >
                    {reviews.map((review) => (
                        <ReviewCard
                            userImg={review.userImg}
                            name={review.userName}
                            rating={review.rating}
                            reviewText={review.reviewText}
                        />
                    ))}
                </AliceCarousel>
            </div>
        </section>
    )
}

export default Reviews;