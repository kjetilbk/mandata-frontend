import React from 'react';
import partier from '../../tools/partier';
import Parti from './Parti.jsx';
import '../../css/Sperregrense.css'

const Sperregrensedrama = ({headline, chances}) => {
  return (
    <div className="modul">
      <h3>{headline}</h3>
      <div className="sperrewrapper">
        <div className="sperregrenser">
          <Parti parti={partier.r} chances={chances} />
          <Parti parti={partier.sv} chances={chances} />
          <Parti parti={partier.krf} chances={chances} />
          <Parti parti={partier.mdg} chances={chances} />
          <Parti parti={partier.v} chances={chances} className="last-parti" />
        </div>
      </div>
    </div>
  )
}

export default Sperregrensedrama;
