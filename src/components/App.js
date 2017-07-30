import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from '../configureStore.js';

import '../css/App.css';
import Header from './Header';
import FrontPage from './FrontPage';
import Sidebar from './sidebar/Sidebar.jsx';
import Fylkeside from './fylkeside/Fylkeside.jsx';

const App = () => {
  return (
    <Provider store={configureStore()}>
      <Router>
      <div className="App">
        <Header />
        <div className="row">
          <Route path="/" component={Sidebar} />
          <div className="col-sm-10 col-xs-12">
            <Route exact path="/" component={FrontPage} />
            <Route path="/:fylke" component={Fylkeside} />
          </div>
        </div>
      </div>
      </Router>
    </Provider>
  );
}

export default App;
