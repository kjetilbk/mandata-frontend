import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from '../configureStore.js';

import '../css/App.css';
import Header from './Header';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <div className="App">
          <Header />
          <Content />
        </div>
      </Provider>
    );
  }
}

export default App;
