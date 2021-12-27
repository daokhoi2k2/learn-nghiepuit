import React, { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import Test from "./components/Test";
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
    this.state = {
      products: [
        {
          id: 1,
          name: "Apple Iphone 6 Plus 16GB",
          price: 15000000,
        },
        {
          id: 2,
          name: "Laptop Gamming MSI",
          price: 2300000,
        },
        {
          id: 3,
          name: "Xe máy honda Winner",
          price: 54000000,
        },
      ],
      isActive: true,
    };
  }

  handleClearState = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    console.log("Re-render", this.state);
    return (
      <div>
        <Header title='State' />
        <Test />
        <div className='container'>
          <table className='table'>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
              </tr>
            </thead>
            <tbody>
              {this.state.isActive ? (
                this.state.products.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td scope='row'>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.price} VNĐ</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td>Sản phẩm đã bị ẩn</td>
                </tr>
              )}
            </tbody>
          </table>
          <button onClick={this.handleClearState} className='btn btn-primary'>
            {this.state.isActive ? "Active" : "Deactive"}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
