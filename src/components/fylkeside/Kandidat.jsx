import React from 'react';

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
          {sjanse}%
        </div>
      </div>
    </div>
  );
}

export default Kandidat;
