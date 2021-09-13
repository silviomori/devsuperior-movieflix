import './styles.css';
import MovieCard from 'components/MovieCard';
import { Link } from 'react-router-dom';

const Catalog = () => {
  return (
    <div className="my-4 container catalog-container">
      <div className="row catalog-title-container">
        <h1>Movie catalog</h1>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/movies/1">
            <MovieCard title={'Movie 1'} />
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/movies/2">
            <MovieCard title={'Movie 2'} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
