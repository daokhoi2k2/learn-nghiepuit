import React from "react";
import { Component } from "react/cjs/react.production.min";
import ColorPicker from "../ColorPicker";
import Result from "../Result";
import SizeSetting from "../SizeSetting";

class Wrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: 16,
      color: "red",
    };
  }

  onSetColor = (color) => {
    this.setState({
      color: color,
    });
  };

  onSetFontSize = (fontSize) => {
    this.setState({
      fontSize,
    });
  };

  render() {
    console.log("Re-render Wrap");
    return (
      <>
        <div className='container mt-5'>
          <div className='d-flex justify-content-between'>
            <ColorPicker
              color={this.state.color}
              onReceiveColor={this.onSetColor}
            />
            <SizeSetting
              fontSize={this.state.fontSize}
              onReceiveFontSize={this.onSetFontSize}
              onReceiveColor={this.onSetColor}
            />
          </div>
          <Result
            className='mt-5'
            color={this.state.color}
            fontSize={this.state.fontSize}
          />
        </div>
      </>
    );
  }
}

export default Wrap;
