import React from "react";
import "./style.css";

const Reset = ({ data }) => {
  const handleReset = () => {
    data.setState({
      fontSize: 8,
      color: "red"
    })
  };

  return (
    <button onClick={handleReset} className='btn btn-primary m-3'>
      Reset
    </button>
  );
};

export default Reset;
