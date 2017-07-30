import React from 'react';
import {Link} from 'react-router-dom';
import fylker from '../../tools/fylker';

const Sidebar = ({location}) => {
  return (
    <div className="sidebar col-sm-2">
      <div className="sidebar-content">
        <h4>Hvem kommer inn på Stortinget fra ditt fylke?</h4>
          <div className="sidebar-links">
            {fylker.map(fylke => <Link key={fylke.id} className="fylkelenke" to={fylke.id}>{fylke.navn}</Link>)}
          </div>
      </div>
    </div>
  );
}

export default Sidebar;
