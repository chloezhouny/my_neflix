import React from 'react';
import { Grid} from '@mui/material';
import useStyles from './styles';

import { Movie } from '..';

const MovieList = ({ movies, numberOfMovies, width, startFrom }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      columnSpacing={0.8}
      rowSpacing={{ xs: 4, sm: 5, md: 6 }}
      sx={{ width,
        margin: 'auto' }}
      className={classes.moviesContainer}
    >
      {movies.results.slice(startFrom, numberOfMovies).map((movie, i) => (
        <Grid item xs={4} sm={3} md={3} lg={2.4} xl={2}>
          <Movie key={i} movie={movie} i={i} height="auto" width="100%" />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
