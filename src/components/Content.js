import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Flertallsbarometer from './flertallsbarometer/Flertallsbarometer';
import Koalisjonsalternativer from './koalisjonsalternativer/Koalisjonsalternativer.jsx';
import UtfallOverTid from './utfallovertid/UtfallOverTid.jsx'
import {
  fetchAlternativeSupport,
  fetchHistoricSupport,
  updateWindowHeightAndWidth
       } from '../actions/frontPageActions';

class Content extends Component {
  constructor(props){
    super(props);
    props.dispatch(fetchAlternativeSupport());
    props.dispatch(fetchHistoricSupport());
  }
  componentDidMount() {
    this.updateWindowDimensions(this.props.dispatch);
    window.addEventListener('resize', () => {this.updateWindowDimensions(this.props.dispatch)});
  }
  componentWillUnmount() {
    window.removeEventListener('resize', () => {this.updateWindowDimensions(this.props.dispatch)});
  }
  updateWindowDimensions(dispatch) {
    dispatch(updateWindowHeightAndWidth(window.innerWidth, window.innerHeight));
  }
  render() {
    return (
      <div className="body">
        <h1>Hvem vinner valget?</h1>
        <Flertallsbarometer headline="Sjanse for flertall i Stortinget" nydalenSupport={(this.props.alternativeSupport.hasOwnProperty("nydalen")) ? this.props.alternativeSupport.nydalen : -1} />
        <Koalisjonsalternativer headline="Mulige koalisjoner – og deres sjanser for flertall" alternativeSupport={this.props.alternativeSupport} />
        <UtfallOverTid headline="Hvordan sjansene har utviklet seg over tid" historicSupport={this.props.historicSupport} width={this.props.windowDimensions.width} />
      </div>
    );
  }
}

Content.propTypes = {
  alternativeSupport: PropTypes.object
}

const mapStateToProps = state => ({
  alternativeSupport: state.alternativeSupport,
  historicSupport: state.historicSupport,
  windowDimensions: state.windowDimensions
})

export default connect(mapStateToProps)(Content);
