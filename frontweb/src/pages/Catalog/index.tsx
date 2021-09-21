import './styles.css';
import MovieCard from 'components/MovieCard';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { Movie } from 'types/movie';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';

const Catalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      params: {
        page: 0,
        size: 12,
        sort: 'id,ASC',
      },
    };
    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div className="my-4 container catalog-container">
      <div className="row catalog-title-container">
        <h1>Movie catalog</h1>
      </div>
      <div className="row">
        {page?.content.map((movie) => {
          return (
            <div className="col-sm-6 col-xl-3" key={movie.id}>
              <Link to={'/movies/' + movie.id}>
                <MovieCard movie={movie} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Catalog;
