import './styles.css';
import { Movie } from 'types/movie';

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="base-card movie-card">
      <div className="card-top-container">
        <img src={movie.imgUrl} alt={movie.title} />
      </div>
      <div className="card-bottom-container">
        <h1>{movie.title}</h1>
        <h2 className="text-primary">{movie.year}</h2>
        <p>{movie.subTitle}</p>
      </div>
    </div>
  );
};

export default MovieCard;
