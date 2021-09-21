import './styles.css';
import ReviewDetails from './ReviewDetails';
import ReviewSubmit from './ReviewSubmit';
import { useParams } from 'react-router';
import { hasAnyRoles } from 'util/auth';
import { useEffect, useState } from 'react';
import { Review } from 'types/review';
import { Movie } from 'types/movie';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import MovieCard from 'components/MovieCard';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [movie, setMovie] = useState<Movie>();
  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true,
    };
    requestBackend(params).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  const [refresh, setRefresh] = useState<boolean>(true);
  const [reviews, setReviews] = useState<Review[]>();
  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(params).then((response) => {
      setReviews(response.data);
    });
    setRefresh(false);
  }, [movieId, refresh]);

  return (
    <div className="container movie-details-container">
      {movie && (
        <div className="movie-details-movie-card-container">
          <MovieCard movie={movie} details />
        </div>
      )}
      {hasAnyRoles(['ROLE_MEMBER']) && <ReviewSubmit callback={setRefresh} />}
      <div className="base-card movie-reviews-container">
        {reviews ? (
          reviews.length === 0 ? (
            <h6>There is no review for this movie yet</h6>
          ) : (
            reviews.map((review) => {
              return <ReviewDetails review={review} key={review.id} />;
            })
          )
        ) : null}
      </div>
    </div>
  );
};

export default MovieDetails;
