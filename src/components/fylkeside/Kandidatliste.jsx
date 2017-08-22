import React from 'react';
import Kandidat from './Kandidat.jsx';

const chanceObjectToList = sjanser => {
  let list = []
  for (let key in sjanser) {
    list[parseInt(key, 10)] = sjanser[parseInt(key, 10)]
  }
  return list;
}

const sumOfListElementsFromStartIndex = (startIndex, listToSum) => (
  listToSum.slice(startIndex, listToSum.length).reduce((sum, current) => sum += current)
)


const convertExactChancesToMinChances = sjanser => {
  const sjanseListe = chanceObjectToList(sjanser)
  const minChances = sjanseListe.map((chance, index, theList) => {
    const minChance = sumOfListElementsFromStartIndex(index, theList)
    return minChance;
  })
  return minChances;
}

const Kandidatliste = ({parti, kandidater, sjanser}) => {
  const kandidatSjanser = convertExactChancesToMinChances(sjanser);
  const kandidatliste = kandidater.map(kandidat => <Kandidat key={kandidat.Navn} nummer={kandidat.Kandidatnr} navn={kandidat.Navn} sjanse={kandidat.Kandidatnr in kandidatSjanser ? kandidatSjanser[kandidat.Kandidatnr] : 0} />);
  return (
    <div className="col-sm-4 col-xs-12 kandidatbokser">
      <div className="kandidatliste">
        <img className="fylkepartilogo" src={parti.logo} alt="partilogo" />
        <h3 className="fylkespartinavn">{parti.navn}</h3>
        <div className="tekstliste">
          {kandidatliste.slice(0,10)}
        </div>
      </div>
    </div>
  )
}

export default Kandidatliste;
