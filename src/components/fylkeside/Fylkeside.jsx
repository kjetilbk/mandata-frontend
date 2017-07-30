import React from 'react';
import fylker from '../../tools/fylker';
import '../../css/Fylkesside.css';
import Kandidatliste from './Kandidatliste.jsx';
import partier from '../../tools/partier';

const Fylkeside = ({match}) => {
  const detteFylket = fylker.filter(fylke => match.params.fylke === fylke.id)[0];
  return (
    <div>
      <h1>Hvem kommer inn fra {detteFylket.navn}?</h1>
      <div className="underoverskrift">
      <h3>Partienes kandidater og deres sjanser</h3>
      </div>
      <div className="row">
        <Kandidatliste parti={partier.ap} kandidater={detteFylket.kandidater.filter(kandidat => kandidat.Parti === partier.ap.navn)} />
        <Kandidatliste parti={partier.sp} kandidater={detteFylket.kandidater.filter(kandidat => kandidat.Parti === partier.sp.navn)} />
        <Kandidatliste parti={partier.h} kandidater={detteFylket.kandidater.filter(kandidat => kandidat.Parti === partier.h.navn)} />
      </div>
      <div className="row">
        <Kandidatliste parti={partier.sv} kandidater={detteFylket.kandidater.filter(kandidat => kandidat.Parti === partier.sv.navn)} />
        <Kandidatliste parti={partier.krf} kandidater={detteFylket.kandidater.filter(kandidat => kandidat.Parti === partier.krf.navn)} />
        <Kandidatliste parti={partier.frp} kandidater={detteFylket.kandidater.filter(kandidat => kandidat.Parti === partier.frp.navn)} />
      </div>
      <div className="row">
        <Kandidatliste parti={partier.r} kandidater={detteFylket.kandidater.filter(kandidat => kandidat.Parti === partier.r.navn)} />
        <Kandidatliste parti={partier.mdg} kandidater={detteFylket.kandidater.filter(kandidat => kandidat.Parti === partier.mdg.navn)} />
        <Kandidatliste parti={partier.v} kandidater={detteFylket.kandidater.filter(kandidat => kandidat.Parti === partier.v.navn)} />
      </div>
    </div>
  )
}

export default Fylkeside;
