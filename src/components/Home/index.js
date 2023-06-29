import React from 'react';
import { Box, CircularProgress } from '@mui/material';

import { MovieSlider } from '..';
import { useGetGenresQuery } from '../../services/TMDB';
import useStyles from './styles';

const categories = [
  { label: 'New & Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const Home = () => {
  const classes = useStyles();
  const { data: genresData, error, isFetching } = useGetGenresQuery();
  return (
    <div className={classes.wrapper}>
      <div>
        {categories.map(({ label, value }) => (
          <MovieSlider key={value} label={label} value={value} />
        ))}
      </div>
      {/*{isFetching ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )
        : (
          <div className={classes.wrapper}>
            {genresData.genres.map(({ name, id }) => (
              <MovieSlider key={id} label={name} value={id} />
            ))}
          </div>
        )}*/}
    </div>
  );
};

export default Home;
