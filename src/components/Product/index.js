import React from "react";
import { Component } from "react/cjs/react.production.min";

const Product = ({
  image,
  name,
  price,
  setNumber
}) => {
  const increaseNumber = () => {
    setNumber((prev) => ++prev);
  }

  return (
    <div className='card m-2' style={{ width: "18rem" }}>
    <img
      src={image}
      className='card-img-top'
      alt='...'
    />
    <div className='card-body'>
      <h5 className='card-title'>{name}</h5>
      <p className='card-text'>
        {price}
      </p>
      <a onClick={increaseNumber} href='#' className='btn btn-primary'>
        Buy
      </a>
    </div>
  </div>
  );
};

// class Product extends Component {
//     member() {
//         console.log("Hello");
//     }
//     render() {
//       console.log(this.props)
//     return (
//       <div className='card m-2' style={{ width: "18rem" }}>
//         <img
//           src={this.props.image}
//           className='card-img-top'
//           alt='...'
//         />
//         <div className='card-body'>
//           <h5 className='card-title'>{this.props.name}</h5>
//           <p className='card-text'>
//             {this.props.price}
//           </p>
//           <a onClick={} href='#' className='btn btn-primary'>
//             Buy
//           </a>
//         </div>
//       </div>
//     );
//   }
// }

export default Product;
