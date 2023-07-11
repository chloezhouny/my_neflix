import React from 'react';
import { Typography,
  IconButton, Grid, Box,
  CircularProgress } from '@mui/material';

import {
  ArrowBack,
  Close as CloseIcon,
} from '@mui/icons-material';
import useStyles from './styles';
import { useGetActorsDetailsQuery, useGetMoviesByActorIdQuery } from '../../services/TMDB';

import { MovieList } from '..';

const Actor = ({ id, setMovieOpen, setActorOpen }) => {
  const page = 1;
  const classes = useStyles();
	   const { data, isFetching, error } = useGetActorsDetailsQuery(id);
	   const { data: movies } = useGetMoviesByActorIdQuery({ id, page });

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
    if (error) {
      return (
        <Box display="flex" justifyContent="center" alignItems="center">
          <IconButton aria-label="back" size="small" onClick={() => { setMovieOpen(true); setActorOpen(false); }}>
            <ArrowBack />
          </IconButton>
        </Box>
      );
    }
  }
  return (
    <Grid container xs={12} className={classes.container}>
      <Grid item container xs={12} sx={{ margin: '1em 1em 2em 1em' }}>
        <Grid item container xs={12} display="flex" justifyContent="space-between">
          <IconButton aria-label="back" size="small" onClick={() => { setMovieOpen(true); setActorOpen(false); }}>
            <ArrowBack />
          </IconButton>
          <IconButton aria-label="back" size="small" onClick={() => { setMovieOpen(false); setActorOpen(false); }}>
            <CloseIcon />
          </IconButton>
        </Grid>
        <Grid item display="flex" justifyContent="center" alignItem="center" xs={12}>
          <Typography fontSize="4rem" fontWeight="900" color="rgb(72, 88, 99)" textAlign="center">{data?.name}</Typography>
        </Grid>
        {movies && (
        <Grid item container marginTop="3rem" xs={12}>
          <MovieList movies={movies} numberOfMovies={8} />
        </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Actor;
