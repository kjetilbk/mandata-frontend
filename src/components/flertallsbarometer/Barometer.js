import React from 'react';

const Barometer = ({leftSupport}) => {
  const leftWidth = leftSupport*100 + "%";
  const rightWidth = (1 - leftSupport)*100 + "%";
  return (
    <div>
      <div className="barometerhalf" style={{width: leftWidth, backgroundColor: 'red'}}></div>
      <div className="barometerhalf" style={{width: rightWidth, backgroundColor: 'blue'}}></div>
    </div>
  );
}

export default Barometer;
