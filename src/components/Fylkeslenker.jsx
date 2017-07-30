import React from 'react';
import {Link} from 'react-router-dom'
import fylker from '../tools/fylker';

const Fylkeslenker = ({showFylkesChooser}) => {
  const fylkeElementer = fylker.map(fylke => <Link key={fylke.id} className="fylkelenke" to={"fylke/"+fylke.id}>{fylke.navn}</Link>)
  return (
    <div className="fylkeschooser">
      <div className="row">
        <div className="col-xs-6">
          {fylkeElementer.slice(0, Math.floor(fylkeElementer.length / 2))}
        </div>
        <div className="col-xs-6">
          {fylkeElementer.slice(fylkeElementer.length / 2, fylkeElementer.length)}
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Fylkeslenker;
