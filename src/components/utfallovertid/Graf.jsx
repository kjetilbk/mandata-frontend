import React from 'react';
import { LineTooltip} from 'react-d3-tooltip';
import Tooltip from './Tooltip.jsx'

const Graf = ({data, dataDescription, width, updateDateLabel}) => {
  const chartWidth = width < 1000 ? width : 1000;
  const leftMargin = width < 600 ? 0 : 30;
  return (
      <LineTooltip
        data={data}
        chartSeries={dataDescription}
        xDomain={[new Date("2017-05-01"), new Date("2017-09-11")]}
        x={d => new Date(d.date)}
        xScale='time'
        width={chartWidth}
        height={400}
        xLabel="Dato"
        y={d => d}
        yDomain={[0,100]}
        margins={{left: leftMargin, top:20, right: 20, bottom: 50}}
        yLabel="% sjanse"
        yLabelPosition='left'
      >
        <Tooltip updateDateLabel={updateDateLabel} />
      </LineTooltip>
  )
}

export default Graf;
