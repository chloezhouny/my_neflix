import React from 'react';

import { Movie, MovieSlider } from '..';
import { useGetMoviesQuery } from '../../services/TMDB';
import useStyles from './styles';

const categories = [
  { label: 'New & Popular', value: 'popular' },
  {label: 'Now Playing', value: 'now_playing'},
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const Home = () => {
  const classes = useStyles();
  const { data } = useGetMoviesQuery({ page: 1 });
  return (
    <>
      <Movie isFeatured height="490px" movie={data?.results[0]} />
      <div className={classes.wrapper}>
        <div>
          {categories.map(({ label, value }) => (
            <MovieSlider key={value} label={label} value={value} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
