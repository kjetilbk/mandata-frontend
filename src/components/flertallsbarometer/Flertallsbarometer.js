import React, { Component } from 'react';
import '../../css/Flertallsbarometer.css';
import Koalisjon from './Koalisjon';
import Barometer from './Barometer';
import partier from '../../tools/partier';
import { formatProbability } from '../../tools/helpers';

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
    const rightSupport = formatProbability(this.props.nydalenSupport);
    const leftSupport = formatProbability((100 - rightSupport)/100);
    return (
      <div className="modul">
        {this.props.headline}
        <div className="row">
          <div className="col-xs-6">
            <Koalisjon navn="Opposisjonen" partier={opposisjonen} farge="red" posisjon="left" support={leftSupport} />
          </div>
          <div className="col-xs-6">
            <Koalisjon navn="Nydalen" partier={nydalen} farge="blue" posisjon="right" support={rightSupport} />
          </div>
        </div>
        <Barometer leftSupport={leftSupport/100} />
      </div>

    );
  }
}

export default Flertallsbarometer;
