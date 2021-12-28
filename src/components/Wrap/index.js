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
      color: "red"
    }
  }

  render() {
    console.log("Re-render Wrap")
    return (
      <>
        <div className='container mt-5'>
          <div className='d-flex justify-content-between'>
            <ColorPicker data={this} />
            <SizeSetting data={this} />
          </div>
          <Result className='mt-5' color={this.state.color} fontSize={this.state.fontSize} />
        </div>
      </>
    );
  }
}

export default Wrap;
