import React, { Component } from 'react';
import {logPageView} from '../tools/googleanalytics';

class Metode extends Component {
  componentDidMount(){
    logPageView(this.props.location.pathname);
  }
  render(){
    return (
      <div>Kommer!</div>
    )
  }
}

export default Metode;
