import React, { useRef } from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';

import useStyles from './styles';
import useAlan from './Alan';

import { Actor, Navbar, Home, Movies, MovieInformation, Profile } from '.';

const App = () => {
  const classes = useStyles();
  const alanBtnContainer = useRef();

  useAlan();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path={['/', '/approved']}>
            <Home />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>

        </Switch>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
};

export default App;
