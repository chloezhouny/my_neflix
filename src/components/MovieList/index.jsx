import React from 'react';
import { Grid } from '@mui/material';
import useStyles from './styles';

import { Movie } from '..';

const MovieList = ({ movies }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={0.5}
      sx={{ width: '70%',
        margin: 'auto' }}
      className={classes.moviesContainer}
    >
      {movies.results.map((movie, i) => (
        <Grid item xs={6} sm={4} md={4} lg={3} xl={2} className={classes.movie}>
          <Movie key={i} movie={movie} i={i} height="200px" />
        </Grid>
      ))}
    </Grid>

  );
};

export default MovieList;
