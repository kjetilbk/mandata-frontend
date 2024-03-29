import React from 'react';
import Parti from './Parti';

const Koalisjon = ({navn, partier, farge, posisjon, support}) => {
  const partiLogoer = partier.map(parti => <Parti key={parti.forkortelse.toLowerCase()}
                                                  navn={parti.navn}
                                                  forkortelse={parti.forkortelse}
                                                  logo={parti.logo} />);
  const partiForkortelser = partier.reduce((acc, parti, index, arr) => acc + parti.forkortelse + (index === arr.length-1 ? "" : " / "), "")
  return (
    <div style={{float: posisjon, display: 'inline-block'}}>
      <div className={navn.toLowerCase()}>
        <h2 className={"coalition-name "}>{navn}</h2>
        <div className={"partiforkortelser "}>{partiForkortelser}</div>
        <div><p className={"coalition-support "+navn.toLowerCase()}>{support}<p className={"coalition-support-percentage "+navn.toLowerCase()}>%</p></p></div>
        <div className={navn.toLowerCase()}>{partiLogoer}</div>
      </div>
    </div>
  );
}

export default Koalisjon;
