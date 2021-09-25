import './styles.css';
import Select from 'react-select';
import { Genre } from 'types/genre';
import { useEffect, useState } from 'react';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';

const SearchBar = () => {
  const [selectGenres, setSelectGenres] = useState<Genre[]>();
  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/genres',
      withCredentials: true,
    };
    requestBackend(config).then((response) => setSelectGenres(response.data));
  }, []);

  return (
    <div className="base-card searchbar-card">
      <Select
        className="form-control"
        classNamePrefix="searchbar-select"
        options={selectGenres}
        isClearable
        getOptionLabel={(genre: Genre) => genre.name}
        getOptionValue={(genre: Genre) => genre.id}
      />
    </div>
  );
};

export default SearchBar;
