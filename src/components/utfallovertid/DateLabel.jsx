import React from 'react';

const DateLabel = ({xPosition, dateLabel, width}) => {
  const date = new Date(dateLabel);
  const relevantMonths = {4: "Mai", 5: "Juni", 6: "Juli", 7: "August", 8: "September"}
  const label = date.getDate()+". "+relevantMonths[date.getMonth()];
  const labelPos = (width > 1001 ? xPosition - (width-1000)/2 : (width/2)-30)
  return (dateLabel === "") ? null : <div style={{left: labelPos+"px"}} className="date-label"><p>{label}</p></div>
}

export default DateLabel;
