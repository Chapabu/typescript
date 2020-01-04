import { h } from 'preact';
import { Route, Router } from 'preact-router';

import Home from '../routes/home';
import Profile from '../routes/profile';
import Header from './header';

if ((module as NodeModule).hot) {
  require('preact/debug'); // eslint-disable-line global-require
}

const App: preact.FunctionalComponent = () => {
  return (
    <div id="app">
      <Header />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/profile/" component={Profile} user="me" />
        <Route path="/profile/:user" component={Profile} />
      </Router>
    </div>
  );
};

export default App;
