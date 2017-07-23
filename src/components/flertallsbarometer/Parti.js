import React from 'react';
import logoer from '../../tools/partilogoer';


const Parti = ({navn, forkortelse}) => {
  return (
    <div className="parti">
      <img className="partilogo" src={logoer[forkortelse]} alt={forkortelse + ' logo'} />
      <p className="partinavn">{navn}</p>
    </div>
  );
}

export default Parti;
