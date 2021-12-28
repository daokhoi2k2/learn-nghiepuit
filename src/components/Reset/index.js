import React from "react";
import "./style.css";

const Reset = ({ onReset }) => {

  return (
    <button onClick={onReset} className='btn btn-primary m-3'>
      Reset
    </button>
  );
};

export default Reset;
