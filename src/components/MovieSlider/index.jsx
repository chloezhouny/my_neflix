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
import { useResponsive } from '../../utils/useResponsive';
import useStyles from './styles';

const MovieSlider = ({ label, value }) => {
  const [page, setPage] = useState(1);
  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName: value, page });
  const memoizedData = useMemo(() => data, [data]);
  const startFrom = value === 'popular' ? 1 : 0;
  const isXs = useMediaQuery('(max-width:599px)');
  const isSm = useMediaQuery('(min-width:600px and max-width:899px)');
  const isMd = useMediaQuery('(min-width:900px and max-width:1199px)');
  const isLg = useMediaQuery('(min-width:1200px and max-width:1535px)');
  const isXl = useMediaQuery('(min-width:1536px)');
  const { screenType } = useResponsive();
  const classes = useStyles();
  const theme = useTheme();

  const slidesToShow = ((isXs || screenType === 'Xs') && 3)
          || ((isSm || screenType === 'Sm') && 4)
          || ((isMd || screenType === 'Md') && 4)
          || ((isLg || screenType === 'Lg') && 5)
          || ((isXl || screenType === 'Xl') && 6);

  if (isFetching) {
    return (
      <Box position='absolute' display='flex' alignItems='center' justifyContent='center'>
        {/*<CircularProgress size="1rem" />*/}
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
          dots={!isXs}
          infinite
          speed="500"
          slidesToShow={slidesToShow}
          slidesToScroll={slidesToShow}
          nextArrow={(screenType !== 'Xs') && <ArrowForwardIosIcon sx={{ color: theme.palette.mode === 'light' ? '#485863' : '#fff' }} />}
          prevArrow={<ArrowBackIosIcon sx={{ display: 'none' }} />}
        >
          {memoizedData.results.slice(startFrom).map((movie, i) => (
            <Movie movie={movie} key={i} height="auto" />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MovieSlider;
