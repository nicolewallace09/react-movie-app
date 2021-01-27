import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './pages/Homepage';
import MoviePage from './pages/MoviePage';

const App = () => {
	return (
    <Router>
    <>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/moviepage' component={MoviePage} />
      </Switch>
    </>
  </Router>
	);
};

export default App;
