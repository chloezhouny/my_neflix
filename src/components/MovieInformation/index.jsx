import React, { useState, useEffect } from 'react';
import { Typography,
  Collapse, Card, CardContent, CardMedia,
  Tooltip, IconButton, ButtonGroup, Grid, Box,
  CircularProgress, useMediaQuery, Rating } from '@mui/material';
import {
  CloseOutlined as CloseOutlinedIcon,
  AddOutlined as AddOutlinedIcon,
  CheckOutlined as CheckOutlinedIcon,
  ThumbUpAltOutlined as ThumbUpAltOutlinedIcon,
  ThumbUpAlt as ThumbUpAltIcon,
  ArrowBack,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { useGetMovieQuery, useGetListQuery, useGetRecommendationsQuery } from '../../services/TMDB';

const MovieInformation = ({ id, setMovieOpen, setActorOpen, setActorId, expanded, setExpanded }) => {
  const emulateFetch = () => new Promise((resolve) => {
    resolve([{ data: 'ok' }]);
  });
  const { user } = useSelector((state) => state.auth);
  const { data, isFetching, error } = useGetMovieQuery(id);
  const { data: watchlistMovies, refetch: refetchWatchlist } = useGetListQuery({ listName: 'watchlist/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 }, emulateFetch, {
    enable: true,
  });
  const { data: favoriteMovies, refetch: refetchFavorite } = useGetListQuery({ listName: 'favorite/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 }, emulateFetch, {
    enable: true,
  });
  const { data: recommendations, isFetching: isRecommendationsFetching } = useGetRecommendationsQuery({ movie_id: id, list: '/recommendations' });
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width:599px)');
  const [isMovieFavorited, setIsMovieFavorited] = useState(false);
  const [isMovieWatchListed, setIsMovieWatchListed] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setIsMovieWatchListed(!!watchlistMovies?.results?.find((movie) => movie?.id === data?.id));
  }, [watchlistMovies, data]);
  useEffect(() => {
    setIsMovieFavorited(!!favoriteMovies?.results?.find((movie) => movie?.id === data?.id));
  }, [favoriteMovies, data]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const addToWatchList = async () => {
    await axios.post(
      `https://api.themoviedb.org/3/account/${user.id}/watchlist?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${localStorage.getItem('session_id')}`,
      { media_type: 'movie', media_id: id, watchlist: !isMovieWatchListed },
    );
    refetchWatchlist();
  };
  const addToFavorites = async () => {
    await axios.post(
      `https://api.themoviedb.org/3/account/${user.id}/favorite?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${localStorage.getItem('session_id')}`,
      { media_type: 'movie', media_id: id, favorite: !isMovieFavorited },
    );
    refetchFavorite();
  };

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" />
    );
  }
  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/">Something has gone wrong - Go back</Link>
      </Box>
    );
  }
  return (
    <Grid container xs={12} className={classes.container}>
      <Grid item xs={12}>
        {data.videos.results.length > 0 ? (
          <iframe
            autoPlay
            className={classes.video}
            width="1213"
            height="559"
            frameBorder="0"
            title="Trailer"
            src={`https://www.youtube.com/embed/${data.videos.results[data.videos.results.length - 1].key}?rel=0&start=4&autoplay=1&controls=0&showinfo=0`}
            // allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allow="autoplay"
          />
        ) : (
          <img src={`https://image.tmdb.org/t/p/original/${data?.images?.backdrops[0]?.file_path}`} className={classes.poster} alt={data?.title} />
        )}
        <Grid spacing={1} className={(expanded || isMobile) ? classes.buttonGroupWrapperExpanded : classes.buttonGroupWrapper} item container xs={12}>
          <Grid item xs={4.5}>
            {data?.images?.logos[0]?.file_path
              ? (<img width="100%" height="auto" src={`https://image.tmdb.org/t/p/w500/${data?.images?.logos[0]?.file_path}`} />)
              : (
                <Typography sx={{ fontSize: '2vw' }} gutterBottom>
                  {data.title}
                </Typography>
              )}
          </Grid>

          <Grid item container xs={12} display='flex' justifyContent='space-between' marginTop="2vw" marginLeft="0.5vw">
            <Grid item container  spacing={1.5} xs={4}>
              <Grid item xs={4}>
                <Tooltip
                  title={isMovieWatchListed ? 'Remove from My List' : 'Add to My List'}
                  placement="top"
                  arrow
                >
                  <IconButton aria-label="wachlist" size="medium" onClick={addToWatchList}>
                    {isMovieWatchListed ? <CheckOutlinedIcon /> : <AddOutlinedIcon />}
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item xs={4}>
                <Tooltip
                  title={isMovieFavorited ? 'Rated' : 'I like this'}
                  placement="top"
                  arrow
                >
                  <IconButton aria-label="favorite" size="medium" onClick={addToFavorites}>
                    {isMovieFavorited ? <ThumbUpAltIcon /> : <ThumbUpAltOutlinedIcon />}
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
            { !expanded && !isMobile
            && (
            <Grid item xs={2}>
              <Tooltip title="More Info" placement="top" arrow>
                <IconButton
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="More Info"
                  className={classes.expandMoreIcon}
                  sx={{ transform: !expanded ? 'rotate(0deg)' : 'rotate(180deg)' }}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Grid item container xs={12} spacing={3} sx={(expanded || isMobile) ? { margin: '0 4vw 2vh 4vw' } : { margin: '-2vh 2vw 1vh 2vw' } }>
        <Grid item container className={classes.leftContainer} xs={!expanded && !isMobile ? 12 : 8} sx={{ padding: '0px', marginLeft: '-24px' }}>
          <Grid item display="flex" flexDirection={isMobile ? 'column' : 'row'} align="space-around">
            <div className={classes.ratingWrapper}>
              <Rating readOnly value={data.vote_average / 2} />
              <Typography fontSize="16px" marginLeft='0.5em'>{data?.vote_average}/10 </Typography>
            </div>
            <Typography fontSize="16px" sx={{ color: '#bcbcbc' }}>
              {data?.runtime}min {data.release_date.split('-')[0]}
            </Typography>
          </Grid>
          { (expanded || isMobile) && (
            <Grid item xs={12}>
              <Typography
                fontSize="14px"
                gutterBottom
              >
                {data?.overview}
              </Typography>
            </Grid>
          )}
        </Grid>
        {(expanded || isMobile) && (
        <Grid container item className={classes.rightContainer} xs={4}>
          <Grid item xs={12}>
            <span className={classes.rightTitle}>Cast: </span>
            <span>{data?.credits?.cast?.map((cast) => (
              <div key={cast.name} className={classes.links} onClick={() => { setActorOpen(true); setActorId(cast.id); setMovieOpen(false) }}>
                <Typography variant="body">{cast?.name}{', '} </Typography>
              </div>
            )).slice(0, 3)}
            </span>
            <span>more</span>
          </Grid>
          <Grid item xs={12}>
            <span className={classes.rightTitle}>Genres: </span>
            <span>{data?.genres?.map((genre, i) => (
              <Link key={genre.name} className={classes.links} to="/movies" onClick={() => { selectGenreOrCategory({ id: genre.id, name: genre.name }); setMovieOpen(false); setActorOpen(false); }}>
                <Typography variant="body">{genre?.name}{i === data?.genres?.length - 1 ? '' : ', '} </Typography>
              </Link>
            )) }
            </span>
          </Grid>
        </Grid>
        )}
        <Collapse in={expanded || isMobile} timeout="auto" unmountOnExit>
          <Grid item sx={{ marginTop: '2em', marginBottom: '20px' }} xs={12}>
            <Typography fontSize="24px" gutterBottom>
              More Like This
            </Typography>
            <Grid item container xs={12} spacing={2}>
              {recommendations?.results?.slice(0, 9).map((movie) => (
                <Grid item xs={6} sm={4}>
                  <Card sx={{ maxWidth: 345, color: 'white', backgroundColor: '#2f2f2f' }}>
                    <CardMedia
                      sx={{ width: '100%', height: '130px' }}
                      image={movie.backdrop_path && `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
                      title={movie.title}
                    />
                    <CardContent>
                      <Typography gutterBottom component="div" sx={{ fontSize: '16px', height: '20px', overflow: 'hidden', color: '#d2d2d2' }}>
                        {`${movie.title} (${movie.release_date.split('-')[0]})`}
                      </Typography>
                      <Typography sx={{ fontSize: '14px', height: '60px', overflow: 'hidden', color: '#d2d2d2', marginTop: '1em' }}>
                        {movie.overview.split('.')[0]}.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

          </Grid>
        </Collapse>
      </Grid>
      <div className={expanded ? classes.closeIconWrapperExpanded : classes.closeIconWrapper}>
        <IconButton
          aria-label="back"
          size="large"
          onClick={() => {
            setMovieOpen(false);
            setExpanded(false);
          }}

        >
          <CloseOutlinedIcon sx={{color: 'white'}}/>
        </IconButton>
      </div>
    </Grid>
  );
};

export default MovieInformation;
