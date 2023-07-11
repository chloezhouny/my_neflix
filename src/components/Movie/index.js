import React, { useState } from 'react';
import { Box, CircularProgress, Modal, Fade, Card, CardMedia, CardActions, Button, Typography, CardContent, useMediaQuery } from '@mui/material';
import {
  PlayArrow as PlayArrowIcon,
  InfoOutlined as InfoOutlinedIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import { MovieInformation, Actor } from '..';
import { useGetMovieQuery } from '../../services/TMDB';
import useStyles from './styles';

const Movie = ({ movie, height, isFeatured }) => {
  const [movieOpen, setMovieOpen] = useState(false);
  const [actorOpen, setActorOpen] = useState(false);
  // const [featuredData, setFeaturedData] = useState([]);
  const [playFeatured, setPlayFeatured] = useState(false);
  const [movieId, setMovieId] = useState(movie?.id);
  const [actorId, setActorId] = useState('');
  const [expanded, setExpanded] = useState(false);
  const { data: featuredData, isFetching, error } = useGetMovieQuery(movie?.id);
  const isMobile = useMediaQuery('(max-width:599px)');
  const classes = useStyles();
  const theme = useTheme();

  if (isFetching && isFeatured) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress sx={{ color: theme.palette.mode === 'light' ? '#485863' : '#e50914' }} size="8rem" />
      </Box>
    );
  }
  return (
    <>

      {isFeatured && movie && (
        <Box className={classes.featuredWrapper}>
          <Card className={classes.featuredCard} classes={{ root: classes.featuredCardRoot }}>
            {!playFeatured && (
            <CardMedia
              media="picture"
              alt={movie?.title}
              image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              // height={height}
              className={classes.featuredCardMedia}
              onClick={() => setPlayFeatured(true)}
              // onMouseEnter={() => setPlayFeatured(true)}

            />
            )}
            {playFeatured && (
            <iframe
              autoPlay
              className={classes.video}
              width="1213"
              height="559"
              frameBorder="0"
              title="Trailer"
              src={`https://www.youtube.com/embed/${featuredData?.videos?.results[featuredData?.videos?.results.length - 1].key}?start=4&autoplay=1&controls=0&showinfo=0&rel=0`}
              allow="autoplay"
              // onClick={() => setPlayFeatured((prev) => (!prev))}
              // onMouseLeave={() => setPlayFeatured(false)}

            />
            )}
            <Box padding="9vw 4vw">
              <CardContent className={classes.featuredCardContent} classes={{ root: classes.featuredCardContentRoot }}>
                {featuredData?.images?.logos[0]?.file_path
                  ? (<img width="65%" height="auto" src={`https://image.tmdb.org/t/p/w500/${featuredData?.images?.logos[0]?.file_path}`} />)
                  : (
                    <Typography sx={{ fontSize: '2vw' }} gutterBottom>
                      {movie.title}
                    </Typography>
                  )}
                <Typography sx={{ fontSize: '1.2vw' }} marginTop="1.4vw" gutterBottom>
                  {movie.overview.split('.')[0]}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => {
                    setMovieOpen(true);
                    setPlayFeatured(false);
                  }}
                  startIcon={<PlayArrowIcon sx={{ fontSize: '2.5vw !important' }} />}
                  size="large"
                  sx={{ fontSize: '1.3vw', color: 'black', backgroundColor: 'white', textTransform: 'none' }}
                >
                  Play
                </Button>
                <Button
                  onClick={() => {
                    setMovieOpen(true);
                    setPlayFeatured(false);
                  }}
                  size="large"
                  startIcon={<InfoOutlinedIcon sx={{ fontSize: '2.5vw !important' }} />}
                  sx={{ color: 'white', fontSize: '1.3vw', backgroundColor: 'rgba(109, 109, 110, 0.7)', textTransform: 'none' }}
                >
                  More Info
                </Button>
              </CardActions>
            </Box>
          </Card>
        </Box>
      )}

      {!isFeatured && (
      <div onClick={
        () => {
          setPlayFeatured(false);
          setMovieOpen(true);
        }
      }
      >
        <img
          src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : 'https://www.fillmurray.com/200/300'}
          alt={movie.title}
          className={classes.image}
          // onMouseEnter={handlePopoverOpen}
          // onMouseLeave={handlePopoverClose}
          // onClick={handlePopoverOpen}
          height={height}
          width="100%"
          maxWidth="132px"
        />
        <div className={classes.movieTitle}>{movie.title}</div>
      </div>
      )}

      <Modal
        closeAfterTransition
        className={classes.modal}
        open={movieOpen}
        onClose={() => setMovieOpen(false)}
      >
        <Fade in={movieOpen}>
          <div
            // className={classes.container}
          className={expanded || isMobile ? classes.fullScreenContainer : classes.container}
          >
            <MovieInformation
              id={movie?.id || movieId}
              setMovieOpen={setMovieOpen}
              setActorOpen={setActorOpen}
              setActorId={setActorId}
              expanded={expanded}
              setExpanded={setExpanded}
              sx={{
                maxHeight: '80vh',
                overflow: 'auto',
              }}
            />
          </div>
        </Fade>

      </Modal>
      <Modal
        closeAfterTransition
        className={classes.modal}
        open={actorOpen}
        onClose={() => setMovieOpen(false)}
      >
        <Fade in={actorOpen}>
          <div
            className={actorOpen || isMobile ? classes.fullScreenContainer : classes.container}
          >
            <Actor
              id={actorId}
              setMovieOpen={setMovieOpen}
              setActorOpen={setActorOpen}
              sx={{
                maxHeight: '80vh',
                overflow: 'auto',
              }}
            />
          </div>
        </Fade>

      </Modal>

    </>
  );
};

export default Movie;
