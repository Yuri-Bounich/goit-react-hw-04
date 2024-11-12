import s from './SearchBox.module.css';
// import { useState } from 'react';

const SearchBox = ({ values, onFilterChange }) => {
  //   const [inputValue, setInputValue] = useState('');
  return (
    <label className={s.input}>
      <span>Find contacts by name</span>
      <input
        type="text"
        value={values}
        onChange={onFilterChange}
        name="search"
      />
    </label>
  );
};

export default SearchBox;
