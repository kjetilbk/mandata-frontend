import React from 'react';
import {formatProbability} from '../../tools/helpers';

const Kandidat = ({nummer, navn, sjanse}) => {
  return (
    <div className="row kandidat">
      <div className="col-xs-2 kandidatnummer">
        {nummer}.
      </div>
      <div className="col-xs-6">
        {navn}
      </div>
      <div className="col-xs-2">
        <div className="kandidatsjanse">
          {sjanse > 0.01 ? formatProbability(sjanse, 1) : "<0.1"}%
        </div>
      </div>
    </div>
  );
}

export default Kandidat;
