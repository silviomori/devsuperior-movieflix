import './styles.css';
import MovieCard from 'components/MovieCard';
import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { Movie } from 'types/movie';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import SearchBar from './SearchBar';
import { Genre } from 'types/genre';
import Pagination from './Pagination';

type ComponentOptions = {
  genre: Genre | null;
};

const Catalog = () => {
  const [options, setOptions] = useState<ComponentOptions>();
  const [page, setPage] = useState<SpringPage<Movie>>();

  const getMoviesPage = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies?genreId=${
        options ? (options.genre ? options.genre.id : '0') : '0'
      }`,
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
  }, [options]);

  useEffect(() => {
    getMoviesPage();
  }, [getMoviesPage]);

  const handleGenreChange = (genre: Genre | null) => {
    setOptions({
      genre: genre,
    });
  };

  return (
    <div className="my-4 container catalog-container">
      <div className="catalog-searchbar-container">
        <SearchBar onSelect={handleGenreChange} />
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
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default Catalog;
