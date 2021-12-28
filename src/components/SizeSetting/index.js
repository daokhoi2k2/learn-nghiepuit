import React from "react";
import { Component } from "react/cjs/react.production.min";
import Reset from "../Reset";
import "./style.css";

class SizeSetting extends Component {
  constructor(props) {
    super(props);
    this.stateApp = props.data;
  }
  increase = () => {
    console.log();
    this.stateApp.setState({
      fontSize:
        this.stateApp.state.fontSize + 2 >= 38
          ? 38
          : this.stateApp.state.fontSize + 2,
    });
  };

  decrease = () => {
    this.stateApp.setState({
      fontSize:
        this.stateApp.state.fontSize - 2 <= 8
          ? 8
          : this.stateApp.state.fontSize - 2,
    });
  };

  render() {
    return (
      <div className='card' style={{ width: "48%" }}>
        <div className='card-header'>Size: {this.stateApp.state.fontSize}px</div>
        <div className='card-body'>
          <button onClick={this.decrease} className='btn btn-success m-1'>
            Giảm
          </button>
          <button onClick={this.increase} className='btn btn-success m-1'>
            Tăng
          </button>
        </div>
        <Reset data={this.stateApp} />
      </div>
    );
  }
}

export default SizeSetting;
