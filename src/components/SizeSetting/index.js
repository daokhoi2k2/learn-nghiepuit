import React from "react";
import Reset from "../Reset";
import "./style.css";

const SizeSetting = () => {
  return (
    <div className='card' style={{ width: "48%" }}>
      <div className='card-header'>Size: 8px</div>
      <div className='card-body'>
        <button className="btn btn-success m-1">
            Giảm
        </button>
        <button className="btn btn-success m-1">
            Tăng
        </button>
      </div>
      <Reset />
    </div>
  );
};

export default SizeSetting;
