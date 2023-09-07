import React, { ChangeEvent, useId } from 'react';
import cl from './Search.module.scss';
import SearchIcon from '../../assets/icons/search.svg';
import useSearch from '../../hooks/useSearch';

const Search = () => {
  const [searchString, setSearchString] = useSearch();
  const searchInput = useId();

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchString(evt.target.value);
  };

  return (
    <div className={cl.searchWrapper}>
      <label htmlFor={searchInput}>
        <SearchIcon className={cl.searchIcon} />
      </label>
      <input
        className={cl.searchInput}
        id={searchInput}
        type='text'
        value={searchString}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
