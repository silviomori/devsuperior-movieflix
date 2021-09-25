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
  activePage: number;
};

const Catalog = () => {
  const [options, setOptions] = useState<ComponentOptions>({
    genre: null,
    activePage: 0,
  });
  const [page, setPage] = useState<SpringPage<Movie>>();

  const getMoviesPage = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies?genreId=${
        options ? (options.genre ? options.genre.id : '0') : '0'
      }`,
      withCredentials: true,
      params: {
        page: `${options ? (options.activePage ? options.activePage : 0) : 0}`,
        size: 4,
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
    setOptions({ genre: genre, activePage: 0 });
  };

  const handlePageChange = (pageNumber: number) => {
    console.log('handlePageChange: ', pageNumber);
    setOptions({
      genre: options ? options.genre : null,
      activePage: pageNumber,
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
        <Pagination
          pageCount={page ? page.totalPages : 0}
          range={3}
          onChange={handlePageChange}
          forcePage={page?.number}
        />
      </div>
    </div>
  );
};

export default Catalog;
