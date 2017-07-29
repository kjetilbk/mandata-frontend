import React from 'react';
import {formatProbability} from '../../tools/helpers'
import LegendElement from './LegendElement.jsx';

const Legend = ({dataDescription, chances}) => {
  const legendElements = dataDescription.map(datapoint => <LegendElement name={datapoint.name} color={datapoint.color} chance={(chances ? formatProbability(chances[datapoint.field]/100)+"%" : "")} />)
  return (
    <div className="graf-legend">
      <div className="legend-elems">
        {legendElements}
      </div>
    </div>
  )
}

export default Legend;
