import React from 'react';

const Alternativ = ({support, name, partners, className}) => {
  const logoer = partners.map(partner => <img key={partner.forkortelse} alt={partner.forkortelse+" logo"} src={partner.logo} className={"parti partilogo "} />);
  const partiForkortelser = partners.reduce((acc, parti, index, arr) => acc + parti.forkortelse + (index === arr.length-1 ? "" : " / "), "")
  const alternativName = name !== undefined ? name : partners.reduce((acc, parti, index, arr) => acc + parti.forkortelse + (index === arr.length-1 ? "" : " / "), "");
  return (
    <div className={"col-xs-4 alternativ-wrapper " + (className !== undefined ? className : "")}>
    <div className="alternativ">
      <div><p className="alternativ-name">{alternativName}</p></div>
      <div><h1 className="alternativ-support">{support}<p className="alternativ-percentage">%</p></h1></div>
      <div className="koalisjonspartilogo">{logoer}</div>
      <div className="koalisjonspartinavn">{partiForkortelser}</div>
    </div>
    </div>
  )
}

export default Alternativ;
