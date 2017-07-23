import React from 'react';
import Parti from './Parti';

const Koalisjon = ({navn, partier, farge, posisjon, support}) => {
  const partiElementer = partier.map(parti => <Parti navn={parti.navn} forkortelse={parti.forkortelse}/>);
  return (
    <div style={{float: posisjon, display: 'inline-block'}}>
      <div style={{float: posisjon}}>
        <h2 className="coalition-name">{navn}</h2>
        <h1 style={{color: farge, float: (posisjon == 'left' ? 'right' : 'left')}} className="coalition-support">{support*100}%</h1>
      </div>
      <div style={{clear: posisjon}}>
        {partiElementer}
      </div>
    </div>
  );
}

export default Koalisjon;
