import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import fylker from '../../tools/fylker';
import '../../css/Fylkesside.css';
import Kandidatliste from './Kandidatliste.jsx';
import partier from '../../tools/partier';
import {removeSpacesAndDashesFromString} from '../../tools/helpers';
import { logPageView } from '../../tools/googleanalytics';
import {fetchMandatChances} from '../../actions/frontPageActions';

class Fylkeside extends Component {
  componentDidMount() {
    logPageView(this.props.location.pathname);
    this.props.dispatch(fetchMandatChances(this.props.fylke.navn.toLowerCase()));
  }
  componentDidUpdate(prevProps){
    if (prevProps.fylke.navn !== this.props.fylke.navn) {
      logPageView(this.props.location.pathname);
      this.props.dispatch(fetchMandatChances(this.props.fylke.navn.toLowerCase()));
    }
  }
  filterKandidater(kandidater, parti) {
    return kandidater.filter(kandidat => kandidat.Parti === parti.navn)
           .sort((a, b) => a.Kandidatnr - b.Kandidatnr);
  }
  render(){
    if(this.props["fylke"] === undefined){
      return null;
    }
    const sjanser = (removeSpacesAndDashesFromString(this.props.fylke.id) in this.props.mandatChances ? this.props.mandatChances[removeSpacesAndDashesFromString(this.props.fylke.id)] : {});
    return (
      <div>
        <div className="tilbakeknapp"><Link to="/" className="fylkelenke">← Tilbake til hovedsiden</Link></div>
        <h1>Hvem kommer inn fra {this.props.fylke.navn}?</h1>
        <div className="underoverskrift">
        <h3>Partienes kandidater og deres sjanser</h3>
        </div>
        <div className="row">
          <Kandidatliste parti={partier.ap} kandidater={this.filterKandidater(this.props.fylke.kandidater, partier.ap)} sjanser={(partier.ap.forkortelse.toLowerCase() in sjanser ? sjanser[partier.ap.forkortelse.toLowerCase()] : {})} />
          <Kandidatliste parti={partier.sp} kandidater={this.filterKandidater(this.props.fylke.kandidater, partier.sp)} sjanser={(partier.sp.forkortelse.toLowerCase() in sjanser ? sjanser[partier.sp.forkortelse.toLowerCase()] : {})} />
          <Kandidatliste parti={partier.h} kandidater={this.filterKandidater(this.props.fylke.kandidater, partier.h)} sjanser={(partier.h.forkortelse.toLowerCase() in sjanser ? sjanser[partier.h.forkortelse.toLowerCase()] : {})} />
        </div>
        <div className="row">
          <Kandidatliste parti={partier.sv} kandidater={this.filterKandidater(this.props.fylke.kandidater, partier.sv)} sjanser={(partier.sv.forkortelse.toLowerCase() in sjanser ? sjanser[partier.sv.forkortelse.toLowerCase()] : {})} />
          <Kandidatliste parti={partier.krf} kandidater={this.filterKandidater(this.props.fylke.kandidater, partier.krf)} sjanser={(partier.krf.forkortelse.toLowerCase() in sjanser ? sjanser[partier.krf.forkortelse.toLowerCase()] : {})} />
          <Kandidatliste parti={partier.frp} kandidater={this.filterKandidater(this.props.fylke.kandidater, partier.frp)} sjanser={(partier.frp.forkortelse.toLowerCase() in sjanser ? sjanser[partier.frp.forkortelse.toLowerCase()] : {})} />
        </div>
        <div className="row">
          <Kandidatliste parti={partier.r} kandidater={this.filterKandidater(this.props.fylke.kandidater, partier.r)} sjanser={(partier.r.forkortelse.toLowerCase() in sjanser ? sjanser[partier.r.forkortelse.toLowerCase()] : {})} />
          <Kandidatliste parti={partier.mdg} kandidater={this.filterKandidater(this.props.fylke.kandidater, partier.mdg)} sjanser={(partier.mdg.forkortelse.toLowerCase() in sjanser ? sjanser[partier.mdg.forkortelse.toLowerCase()] : {})} />
          <Kandidatliste parti={partier.v} kandidater={this.filterKandidater(this.props.fylke.kandidater, partier.v)} sjanser={(partier.v.forkortelse.toLowerCase() in sjanser ? sjanser[partier.v.forkortelse.toLowerCase()] : {})} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    fylke: fylker.filter(fylke => props.match.params.fylke === fylke.id)[0],
    mandatChances: state.mandatChances
  }
};

export default withRouter(connect(mapStateToProps)(Fylkeside));
