import React, { createRef } from "react";
import { Component } from "react/cjs/react.production.min";
import "./style.css";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.colorItem = createRef();
    this.stateApp = props.data;
  }

  colorPick = (target, color) => {
    this.stateApp.setState({
      color: color,
    });
  };

  render() {
    return (
      <div className='card' style={{ width: "48%" }}>
        <div className='card-header'>Color Picker</div>
        <div className='card-body'>
          <div ref={this.colorItem} className='d-flex'>
            <div
              onClick={(e) => this.colorPick(e.target, "red")}
              className={
                this.stateApp.state.color === "red"
                  ? "color_item red active"
                  : "color_item red"
              }
            />
            <div
              onClick={(e) => this.colorPick(e.target, "green")}
              className={
                this.stateApp.state.color === "green"
                  ? "color_item green active"
                  : "color_item green"
              }
            />
            <div
              onClick={(e) => this.colorPick(e.target, "blue")}
              className={
                this.stateApp.state.color === "blue"
                  ? "color_item blue active"
                  : "color_item blue"
              }
            />
            <div
              onClick={(e) => this.colorPick(e.target, "gray")}
              className={
                this.stateApp.state.color === "gray"
                  ? "color_item gray active"
                  : "color_item gray"
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
