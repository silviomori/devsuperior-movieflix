import './styles.css';
import { ReactComponent as StarSvg } from 'assets/images/star-fill.svg';
import { Review } from 'types/review';

type Props = {
  review: Review;
};

const ReviewDetails = ({ review }: Props) => {
  return (
    <div className="review-container">
      <div className="username-container">
        <StarSvg className="text-primary" />
        <h1>{review.user.name}</h1>
      </div>
      <p className="review-text">{review.text}</p>
    </div>
  );
};

export default ReviewDetails;
