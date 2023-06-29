import React, { useState } from 'react';
import { Typography, Popover, Card, CardActions, CardContent, CardMedia, Button, Tooltip, Rating, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Movie = ({ movie, i, height }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isDesktop = useMediaQuery('(min-width:900px)');

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const classes = useStyles();
  console.log(movie, i);
  return (
    <>
      {!isDesktop && (
      <div className={classes.imageContainer}>
        <Link
          className={classes.links}
          to={`/movie/${movie.id}`}
        >
          <img
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://www.fillmurray.com/200/300'}
            alt={movie.title}
            className={classes.image}
            height={height}
          />
        </Link>
      </div>
      )}

      {isDesktop && (
      <>
        <img
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://www.fillmurray.com/200/300'}
          alt={movie.title}
          className={classes.image}
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          height={height}
        />
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: 'none',
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Card sx={{ maxWidth: 345 }}>
            <Link
              className={classes.links}
              to={`/movie/${movie.id}`}
            >
              <CardMedia
                component="iframe"
                sx={{ height: 140 }}
                  // image={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://www.fillmurray.com/200/300'}
                image="https://www.youtube.com/embed/TnGl01FkMMo?autoplay=1"
                title={movie.title}
                autoPlay
                webShare
              />
            </Link>
            <CardContent>
              <Typography className={classes.title} gutterBottom variant="h5">{movie.title}</Typography>

              <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
                <div>
                  <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
                </div>
              </Tooltip>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>

          </Card>
        </Popover>
      </>
      )}
    </>
  );
};

export default Movie;
