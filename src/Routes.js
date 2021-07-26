import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Main from './pages/Main/Main';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  );
}

export default Routes;
