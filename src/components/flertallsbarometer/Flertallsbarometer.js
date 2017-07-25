import React, { Component } from 'react';
import '../../css/Flertallsbarometer.css';
import Koalisjon from './Koalisjon';
import Barometer from './Barometer';
import partier from '../../tools/partier';

const opposisjonen = [
  partier.r,
  partier.sv,
  partier.ap,
  partier.sp,
  partier.mdg
];

const nydalen = [
  partier.krf,
  partier.v,
  partier.h,
  partier.frp
]

class Flertallsbarometer extends Component {
  render() {
    const rightSupport = parseFloat(this.props.nydalenSupport.toFixed(4));
    const leftSupport = 1 - rightSupport;
    return (
      <div className="flertallsbarometer">
        <h3>
          Sjanse for flertall i Stortinget
        </h3>
        <div className="row">
          <div className="col-xs-6">
            <Koalisjon navn="Opposisjonen" partier={opposisjonen} farge="red" posisjon="left" support={leftSupport} />
          </div>
          <div className="col-xs-6">
            <Koalisjon navn="Nydalen" partier={nydalen} farge="blue" posisjon="right" support={rightSupport} />
          </div>
        </div>
        <Barometer leftSupport={leftSupport} />
      </div>

    );
  }
}

export default Flertallsbarometer;
