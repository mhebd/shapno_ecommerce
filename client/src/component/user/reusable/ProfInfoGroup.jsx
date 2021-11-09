import React from 'react';

function ProfInfoGroup({ label, info }) {
  return (
    <div className="info-group">
      <p className="label">{label}</p>
      <p className="info">{info}</p>
    </div>
  );
}

export default ProfInfoGroup;
