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
            <p className="review-text text-[#ACB5BB] text-[16px] font-extralight tracking-wider mb-6">{reviewText}</p>
            <div className="rating w-fit py-1.5 px-4 flex rounded-[16px] items-center gap-x-1 bg-[#1E2836]/[0.6] text-white">
                <img src={ratingStar} alt="star" />
                <p>{rating}</p>
            </div>
        </div>
    )
}

export default ReviewCard;