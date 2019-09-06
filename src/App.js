import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
// import Header from './Header/Header';
import AdoptionPage from './AdoptionPage/AdoptionPage';
import SuccessPage from './SuccessPage/SuccessPage';
import QueuePage from './QueuePage/QueuePage';
import './App.css';

export default class App extends React.Component {
  render(){
  return (
    <div className="App">
      {/* <Header /> */}
      <main className="MainSection">
        <Switch>
          <Route
            exact path={'/'}
            component={LandingPage}
          />
          <Route
          path={'/queue'}
          component={QueuePage}
          />
          <Route
            path={'/adoption'}
            component={AdoptionPage}
          />
          <Route
            path={'/success'}
            component={SuccessPage}
          />
        </Switch>
      </main>
    </div>
  );
  }
}
