import './styles.css';
import { ReactComponent as StarSvg } from 'assets/images/star-fill.svg';

const ReviewDetails = () => {
  return (
    <div className="review-container">
      <div className="username-container">
        <StarSvg className="text-primary"/>
        <h1>User name</h1>
      </div>
      <p className="review-text">Review description</p>
    </div>
  );
};

export default ReviewDetails;
