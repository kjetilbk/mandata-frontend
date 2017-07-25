import React, { Component } from 'react';
import '../../css/Flertallsbarometer.css';
import Koalisjon from './Koalisjon';
import Barometer from './Barometer';

const opposisjonen = [
  {
    navn: "Arbeiderpartiet",
    forkortelse: "Ap"
  },
  {
    navn: "Sosialistisk Venstreparti",
    forkortelse: "SV"
  },
  {
    navn: "Senterpartiet",
    forkortelse: "Sp"
  },
  {
    navn: "Miljøpartiet de Grønne",
    forkortelse: "MDG"
  },
  {
    navn: "Rødt",
    forkortelse: "R"
  }
];

const nydalen = [
  {
    navn: "Kristelig folkeparti",
    forkortelse: "KrF"
  },
  {
    navn: "Venstre",
    forkortelse: "V"
  },
  {
    navn: "Høyre",
    forkortelse: "H"
  },
  {
    navn: "Fremskrittspartiet",
    forkortelse: "Frp"
  }
]

class Flertallsbarometer extends Component {

  render() {
    return (
      <div className="flertallsbarometer">
        <h3>
          Sjanse for flertall:
        </h3>
        <div className="row">
          <div className="col-xs-6">
            <Koalisjon navn="Opposisjonen" partier={opposisjonen} farge="red" posisjon="left" support={0.997} />
          </div>
          <div className="col-xs-6">
            <Koalisjon navn="Nydalen" partier={nydalen} farge="blue" posisjon="right" support={0.0003} />
          </div>
        </div>
        <Barometer leftSupport={0.997} />
      </div>

    );
  }
}

export default Flertallsbarometer;
