import React from 'react';
import Graf from '../graf/Graf.jsx';
import { isEmpty } from '../../tools/helpers';
import '../../css/UtfallOverTid.css'
import DateLabel from '../graf/DateLabel.jsx';
import Legend from '../graf/Legend.jsx'

const UtfallOverTid = ({headline, historicSupport, width, mousePosition, updateDateLabel, dateLabel}) => {
  const drawData = isEmpty(historicSupport) ? [] : historicSupport.map((support, index) => ({
    date: support.date,
    apsp: support.data.apsp*100,
    nydalen: support.data.nydalen*100,
    rg: support.data.rg*100,
    trafikklys: support.data.trafikklys*100,
    sentrum: support.data.sentrum*100,
    sentrumh: support.data.sentrumh*100,
    hfrp: support.data.hfrp*100,
    index: index
  }));
  const dataDescription = [
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
      color: 'rgb(254, 205, 15)'
    },
    {
      field: 'sentrum',
      name: 'Sentrum',
      color: 'greenyellow'
    },
    {
      field: 'sentrumh',
      name: 'Sentrum-høyre',
      color: 'lightblue'
    },
    {
      field: 'nydalen',
      name: 'Nydalen',
      color: '#004F8B'
    },
    {
      field: 'hfrp',
      name: 'Blåblå',
      color: 'midnightblue'
    }
  ];

  return (
    <div className="modul graph">
      <h3>{headline}</h3>
      <Legend dataDescription={dataDescription} chances={drawData.filter(datapoint => new Date(datapoint.date).getTime() === new Date(dateLabel).getTime())[0]} />
      {isEmpty(historicSupport) ? null : <Graf data={drawData} dataDescription={dataDescription} width={width} updateDateLabel={updateDateLabel} />}
      <DateLabel dateLabel={dateLabel} width={width} />
    </div>
  )
}

export default UtfallOverTid;
