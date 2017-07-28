import React from 'react';
import {formatProbability} from '../../tools/helpers'

const Legend = ({dataDescription, support}) => {
  const legendElements = dataDescription.map(datapoint => <div key={datapoint.name.toLowerCase()} className="lelem"><div style={{backgroundColor: datapoint.color}} className="legend-color"></div><p className="legend-name">{datapoint.name}</p><p>{(support ? formatProbability(support[datapoint.field]/100)+"%" : "")}</p></div>)
  return (
    <div className="graf-legend">
      <div className="legend-elems">
        {legendElements}
      </div>
    </div>
  )
}

export default Legend;
