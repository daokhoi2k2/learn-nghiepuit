import React from "react";
import { Component } from "react/cjs/react.production.min";
// import ColorPicker from "./components/ColorPicker";
// import Result from "./components/Result";
// import SizeSetting from "./components/SizeSetting";
import Wrap from "./components/Wrap";
class App extends Component {

  render() {
    console.log("Re-render App")
    return (
      <>
        <Wrap />
      </>
    );
  }
}

export default App;
