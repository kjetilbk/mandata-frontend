import React from 'react';
import Graf from './Graf.jsx';
import { isEmpty } from '../../tools/helpers';
import '../../css/UtfallOverTid.css'
import DateLabel from './DateLabel.jsx';

const UtfallOverTid = ({headline, historicSupport, width, updateMousePosition, mousePosition, updateDateLabel, dateLabel}) => {
  const drawData = isEmpty(historicSupport) ? [] : historicSupport.map((support, index) => ({
    date: support.date,
    apsp: support.data.apsp*100,
    nydalen: support.data.nydalen*100,
    rg: support.data.rg*100,
    trafikklys: support.data.trafikklys*100,
    index: index
  }));
  const dataDescription = [
    {
      field: 'nydalen',
      name: 'Nydalen',
      color: 'blue'
    },
    {
      field: 'rg',
      name: 'Rødgrønn',
      color: 'red'
    },
    {
      field: 'apsp',
      name: 'Ap / Sp',
      color: 'green'
    },
    {
      field: 'trafikklys',
      name: 'Trafikklys',
      color: 'yellow'
    }
  ];

  return (
    <div className="modul graph" onMouseMove={updateMousePosition}>
      <h3>{headline}</h3>
      {isEmpty(historicSupport) ? null : <Graf data={drawData} dataDescription={dataDescription} width={width} updateDateLabel={updateDateLabel} />}
      <DateLabel dateLabel={dateLabel} xPosition={mousePosition.x} width={width} />
    </div>
  )
}

export default UtfallOverTid;
