import React from 'react';

const DateLabel = ({xPosition, dateLabel, width}) => {
  const date = new Date(dateLabel);
  const relevantMonths = {4: "Mai", 5: "Juni", 6: "Juli", 7: "August", 8: "September"}
  const label = date.getDate()+". "+relevantMonths[date.getMonth()];
  const labelPos = xPosition - (width-1000)/2
  return <div style={{left: labelPos+"px"}} className="date-label"><p>{label}</p></div>
}

export default DateLabel;
