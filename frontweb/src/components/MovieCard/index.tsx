import './styles.css';
import { Movie } from 'types/movie';

type Props = {
  movie: Movie;
  details?: boolean;
};

const MovieCard = ({ movie, details }: Props) => {
  return (
    <div className={`base-card movie-card ${details ? 'details' : ''}`}>
      <img
        src={movie.imgUrl}
        alt={movie.title}
        className={`img-fluid movie-card-img ${details ? 'details' : ''}`}
      />
      <div
        className={`movie-card-bottom-container ${details ? 'details' : ''}`}
      >
        <h1>{movie.title}</h1>
        <h2 className="text-primary">{movie.year}</h2>
        <p>{movie.subTitle}</p>
        {details && <div className="movie-card-synopsis">{movie.synopsis}</div>}
      </div>
    </div>
  );
};

export default MovieCard;
