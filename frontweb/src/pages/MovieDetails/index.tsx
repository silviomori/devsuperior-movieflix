import './styles.css';
import ReviewDetails from './ReviewDetails';
import ReviewSubmit from './ReviewSubmit';
import { useParams } from 'react-router';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  return (
    <div className="container movie-details-container">
      <h1>Details of Movie {movieId}</h1>
      <ReviewSubmit />
      <div className="base-card movie-reviews-container">
        <ReviewDetails />
        <ReviewDetails />
      </div>
    </div>
  );
};

export default MovieDetails;
