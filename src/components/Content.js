import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Flertallsbarometer from './flertallsbarometer/Flertallsbarometer';
import Koalisjonsalternativer from './koalisjonsalternativer/Koalisjonsalternativer.jsx';
import { fetchNydalenSupport } from '../actions/frontPageActions';

class Content extends Component {
  constructor(props){
    super(props);
    props.dispatch(fetchNydalenSupport())
  }
  render() {
    return (
      <div className="body">
        <h1>Hvem vinner valget?</h1>
        <Flertallsbarometer headline="Sjanse for flertall i Stortinget" nydalenSupport={this.props.nydalenSupport} />
        <Koalisjonsalternativer headline="Mulige koalisjoner – og deres sjanser" />
      </div>
    );
  }
}

Content.propTypes = {
  nydalenSupport: PropTypes.number
}

const mapStateToProps = state => ({
  nydalenSupport: state.nydalenSupport
})

export default connect(mapStateToProps)(Content);
