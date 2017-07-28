import React from 'react';

const Legend = ({dataDescription}) => {
  const legendElements = dataDescription.map(datapoint => <div key={datapoint.name.toLowerCase()} className="lelem"><div style={{backgroundColor: datapoint.color}} className="legend-color"></div><p className="legend-name">{datapoint.name}</p></div>)
  return (
    <div className="graf-legend">
      <div className="legend-elems">
        {legendElements}
      </div>
    </div>
  )
}

export default Legend;
