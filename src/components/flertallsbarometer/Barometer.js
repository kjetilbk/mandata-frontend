import React from 'react';

const Barometer = ({leftSupport}) => {
  const leftWidth = leftSupport*100 + "%";
  const rightWidth = (1 - leftSupport)*100 + "%";
  return (
    <div className="barometeret">
      <div className="barometerhalf left-color" style={{width: leftWidth}}></div>
      <div className="barometerhalf right-color" style={{width: rightWidth}}></div>
    </div>
  );
}

export default Barometer;
