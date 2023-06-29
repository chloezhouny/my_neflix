import React, { useState } from 'react';
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
  InputBase,
  Tooltip,
  Avatar,
  Drawer,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import Logo from './Logo';

import { Sidebar } from '..';
import useStyles from './styles';

const categories = [
  { label: 'Home', value: 'home' },
  { label: 'Movies', value: 'movies' },
  { label: 'New & Popular', value: 'new' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];
const settings = ['Manage Profiles', 'Account', 'Dashboard', 'Sign out of Neflix'];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:599px)');
  const isTablet = useMediaQuery('(min-width:600px) and (max-width:899px)');
  const isDesktop = useMediaQuery('(min-width:900px)');
  const themeMode = useTheme();
  const isAuthenticated = true;

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
                <MenuIcon />
              </IconButton>
              )}
              <IconButton
                component={Link}
                to="/"
                color="inherit"
                className={classes.imageLink}
                width="auto"
              >
                <Logo width="80px" color={theme.palette.mode === 'light' ? '#485863' : '#e50914'} />
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
                  // onMouseOut={handleCloseNavMenu}
                  endIcon={<KeyboardArrowDownIcon />}
                  className={classes.navItem}
                  sx={{ my: 2, color: theme.palette.mode === 'light' ? '#485863' : '#fff', textTransform: 'none' }}
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
                  {categories.map(({ label, value }) => (
                    <Link
                      key={value}
                      to="/"
                      color="inherit"
                      className={classes.mobileMenuLinks}
                    >
                      <MenuItem
                        color="inherit"
                        onClick={handleCloseNavMenu}
                      >
                        <Typography
                          align="center"
                          sx={{ width: '100%', color: theme.palette.mode === 'light' ? '#485863' : '#fff',
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
                {categories.map(({ label, value }) => (
                  <Button
                    key={value}
                    onClick={handleCloseNavMenu}
                    className={classes.navItem}
                    component={Link}
                    to="/"
                    sx={{ my: 2, color: theme.palette.mode === 'light' ? '#485863' : '#fff', display: 'inline', textTransform: 'none' }}
                  >
                    {label}
                  </Button>
                ))}
              </div>
              )}
            </Box>

            <Box className={classes.rightContainer}>
              <div className={classes.search}>
                {!isMobile && (
                <div className={classes.searchIconWrapper}>
                  <SearchIcon />
                </div>
                )}

                <InputBase placeholder="Search" className={classes.searchInput} />
              </div>
              <IconButton
                color="inherit"
                sx={{ ml: 1 }}
                onClick={() => {}}
              >
                {themeMode.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
              {!isAuthenticated && (
                <Button color={theme.palette.mode === 'light' ? '#485863' : '#e50914'} onClick={() => {}}>
                  Sign In
                </Button>
              )}
              {isAuthenticated && !isMobile && (
                <>
                  <Tooltip title="Open settings" className={classes.profileButton}>
                    <IconButton
                      component={Link}
                      to="/profile/:id"
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
                  </Tooltip>
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
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
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
