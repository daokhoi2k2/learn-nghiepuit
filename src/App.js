import React, { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import { Component } from "react/cjs/react.production.min";

console.log("Root rerender");
/*
function App() {
  const [number, setNumber] = useState(60);
  const timerId = useRef();
  const prevValue = useRef();
  const start = useRef();
  const stop = useRef();

  useEffect(() => {
    prevValue.current = number;
  }, [number]);

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setNumber(prev => prev - 1);
      console.log(start.current, stop.current)
    }, 1000);
    console.log("Start -> ", timerId.current)
  }

  console.log(number, prevValue.current);
  
  const handleStop = () => {
    clearInterval(timerId.current);
    console.log("Stop ->", timerId.current);
  }

  return (
    <>
      <Header />
      <div>Number: {number}</div>
      <div className='d-flex'>
        <Product
          name='CSGO'
          price='360.000đ'
          image='https://picsum.photos/600/300'
        >
          ASD
        </Product>
        <Product
          name='PUBG'
          price='320.000đ'
          image='https://picsum.photos/600/300'
        />
        <Product
          name='Sea Of Thieves'
          price='250.000đ'
          image='https://picsum.photos/600/300'
        />
      </div>
      <button ref={start} onClick={handleStart}>Start</button>
      <button ref={stop} onClick={handleStop}>Stop</button>
    </>
  );
}
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.start = React.createRef();
    this.stop = React.createRef();
  }
  handleStart = () => {
    console.log("Start", this);
  };

  handleStop = () => {
    console.log("Stop", this);
  };
  render() {
    console.log(this);
    return (
      <div>
        <Header />
        <div>Number: 0</div>
        <div className='d-flex'>
          <Product
            name='CSGO'
            price='360.000đ'
            image='https://picsum.photos/600/300'
          >
            ASD
          </Product>
          <Product
            name='PUBG'
            price='320.000đ'
            image='https://picsum.photos/600/300'
          />
          <Product
            name='Sea Of Thieves'
            price='250.000đ'
            image='https://picsum.photos/600/300'
          />
        </div>
        <button ref={this.start} onClick={this.handleStart}>
          Start
        </button>
        <button ref={this.stop} onClick={this.handleStop}>
          Stop
        </button>
      </div>
    );
  }
}

export default App;
