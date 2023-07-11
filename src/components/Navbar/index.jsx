import React, { useState, useEffect, useContext } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Box,
  Typography,
  Menu,
  MenuItem,
  Container,
  Button,
  Grid,
  Avatar,
  Drawer,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';

import Logo from './Logo';
import { Sidebar, Search } from '..';

import { ColorModeContext } from '../../utils/ToggleColorMode';
import { setUser } from '../../features/auth';
import { fetchToken, createSessionId, moviesApi } from '../../utils';
import { useGetMoviesQuery, useGetGenresQuery } from '../../services/TMDB';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import useStyles from './styles';

const categories = [
  { label: 'Movies', value: 'movies', link: '/movies' },
  { label: 'New & Popular', value: 'new' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];
const settings = ['Manage Profiles', 'Account', 'Dashboard'];

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const theme = useTheme();
  const themeMode = useTheme();
  const dispatch = useDispatch();
  const classes = useStyles();

  const colorMode = useContext(ColorModeContext);
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
  const isMobile = useMediaQuery('(max-width:599px)');
  const isTablet = useMediaQuery('(min-width:600px) and (max-width:899px)');
  const isDesktop = useMediaQuery('(min-width:900px)');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const signout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  const token = localStorage.getItem('request_token');
  useEffect(() => {
    const logInUser = async () => {
      if (!token) return;
      let sessionId = localStorage.getItem('session_id');
      if (!sessionId) {
        sessionId = await createSessionId();
      }
      const { data: userData } = await moviesApi.get(`/account?session_id=${sessionId}`);
      dispatch(setUser(userData));
    };
    logInUser();
  }, [token]);

  return (
    <>
      <AppBar
        className={classes.wrapper}
        sx={{ backgroundColor: theme.palette.mode === 'light' ? '#FFF3EF' : 'black',
        }}
        position="fixed"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box className={classes.mobileNav}>
              {isMobile && (
              <IconButton
                color="inherit"
                edge="start"
                style={{ outline: 'none' }}
                onClick={() => setMobileOpen((prev) => !prev)}
                className={classes.menuButton}
              >
                <MenuIcon sx={{ color: theme.palette.mode === 'light' ? '#485863' : 'white' }} />
              </IconButton>
              )}
              <IconButton
                color="inherit"
                className={classes.imageLink}
                width="auto"
                sx={{ marginRight: '2vw' }}
                onClick={() => window.location.href = '/'}
              >
                <Logo width={(isMobile || isTablet) ? '70px' : '100px'} color={theme.palette.mode === 'light' ? '#485863' : '#e50914'} />
              </IconButton>
              {isTablet && (
              <>
                <Button
                  aria-label="Browse"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  key="browse"
                  onClick={() => {}}
                  onMouseEnter={handleOpenNavMenu}
                  // onMouseLeave={handleCloseNavMenu}
                  endIcon={<KeyboardArrowDownIcon />}
                  className={classes.navItem}
                  sx={{ my: 2, color: theme.palette.mode === 'light' ? '#485863' : '#fff', textTransform: 'none', fontSize: '1vw' }}
                >
                  Browse
                </Button>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  className={classes.mobileMenuContainer}
                  color="inherit"

                >
                  <Link
                    key="home"
                    color="inherit"
                    className={classes.mobileMenuLinks}
                    onClick={() => window.location.href = '/'}
                  >
                    <MenuItem
                      color="inherit"
                      onClick={handleCloseNavMenu}
                    >
                      <Typography
                        align="center"
                        sx={{ width: '100%',
                          color: theme.palette.mode === 'light' ? '#485863' : '#fff',
                          fontWeight: theme.palette.mode === 'light' ? '500' : '200',
                          '&:hover': {
                            fontWeight: theme.palette.mode === 'light' ? '200' : '500',
                          } }}
                      >Home
                      </Typography>
                    </MenuItem>
                  </Link>

                  {categories.map(({ label, value, link }) => (
                    <Link
                      key={value}
                      color="inherit"
                      to={link}
                      className={classes.mobileMenuLinks}
                    >
                      <MenuItem
                        color="inherit"
                        onClick={handleCloseNavMenu}
                      >
                        <Typography
                          align="center"
                          sx={{ width: '100%',
                            color: theme.palette.mode === 'light' ? '#485863' : '#fff',
                            fontWeight: theme.palette.mode === 'light' ? '500' : '200',
                            '&:hover': {
                              fontWeight: theme.palette.mode === 'light' ? '200' : '500',
                            } }}

                        >{label}
                        </Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
              </>
              )}

              {isDesktop && (
              <div className={classes.nav}>
                <Button
                  key="home"
                  onClick={() => { handleCloseNavMenu(); window.location.href = '/'; }}
                  className={classes.navItem}
                  sx={{
                    my: 2,
                    color: theme.palette.mode === 'light' ? '#485863' : '#fff',
                    display: 'inline',
                    textTransform: 'none',
                    fontSize: '1.2vw',
                    fontWeight: theme.palette.mode === 'light' ? '700' : '400',
                    '&:hover': {
                      fontWeight: theme.palette.mode === 'light' ? '400' : '700',
                    },
                  }}
                >
                  Home
                </Button>
                {categories.map(({ label, value, link }) => (
                  <Button
                    key={value}
                    component={Link}
                    to={link}
                    onClick={handleCloseNavMenu}
                    className={classes.navItem}
                    sx={{
                      my: 2,
                      color: theme.palette.mode === 'light' ? '#485863' : '#fff',
                      display: 'inline',
                      textTransform: 'none',
                      fontSize: '1.2vw',
                      fontWeight: theme.palette.mode === 'light' ? '700' : '400',
                      '&:hover': {
                        fontWeight: theme.palette.mode === 'light' ? '400' : '700',
                      },
                    }}
                  >
                    {label}
                  </Button>
                ))}
              </div>
              )}
            </Box>

            <Box className={classes.rightContainer}>
              <Search />
              <IconButton
                color="inherit"
                sx={{ ml: 1 }}
                onClick={colorMode.toggleColorMode}
              >
                {themeMode.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 sx={{ color: '#485863' }} />}
              </IconButton>
              {!isAuthenticated && (
                <Button
                  sx={{ color: theme.palette.mode === 'light' ? '#485863' : '#e50914', textTransform: 'none' }}
                  onClick={fetchToken}
                >
                  Sign In
                </Button>
              )}
              {isAuthenticated && !isMobile && (
                <>
                  <div className={classes.profileButton}>
                    <IconButton
                      component={Link}
                      to={`/profile/${user.id}`}
                      onMouseEnter={handleOpenUserMenu}
                      onClick={() => {}}
                      sx={{ p: 0 }}
                      color="inherit"
                    >
                      <Avatar
                        alt="avatar"
                        style={{ width: 32, height: 32 }}
                        variant="rounded"
                        src="https://occ-0-1885-2218.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdYJV5wt63AcxNaDoqDXUhqZb55oN5Dxt1m-Zdn_z5rn_hIq9m8dA8JB2xdcPmrY3yXnlVWYKPXnOrbv2QN4aEVU28dESJg.png?r=1d4"
                      />
                    </IconButton>
                  </div>
                  <Menu
                    className={classes.profileMenu}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    color="inherit"
                  >
                    <MenuItem
                      component={Link}
                      to={`/profile/${user.id}`}
                      key="list"
                      onClick={handleCloseUserMenu}
                    >
                      <Typography textAlign="center">My List</Typography>
                    </MenuItem>
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                    <MenuItem key="sign out" onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" onClick={signout}>Sign out of Neflix</Typography>
                    </MenuItem>
                  </Menu>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <div>
        <nav className={classes.drawer}>
          {isMobile && (
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
              onClose={() => setMobileOpen((prev) => !prev)}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
