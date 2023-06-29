import React, { useState, useMemo } from 'react';
import { Box, CircularProgress, Typography, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@mui/material/styles';

import { Movie } from '..';
import './slick.css';
import './slickTheme.css';
import { useGetMoviesQuery } from '../../services/TMDB';
import { useResponsive } from '../../services/useResponsive';
import useStyles from './styles';

const MovieSlider = ({ label, value }) => {
  const [page, setPage] = useState(1);
  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName: value, page });
  const memoizedData = useMemo(() => data, [data]);
  const isMobile = useMediaQuery('(max-width:599px)');
  const isDesktop = useMediaQuery('(min-width:900px)');
  const { screenType } = useResponsive();
  const classes = useStyles();
  const theme = useTheme();

  console.log(memoizedData);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please search for something else.
        </Typography>

      </Box>
    );
  }

  if (error) return 'An error has occured';

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.title}>{label}</div>
        <Slider
          dots={!isMobile}
          infinite
          speed="500"
          slidesToShow={(isMobile || screenType === 'MOBILE') ? 2 : 5}
          slidesToScroll={(isMobile || screenType === 'MOBILE') ? 2 : 5}
          nextArrow={(isDesktop || screenType !== 'MOBILE') && <ArrowForwardIosIcon sx={{ color: theme.palette.mode === 'light' ? '#485863' : '#fff' }} />}
        >
          {memoizedData.results.map((movie, i) => (
            <Movie movie={movie} key={i} height="200px" />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MovieSlider;
