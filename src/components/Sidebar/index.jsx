import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';

import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { useGetGenresQuery } from '../../services/TMDB';
import useStyles from './styles';

const settings = ['Account', 'Sign out of Neflix'];
const demoGenres = [
  { label: 'Comedies', value: 'comedy' },
  { label: 'Action', value: 'action' },
  { label: 'Thriller', value: 'thriller' },
  { label: 'Animation', value: 'animation' },
];
const Sidebar = ({ setMobileOpen }) => {
  const { genreIdOrCategoryName  } = useSelector((state) => state.currentGenreOrCategory);
  const theme = useTheme();
  const { data, error, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <List>
        <ListItem className={classes.profile} sx={{ height: 'auto' }}>
          <ListItemIcon className={classes.profileIcon}>
            <img
              className={classes.profileIcon}
              src="https://occ-0-1885-2218.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdYJV5wt63AcxNaDoqDXUhqZb55oN5Dxt1m-Zdn_z5rn_hIq9m8dA8JB2xdcPmrY3yXnlVWYKPXnOrbv2QN4aEVU28dESJg.png?r=1d4"
              alt="profile"
            />
          </ListItemIcon>
          <ListItemText>
            chloezhou
          </ListItemText>
        </ListItem>
        {settings.map((setting) => (
          <Link key={setting} to="/" className={classes.links}>
            <ListItem onClick={() => {}} button>
              <ListItemText primary={setting} />
            </ListItem>
          </Link>
        ))}
      </List>

      <Divider sx={{ borderColor: '#333' }} />
      <List>
        <Link key="home" to="/" className={classes.activeLinks}>
          <ListItem>
            <ListItemText>
              Home
            </ListItemText>
          </ListItem>
        </Link>

        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : data.genres.map(({ name, id }) => (
          <Link key={name} to="/movies" activeClassName={classes.activeLinks} className={classes.links}>
            <ListItem onClick={() => dispatch(selectGenreOrCategory(id))} button>
              <ListItemText primary={name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
