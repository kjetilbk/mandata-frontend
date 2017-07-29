import React from 'react';

const DateLabel = ({dateLabel, width}) => {
  const date = new Date(dateLabel);
  const relevantMonths = {4: "Mai", 5: "Juni", 6: "Juli", 7: "August", 8: "September"}
  const label = date.getDate()+". "+relevantMonths[date.getMonth()];
  const labelPos = width > 1001 ? 500-20 : (width/2-20);
  return (dateLabel === "") ? null : <div style={{left: labelPos+"px"}} className="date-label"><p>{label}</p></div>
}

export default DateLabel;
