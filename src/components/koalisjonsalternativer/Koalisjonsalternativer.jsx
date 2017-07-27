import React from 'react';
import '../../css/Koalisjonsalternativer.css'
import partier from '../../tools/partier';

import Alternativ from './Alternativ.jsx'

const Koalisjonsalternativer = ({headline}) => {
  console.log(headline);
  return (
    <div className="modul">
      <h3>{headline}</h3>
      <div className="row">
        <Alternativ support={89.32} partners={[partier.ap, partier.sp, partier.sv]} name="Rødgrønne" />
        <Alternativ support={25.33} partners={[partier.ap, partier.sp]} />
        <Alternativ support={92.92} partners={[partier.ap, partier.sp, partier.krf]} name="Trafikklys" className="last-alt" />
      </div>
    </div>
  );
}

export default Koalisjonsalternativer;
