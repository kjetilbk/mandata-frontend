import React from 'react';

const Alternativ = ({support, name, partners, className}) => {
  const logoer = partners.map(partner => <img alt={partner.forkortelse} src={partner.logo} className={"parti partilogo "} />);
  const partiForkortelser = partners.reduce((acc, parti, index, arr) => acc + parti.forkortelse + (index === arr.length-1 ? "" : " / "), "")
  const alternativName = name !== undefined ? name : partners.reduce((acc, parti, index, arr) => acc + parti.forkortelse + (index === arr.length-1 ? "" : " / "), "");
  return (
    <div className={"col-xs-4 alternativ " + className}>
      <div><p>{alternativName}</p></div>
      <div><h1 className="alternativ-support">{support}<p className="alternativ-percentage">%</p></h1></div>
      <div className="koalisjonspartilogo">{logoer}</div>
      <div className="koalisjonspartinavn">{partiForkortelser}</div>
    </div>
  )
}

export default Alternativ;
