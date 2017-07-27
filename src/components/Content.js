import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Flertallsbarometer from './flertallsbarometer/Flertallsbarometer';
import Koalisjonsalternativer from './koalisjonsalternativer/Koalisjonsalternativer.jsx';
import {
  fetchAlternativeSupport
       } from '../actions/frontPageActions';

class Content extends Component {
  constructor(props){
    super(props);
    props.dispatch(fetchAlternativeSupport())
  }
  render() {
    return (
      <div className="body">
        <h1>Hvem vinner valget?</h1>
        <Flertallsbarometer headline="Sjanse for flertall i Stortinget" nydalenSupport={(this.props.alternativeSupport.hasOwnProperty("nydalen")) ? this.props.alternativeSupport.nydalen : -1} />
        <Koalisjonsalternativer headline="Mulige koalisjoner – og deres sjanser for flertall" alternativeSupport={this.props.alternativeSupport} />
      </div>
    );
  }
}

Content.propTypes = {
  alternativeSupport: PropTypes.object
}

const mapStateToProps = state => ({
  nydalenSupport: state.nydalenSupport,
  alternativeSupport: state.alternativeSupport
})

export default connect(mapStateToProps)(Content);
