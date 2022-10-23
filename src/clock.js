import React, { useState, useEffect } from "react";

const Clock = (props) => {
  const { name } = props;
  const [date, setDate] = useState(new Date());

  useEffect(()=>{
   const timerID = setInterval(
      () => reloj(),
      1000
      );
    
    return ()=> {clearInterval(timerID);}
    
    }, []);




  const reloj = () => {
    setDate(new Date());
  };

  return (
    <div>
      <h1>Constante</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
};
export default Clock;
