import React, { useState } from 'react';
import {
  Search as SearchIcon,
} from '@mui/icons-material';

import {
  InputBase,
  useMediaQuery,
} from '@mui/material';

import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

import useStyles from './styles';

import { searchMovie } from '../../features/currentGenreOrCategory';

const Search = () => {
	 const isMobile = useMediaQuery('(max-width:599px)');
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      dispatch(searchMovie(query));
      history.push('/movies');
    }
  };

  return (
    <div className={classes.searchContainer}>
      {!isMobile && (
      <div className={classes.searchIconWrapper}>
        <SearchIcon />
      </div>
      )}
      <InputBase
        placeholder="Search"
        className={classes.searchInput}
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
