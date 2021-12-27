import React from "react";
import { Component } from "react/cjs/react.production.min";

// const Product = ({
//   image,
//   name,
//   price,
//   setNumber
// }) => {
//   const increaseNumber = () => {
//     setNumber((prev) => ++prev);
//   }

//   const handleClick = () => {
//     console.log("Chạy ở lần render đầu");
//   }

//   return (
//     <div className='card m-2' style={{ width: "18rem" }}>
//     <img
//       src={image}
//       className='card-img-top'
//       alt='...'
//     />
//     <div className='card-body'>
//       <h5 className='card-title'>{name}</h5>
//       <p className='card-text'>
//         {price}
//       </p>
//       <button onClick={handleClick} href='#' className='btn btn-primary'>
//         Buy
//       </button>
//       {/* <a onClick={increaseNumber} href='#' className='btn btn-primary'>
//         Buy
//       </a> */}
//     </div>
//   </div>
//   );
// };

class Product extends Component {

  constructor(props) {
    super(props);
    console.log(this)
    this.onHandleClick = this.handleClick.bind(this.props.name);
  }

  // handleClick = () => {
  //   // this.props.setNumber((prev) => prev + 1);
  //   console.log(this.props);
  //   // alert(this.props.name)
  //   // alert()
  // };

  // handleClick() {
  //   console.log(this)
  // }

  // Nếu sử dụng function bình thường thì sẽ phải bind this
  handleClick() {
    console.log("This", this);
  }

  // Sử dụng arrow function để không nhận hàm là 1 context
  // handleClick = () => {
  //   console.log(this);
  // }

  render() {
    return (
      <div className='card m-2' style={{ width: "18rem" }}>
        <img src={this.props.image} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{this.props.name}</h5>
          <p className='card-text'>{this.props.price}</p>
          <button onClick={ this.onHandleClick } className='btn btn-primary'>
            Buy
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
