import React from 'react';
import {LineChart} from 'react-d3-basic';

const Graf = ({data, dataDescription, width}) => {
  const chartWidth = width < 1000 ? width : 1000;
  return (
    <LineChart
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
      margins={{left: 30, top:50, right: 20, bottom: 50}}
      yLabel="% sjanse"
      yLabelPosition='left'
    />
  )
}

export default Graf;
