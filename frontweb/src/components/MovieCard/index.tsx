import './styles.css';
import MoviePng from 'assets/images/movie-icon.png';

type Props = {
  title: string;
};

const MovieCard = ({ title }: Props) => {
  return (
    <div className="base-card movie-card">
      <div className="card-top-container">
        <img src={MoviePng} alt={title} />
      </div>
      <div className="card-bottom-container">
        <h6>{title}</h6>
      </div>
    </div>
  );
};

export default MovieCard;
