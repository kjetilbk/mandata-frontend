import React from 'react';

const Parti = ({navn, forkortelse, logo}) => {
  return (
    <div className="parti">
      <img className="partilogo" src={logo} alt={forkortelse.toLowerCase() + ' logo'} />
      <p className="partinavn">{navn}</p>
    </div>
  );
}

export default Parti;
