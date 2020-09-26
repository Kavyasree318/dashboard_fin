import React, { useState } from "react";
import "./css/entry.css";

const Main = () => {

  const [from_date, setFrom_date] = useState("");

  const [to_date, setTo_date] = useState("");

  const onSubmitForm = (e) => {
    console.log(from_date);
    console.log(to_date);
  } 

  return (
    <div>
      <div className="singlerow">
        <form onSubmit={onSubmitForm}>
          <input type="date" 
          id="from" 
          placeholder="from"
          value={from_date}
          onChange={(e) => setFrom_date(e.target.value)}
          required
          ></input>
          <input type="date" 
          id="to" 
          placeholder="to"
          value={to_date}
          onChange={(e) => setTo_date(e.target.value)}
          required
          ></input>
          <button>submit</button>
        </form>
      </div>
    </div>
  );
};
export default Main;
