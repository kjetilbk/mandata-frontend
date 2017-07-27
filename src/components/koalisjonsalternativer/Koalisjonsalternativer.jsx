import React from 'react';
import '../../css/Koalisjonsalternativer.css'
import partier from '../../tools/partier';
import formatProbability from '../../tools/helpers';

import Alternativ from './Alternativ.jsx'

const Koalisjonsalternativer = ({headline, alternativeSupport}) => {
  console.log(headline);
  return (
    <div className="modul">
      <h3>{headline}</h3>
      <div className="alternativrad row">
        <Alternativ partners={[partier.ap, partier.sp, partier.sv]}
                    name="Rødgrønn"
                    support={"rg" in alternativeSupport ? formatProbability(alternativeSupport.rg) : -1} />
        <Alternativ partners={[partier.ap, partier.sp]}
                    name="Ap – Sp"
                    support={"apsp" in alternativeSupport ? formatProbability(alternativeSupport.apsp) : -1} />
        <Alternativ partners={[partier.ap, partier.sp, partier.krf]}
                    name="Trafikklys"
                    support={"trafikklys" in alternativeSupport ? formatProbability(alternativeSupport.trafikklys) : -1}
                    className="last-alt" />
      </div>
      <div className="alternativrad row">
        <Alternativ partners={[partier.sp, partier.krf, partier.v]}
                    name="Sentrum"
                    support="N/A" />
        <Alternativ partners={[partier.krf, partier.v, partier.h]}
                    name="Sentrum-høyre"
                    support="N/A" />
        <Alternativ partners={[partier.h, partier.frp]}
                    name="Blåblå"
                    support="N/A"
                    className="last-alt" />
      </div>
    </div>
  );
}

export default Koalisjonsalternativer;
