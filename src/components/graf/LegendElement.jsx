import React from 'react';

const LegendElement = ({name, color, chance}) => {
  return (
    <div key={name.toLowerCase()} className="lelem">
      <div style={{backgroundColor: color}} className="legend-color"></div>
      <p className="legend-name">
        {name}
      </p>
      <p className="legend-support">
        {chance}
      </p>
    </div>
  )
}

export default LegendElement;
