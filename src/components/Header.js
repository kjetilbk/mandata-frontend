import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {toggleFylkesChooser} from '../actions/frontPageActions';
import Fylkeslenker from './Fylkeslenker.jsx';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <div className="app-logo">
            <h1>flertall</h1>
          </div>
          <div className="om-siden">
            <Link to="om" className="om-tekst">Metode</Link>
          </div>
          <div className="fylkeslenker">
            <a onClick={() => {this.props.dispatch(toggleFylkesChooser())}}
            className={"fylkeslenketekst "+(this.props.showFylkesChooser ? "active" : "")}>
              <i className="Chevron"></i>
              Fylkesvalgene
            </a>
          </div>
        </div>
        <hr/>
        {this.props.showFylkesChooser ? <Fylkeslenker /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showFylkesChooser: state.showFylkesChooser
})

export default connect(mapStateToProps)(Header);
