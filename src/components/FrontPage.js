import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Flertallsbarometer from './flertallsbarometer/Flertallsbarometer';
import Koalisjonsalternativer from './koalisjonsalternativer/Koalisjonsalternativer.jsx';
import UtfallOverTid from './utfallovertid/UtfallOverTid.jsx'
import Sperregrensedrama from './sperregrense/Sperregrensedrama.jsx';
import SperregrenseGraf from './sperregrense/SperregrenseGraf.jsx';
import Headline from './Headline.jsx';
import {
  fetchAlternativeSupport,
  fetchHistoricSupport,
  fetchHistoricChances,
  updateWindowHeightAndWidth,
  updateCoalitionDateLabel,
  updateSperregrenseDateLabel,
  fetchSperregrenseChances
       } from '../actions/frontPageActions';

class FrontPage extends Component {
  constructor(props){
    super(props);
    props.dispatch(fetchAlternativeSupport());
    props.dispatch(fetchHistoricSupport());
    props.dispatch(fetchSperregrenseChances());
    props.dispatch(fetchHistoricChances());
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
        <Flertallsbarometer headline={<Headline text="Sjanse for flertall i Stortinget" />} nydalenSupport={(this.props.alternativeSupport.hasOwnProperty("nydalen")) ? this.props.alternativeSupport.nydalen : -1} />
        <Koalisjonsalternativer headline={<Headline text="Mulige koalisjoner – og deres sjanser for flertall" />} alternativeSupport={this.props.alternativeSupport} />
        <UtfallOverTid headline={<Headline text="Hvordan sjansene har utviklet seg over tid" />}
                       historicSupport={this.props.historicSupport}
                       width={this.props.windowDimensions.width}
                       updateDateLabel={dateLabel => this.props.dispatch(updateCoalitionDateLabel(dateLabel))}
                       dateLabel={this.props.dateLabel.coalition} />
        <Sperregrensedrama headline={<Headline text="Sjanse for å komme over sperregrensa" />} chances={this.props.sperregrenseChances} />
        <SperregrenseGraf headline={<Headline text="Hvordan sperregrensesjansene har utviklet seg over tid" />}
                          historicChances={this.props.historicChances}
                          width={this.props.windowDimensions.width}
                          updateDateLabel={dateLabel => this.props.dispatch(updateSperregrenseDateLabel(dateLabel))}
                          dateLabel={this.props.dateLabel.sperregrense} />
      </div>
    );
  }
}

FrontPage.propTypes = {
  alternativeSupport: PropTypes.object
}

const mapStateToProps = state => ({
  alternativeSupport: state.alternativeSupport,
  historicSupport: state.historicSupport,
  sperregrenseChances: state.sperregrenseChances,
  historicChances: state.historicChances,
  windowDimensions: state.windowDimensions,
  dateLabel: state.dateLabel
})

export default connect(mapStateToProps)(FrontPage);
