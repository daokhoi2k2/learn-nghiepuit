import React from "react";
import { Component } from "react/cjs/react.production.min";
import "./style.css";

class ColorPicker extends Component {
  render() {
    return (
      <div className='card' style={{width: "48%"}}>
        <div className='card-header'>Color Picker</div>
        <div className='card-body'>
          <div className='d-flex'>
            <div className="color_item red" />
            <div className="color_item green" />
            <div className="color_item blue" />
            <div className="color_item gray active" />
          </div>
        </div>
      </div>
    )
  }
};

export default ColorPicker;
