import React, { useState, useRef, useEffect } from "react";
import { Component } from "react/cjs/react.production.min";
import ColorPicker from "./components/ColorPicker";
import Result from "./components/Result";
import SizeSetting from "./components/SizeSetting";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: 8
    }
  }
  render() {
    return (
      <>
        <div className='container mt-5'>
          <div className='d-flex justify-content-between'>
            <ColorPicker />
            <SizeSetting />
          </div>
          <Result className='mt-5' color='red' fontSize={8} />
        </div>
      </>
    );
  }
}

export default App;
