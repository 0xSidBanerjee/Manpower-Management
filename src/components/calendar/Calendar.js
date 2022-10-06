import React, { useState } from "react";
import Calendar from "react-calendar";
import './Calendar.css';

const ReactCalender = () => {
  const [date, setDate] = useState(new Date());
  const onChange = date => {
    setDate(date);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
};
export default ReactCalender;