import quote from  "../../assets/imgs/quote.svg";
import ratingStar from "../../assets/imgs/star.svg";

function ReviewCard({ userImg, name, reviewText, rating }) {
    return(
        <div className="review-card-container ">
            <div className="img-quote flex justify-between items-start mb-7">
                <img src={userImg} alt="user" className="user h-[50px] w-[50px] rounded-[10px]" />
                <img src={quote} alt="quote" />
            </div>
            <h4 className="name text-[23px] font-semibold leading-[36px] tracking-wide text-white mb-5">{name}</h4>
            <p className="review-text">{reviewText}</p>
            {/* <div className="rating">
                <img src={ratingStar} alt="star" />
                <p>{rating}</p>
            </div> */}
        </div>
    )
}

export default ReviewCard;