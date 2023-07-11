import React, { useState, useEffect } from 'react';

import { Box, 
AppBar,
Container,
Toolbar,
  Typography,
  Menu,
  MenuItem,
  Button,
  Grid,
useMediaQuery,
CircularProgress, IconButton } from '@mui/material';
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
} from '@mui/icons-material';

import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import { useGetMoviesQuery, useGetGenresQuery } from '../../services/TMDB';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { MovieList, Movie } from '..';
import useStyles from './styles';

const Movies = () => {
  const [page] = useState(1);
  const [isScrolledToContent, setScrolledToContent ] = useState(true);
  const { genreIdOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCategory);
  const { data: movies,  error: moviesError, isFetching: isMoviesFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery });
  const { data: genresData, error:genresError, isFetching: isGenresFetching } = useGetGenresQuery();
  const [anchorElGenre, setAnchorElGenre] = useState(null);

  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width:599px)');

  const handleOpenGenreMenu = (event) => {
    setAnchorElGenre(event.currentTarget);
  };
    const handleCloseGenreMenu = async ({name, id}) => {
    setAnchorElGenre(null);
   await dispatch(selectGenreOrCategory({ name, id }))
  };

  const changeHeaderColor = () => {
    if (window.scrollY >= 120) {
      setScrolledToContent(true)
    } else {
      setScrolledToContent(false)
    }
  }
  useEffect(() => {
    changeHeaderColor()
    window.addEventListener("scroll", changeHeaderColor)
  })

  if (isMoviesFetching || isGenresFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  if (!movies.results.length) {
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

  if (moviesError || genresError) return 'An error has occured';
  return (
    <>   
     <AppBar
        className={classes.appBarWrapper}
        position="fixed"
        sx={{top: '70px'}}
      >
        <Container maxWidth="xl" sx={isScrolledToContent && {backgroundColor: theme.palette.mode === 'light' ? '#FFF3EF' : 'black'}}>     
      {!!genreIdOrCategoryName && !isMobile && (
        <Toolbar className={classes.genreHeaderWrapper} disableGutters>
          <Box display='flex' alignItems='center' marginTop='0.5vw'>
            <Button   sx={{color: theme.palette.mode === 'light' ? '#485863' : 'grey', marginLeft:'1vw', textTransform: 'none', fontSize: '2.5vw' }}>
              <Typography onClick={ () => dispatch(selectGenreOrCategory())}  >Movies </Typography>
            </Button>
              <Typography sx={{color: theme.palette.mode === 'light' ? '#485863' : 'grey'}}> > </Typography>
            <Typography sx={{color: theme.palette.mode === 'light' ? '#485863' : 'white'}} fontSize="2.5vw" fontWeight='500' marginLeft='1.1vw'>{genreIdOrCategoryName.name} Movies</Typography>
          </Box>
        </Toolbar>
      )}
      {!genreIdOrCategoryName && !isMobile && (
          <Toolbar disableGutters className={classes.headerWrapper}>
            <Box className={classes.header} marginTop='0.5vw'>
              <Typography sx={{color: theme.palette.mode === 'light' && isScrolledToContent ? '#485863' : '#fff'}} marginLeft='1vw' fontSize="3vw" fontWeight="600">Movies</Typography>
            <div className={classes.genreBtnContainer}>
              <Button
                  aria-label="Genres"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  key="genres"
                  onClick={handleOpenGenreMenu}
                  endIcon={<KeyboardArrowDownIcon />}
                  className={classes.navItem}
                  sx={{
                    color: theme.palette.mode === 'light' && isScrolledToContent ? '#485863' : '#fff', 
                    textTransform: 'none', 
                    fontSize: '1vw',  
                    border: `1px solid ${theme.palette.mode === 'light' && isScrolledToContent ? '#485863' : '#fff'}`,
                  }}
                >
                  Genres
                </Button>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElGenre}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElGenre)}
                  onClose={handleCloseGenreMenu}
                  onMouseLeave={handleCloseGenreMenu}
                  className={classes.menuContainer}
                  color="inherit"
                >
                <Grid container spacing={3} padding='0 1vw'>
                  <Grid item>
                  {genresData?.genres?.slice(0, 7).map(({ id, name}) => (
                    <Link
                      key={id}
                      to='/movies'
                      color="inherit"
                      className={classes.genreMenuLinks}
                    >
                      <MenuItem
                        color="inherit"
                        onClick={() => handleCloseGenreMenu({name, id})}
                      >
                        <Typography
                          align="start"
                          sx={{ width: '100%',
                            color: theme.palette.mode === 'light' ? '#485863' : '#fff',
                            fontWeight: theme.palette.mode === 'light' ? '500' : '200',
                            fontSize: '1vw',
                            '&:hover': {
                              fontWeight: theme.palette.mode === 'light' ? '200' : '500',
                                 textDecoration: 'underline'
                            } }}

                        >{name}
                        </Typography>
                      </MenuItem>
                    </Link>
                  ))} 
                  </Grid>
                  <Grid item>
                  {genresData?.genres?.slice(8, 15).map(({ id, name}) => (
                    <Link
                      key={id}
                      to='/movies'
                      color="inherit"
                      className={classes.genreMenuLinks}
                    >
                      <MenuItem
                        color="inherit"
                        onClick={() => handleCloseGenreMenu({name, id})}
                      >
                        <Typography
                          align="start"
                          sx={{ width: '100%',
                            color: theme.palette.mode === 'light' ? '#485863' : '#fff',
                            fontWeight: theme.palette.mode === 'light' ? '500' : '200',
                            fontSize: '1vw',
                            '&:hover': {
                              fontWeight: theme.palette.mode === 'light' ? '200' : '500',
                                 textDecoration: 'underline'
                            } }}

                        >{name}
                        </Typography>
                      </MenuItem>
                    </Link>
                  ))} 
                  </Grid>
                  <Grid item>
                  {genresData?.genres?.slice(16).map(({ id, name}) => (
                    <Link
                      key={id}
                      to='/movies'
                      color="inherit"
                      className={classes.genreMenuLinks}
                    >
                      <MenuItem
                        color="inherit"
                        onClick={() => handleCloseGenreMenu({name, id})}
                      >
                        <Typography
                          align="start"
                          sx={{ width: '100%',
                            color: theme.palette.mode === 'light' ? '#485863' : '#fff',
                            fontWeight: theme.palette.mode === 'light' ? '500' : '200',
                                                      fontSize: '1vw',
                            '&:hover': {
                              fontWeight: theme.palette.mode === 'light' ? '200' : '500',
                              textDecoration: 'underline'
                            } }}

                        >{name}
                        </Typography>
                      </MenuItem>
                    </Link>
                  ))} 
                  </Grid>
                  </Grid>
                </Menu>
                </div>
            </Box>
          </Toolbar>
      )}
</Container>
</AppBar>
      <Movie isFeatured height="490px" movie={movies?.results[0]} />
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <MovieList movies={movies} startFrom={1} />
        </div>
      </div>
    </>
  );
};

export default Movies;
