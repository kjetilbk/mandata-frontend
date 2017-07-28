import React from 'react';
import {formatProbability} from '../../tools/helpers';

const Parti = ({parti, chances, className}) => {
  return (
    <div className={"sperregrense " + (className ? className : "")}>
      <img className="sperregrense-parti" src={parti.logo} alt={parti.forkortelse} />
      <p className="sperregrense-chance">{formatProbability(chances[parti.forkortelse.toLowerCase()], 1)+"%"}</p>
    </div>
  )
}

export default Parti;
