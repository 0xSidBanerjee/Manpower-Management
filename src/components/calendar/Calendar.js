import React, { useState } from "react";
//import { render } from "react-dom";
import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
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
//render(<ReactCalender/>, document.querySelector("#root"));
export default ReactCalender;







// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
