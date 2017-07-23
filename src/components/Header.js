import React, { Component } from 'react';
import logo from '../img/mandata.png';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <img className="App-logo" src={logo} />
        </div>
        <hr/>
      </div>
    );
  }
}

export default Header;
