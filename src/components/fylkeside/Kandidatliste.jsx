import React from 'react';
import Kandidat from './Kandidat.jsx';
import {isEmpty} from '../../tools/helpers';

const convertExactChancesToMinChances = sjanser => {
  let toReturn = {};
  for (var key in sjanser) {
    toReturn[key] = sjanser[key];
    for(var i = 0; i < key; i++) {
      toReturn[i] = (i in sjanser ? toReturn[i] + sjanser[key] : 0);
    }
  }
  return toReturn;
}

const Kandidatliste = ({parti, kandidater, sjanser}) => {
  const kandidatSjanser = convertExactChancesToMinChances(sjanser);
  const kandidatliste = kandidater.map(kandidat => <Kandidat key={kandidat.Navn} nummer={kandidat.Kandidatnr} navn={kandidat.Navn} sjanse={kandidat.Kandidatnr in kandidatSjanser ? kandidatSjanser[kandidat.Kandidatnr] : 0} />);
  return (
    <div className="col-sm-4 col-xs-12 kandidatbokser">
      <div className="kandidatliste">
        <img className="fylkepartilogo" src={parti.logo} alt="partilogo" />
        <h3 className="fylkespartinavn">{parti.navn}</h3>
        <div className="tekstliste">
          {kandidatliste}
        </div>
      </div>
    </div>
  )
}

export default Kandidatliste;
