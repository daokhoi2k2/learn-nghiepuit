import React from "react";
import { Component } from "react/cjs/react.production.min";
// import ColorPicker from "./components/ColorPicker";
// import Result from "./components/Result";
// import SizeSetting from "./components/SizeSetting";
import Wrap from "./components/Wrap";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: 8,
      color: "red"
    }
    console.log("Print in constuctor");
  }

  render() {
    console.log("Re-render App")
    return (
      <>
        <Wrap />
        {console.log("Print in return render")}
      </>
    );
  }
}

export default App;
