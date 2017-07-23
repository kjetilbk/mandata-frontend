import React, { Component } from 'react';
import Flertallsbarometer from './flertallsbarometer/Flertallsbarometer';

class Content extends Component {
  render() {
    return (
      <div>
        <h1>
          Hvem vinner valget?
        </h1>
        <Flertallsbarometer />
      </div>
    );
  }
}

export default Content;
