import React, { Component } from 'react';
import '../../css/Flertallsbarometer.css';
import Koalisjon from './Koalisjon';
import Barometer from './Barometer';

const opposisjonen = [
  {
    navn: "Arbeiderpartiet",
    forkortelse: "ap"
  },
  {
    navn: "Sosialistisk Venstreparti",
    forkortelse: "sv"
  },
  {
    navn: "Senterpartiet",
    forkortelse: "sp"
  },
  {
    navn: "Miljøpartiet de Grønne",
    forkortelse: "mdg"
  },
  {
    navn: "Rødt",
    forkortelse: "r"
  }
];

const nydalen = [
  {
    navn: "Kristelig folkeparti",
    forkortelse: "krf"
  },
  {
    navn: "Venstre",
    forkortelse: "v"
  },
  {
    navn: "Høyre",
    forkortelse: "h"
  },
  {
    navn: "Fremskrittspartiet",
    forkortelse: "frp"
  }
]

class Flertallsbarometer extends Component {

  render() {
    return (
      <div className="flertallsbarometer">
        <h3>
          Sjanse for flertall:
        </h3>
        <Koalisjon navn="Opposisjonen" partier={opposisjonen} farge="red" posisjon="left" support={0.997} />
        <Koalisjon navn="Nydalen" partier={nydalen} farge="blue" posisjon="right" support={0.0003} />
        <Barometer leftSupport={0.997} />
      </div>

    );
  }
}

export default Flertallsbarometer;
