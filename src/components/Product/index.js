import React, { useRef } from "react";
import { Component } from "react/cjs/react.production.min";

const Product = ({
  image,
  name,
  price,
}) => {
  const handleClick = () => {
    console.log(testRefHook);
  }

  const testRefHook = useRef();

  console.log("Re-render Product");

  return (
    <div className='card m-2' style={{ width: "18rem" }}>
    <img
      src={image}
      className='card-img-top'
      alt='...'
    />
    <div className='card-body'>
      <h5 ref={testRefHook} className='card-title'>{name}</h5>
      <p className='card-text'>
        {price}
      </p>
      <button onClick={handleClick} href='#' className='btn btn-primary'>
        Buy
      </button>
    </div>
  </div>
  );
};

// class Product extends Component {
//   constructor(props) {
//     super(props);
//     // Tạo 1 Reference có key là testRef
//     this.testRef = React.createRef();
//     //   this.onHandleClick = this.handleClick.bind(this.props.price);
//     //   console.log(this.props.price)
//   }

//   handleClick = () => {
//     this.props.setNumber((prev) => prev + 1);
//     console.log(this);
//   };

//   render() {
//     return (
//       <div className='card m-2' style={{ width: "18rem" }}>
//         <img src={this.props.image} className='card-img-top' alt='...' />
//         <div className='card-body'>
//           {/* Truyền ref có key là testRef để nhận giá trị */}
//           <h5 ref={this.testRef} className='card-title'>
//             {this.props.name}
//           </h5>
//           <p className='card-text'>{this.props.price}</p>
//           <button onClick={this.handleClick} className='btn btn-primary'>
//             Buy
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

export default Product;
