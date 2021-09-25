import './styles.css';
import Select, { StylesConfig } from 'react-select';
import { Genre } from 'types/genre';

const SearchBar = () => {
  const selectGenres: Genre[] = [
    { id: '1', name: 'Comédia' },
    { id: '2', name: 'Drama' },
  ];
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
