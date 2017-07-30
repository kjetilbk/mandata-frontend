import React from 'react';
import Kandidat from './Kandidat.jsx';

const Kandidatliste = ({parti, kandidater, sjanser}) => {
  const kandidatliste = kandidater.map(kandidat => <Kandidat nummer={kandidat.Kandidatnr} navn={kandidat.Navn} sjanse={43.2} />);
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
