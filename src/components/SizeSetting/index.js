import React from "react";
import { Component } from "react/cjs/react.production.min";
import Reset from "../Reset";
import "./style.css";

class SizeSetting extends Component {
  constructor(props) {
    super(props);
    // this.fontSize = this.props.
    console.log(this.props);
  }
  increase = () => {
    this.props.onReceiveFontSize(
      this.props.fontSize + 2 >= 36 ? 36 : this.props.fontSize + 2
    );
  };

  decrease = () => {
    this.props.onReceiveFontSize(
      this.props.fontSize - 2 <= 10 ? 10 : this.props.fontSize - 2
    );
  };

  handleReset = () => {
    this.props.onReceiveFontSize(16);
    this.props.onReceiveColor('red');
  }

  render() {
    return (
      <div className='card' style={{ width: "48%" }}>
        <div className='card-header'>Size: {this.props.fontSize}px</div>
        <div className='card-body'>
          <button onClick={this.decrease} className='btn btn-success m-1'>Giảm</button>
          <button onClick={this.increase} className='btn btn-success m-1'>
            Tăng
          </button>
        </div>
        <Reset onReset={this.handleReset} />
      </div>
    );
  }
}

export default SizeSetting;
