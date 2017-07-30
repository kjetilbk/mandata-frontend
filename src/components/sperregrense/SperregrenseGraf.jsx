import React from 'react';
import {isEmpty} from '../../tools/helpers';
import Graf from '../graf/Graf.jsx';
import DateLabel from '../graf/DateLabel.jsx';
import Legend from '../graf/Legend.jsx';

const SperregrenseGraf = ({historicChances, headline, width, updateDateLabel, dateLabel}) => {
  const drawData = isEmpty(historicChances) ? [] : historicChances.map((chances, index) => ({
    date: chances.date,
    r: chances.data.r*100,
    sv: chances.data.sv*100,
    krf: chances.data.krf*100,
    mdg: chances.data.mdg*100,
    v: chances.data.v*100,
    index: index
  }));
  const dataDescription = [
    {
      field: 'r',
      name: 'Rødt',
      color: '#e73445'
    },
    {
      field: 'sv',
      name: 'SV',
      color: 'mediumvioletred'
    },
    {
      field: 'krf',
      name: 'Krf',
      color: 'rgb(254, 205, 15)'
    },
    {
      field: 'mdg',
      name: 'MDG',
      color: '#6a9325'
    },
    {
      field: 'v',
      name: 'Venstre',
      color: '#033'
    }
  ];
  return (
    <div className="modul graph">
    {headline}
    <Legend dataDescription={dataDescription} chances={drawData.filter(datapoint => new Date(datapoint.date).getTime() === new Date(dateLabel).getTime())[0]} />
    {isEmpty(historicChances) ? null : <Graf data={drawData} dataDescription={dataDescription} width={width} updateDateLabel={updateDateLabel} />}
    <DateLabel dateLabel={dateLabel} width={width} />
    </div>
  )
}

export default SperregrenseGraf;
