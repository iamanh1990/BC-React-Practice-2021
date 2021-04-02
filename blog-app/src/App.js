import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import UserPage from './user/pages/user.page.js';
import NewPlacesPage from './places/pages/NewPlace.page';
import MainNavigation from './shared/Navigation/main-navigation.component';
import UserPlaces from './places/pages/UserPlaces';
import './App.css';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path='/' component={UserPage} />
          <Route exact path='/:userId/places' component={UserPlaces} />
          <Route exact path='/places/new' component={NewPlacesPage} />
          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
