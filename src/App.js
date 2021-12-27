import { useState, useRef } from "react";
import Header from "./components/Header";
import Product from "./components/Product";

console.log("Root rerender")
function App() {
  const [number, setNumber] = useState(60);
  const timerId = useRef();
  
  const handleStart = () => {
    timerId.current = setInterval(() => {
      setNumber(prev => prev - 1);
    }, 1000);
    console.log("Start -> ", timerId.current)
  }

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
      <button ref="start" onClick={handleStart}>Start</button>
      <button ref="stop" onClick={handleStop}>Stop</button>
    </>
  );
}

export default App;
