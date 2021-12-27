import { useState } from "react";
import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  const [number, setNumber] = useState(0);

  const increaseNumber = () => {
    setNumber((prev) => ++prev);
  };

  const handleClickMe = () => {
    console.log("Click me nè")
  };

  return (
    <>
      <Header />
      <div>Number: {number}</div>
      <div className='d-flex'>
        <Product
          name='CSGO'
          setNumber={setNumber}
          price='360.000đ'
          image='https://picsum.photos/600/300'
        >
          ASD
        </Product>
        <Product
          name='PUBG'
          setNumber={setNumber}
          price='320.000đ'
          image='https://picsum.photos/600/300'
        />
        <Product
          name='Sea Of Thieves'
          setNumber={setNumber}
          price='250.000đ'
          image='https://picsum.photos/600/300'
        />
      </div>
      <button className="btn btn-success" onClick={handleClickMe}>Click me!</button>
    </>
  );
}

export default App;
