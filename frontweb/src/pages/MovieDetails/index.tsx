import './styles.css';
import ReviewDetails from './ReviewDetails';
import ReviewSubmit from './ReviewSubmit';

type Props = {
  title: string;
};

const MovieDetails = ({title}:Props) => {
  return (
    <div className="container movie-details-container">
      <h1>Details of {title}</h1>
      <ReviewSubmit />
      <div className="base-card movie-reviews-container">
        <ReviewDetails />
        <ReviewDetails />
      </div>
    </div>
  );
};

export default MovieDetails;
