import React, { useEffect } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useSelector } from 'react-redux';

import { useGetListQuery } from '../../services/TMDB';
import { MovieList } from '..';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const { data: watchlistMovies, refetch: refetchWatchlist } = useGetListQuery({ listName: 'watchlist/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });
  const { data: favoriteMovies, refetch: refetchFavorite } = useGetListQuery({ listName: 'favorite/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });

  useEffect(() => {
    refetchFavorite();
    refetchWatchlist();
  }, []);
  return (
    <Box margin="2em 4vw">
      <Box>
        <Typography fontSize="2vw" gutterBottom>My List</Typography>
        <Box display="flex" justifyContent="start" marginTop="6vh">
          {watchlistMovies && (
          <MovieList movies={watchlistMovies} width="100%" startFrom={0}/>
          )}
        </Box>
      </Box>
      <Box marginTop="7vh">
        <Typography fontSize="2vw" gutterBottom>My Favorites</Typography>
        <Box display="flex" justifyContent="start" marginTop="6vh">
          {favoriteMovies && (
          <MovieList movies={favoriteMovies} width="100%" startFrom={0}/>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
