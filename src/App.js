import React, { useState } from "react";
import { Component } from "react/cjs/react.production.min";

class App extends Component {
  constructor(props) {
    console.log("re-render");
    super(props);
    this.changeInfo = this.changeInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.changePassword = this.changePassword.bind(this);
    this.state = {
      username: "",
      password: "",
      description: "",
      hobby: 0,
      gender: 0,
    };
  }

  changeInfo(e) {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  }

  // Làm cách này chỉ được single input mỗi input sẽ phải lặp lại rất tốn thời gian và bị lặp code
  // changePassword(e) {
  //   this.setState({
  //     password: e.target.value,
  //   });
  // }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <>
        <div className='container'>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group mt-5'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                className='form-control'
                id='username'
                onChange={this.changeInfo}
                value={this.state.username}
                name='username'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                className='form-control'
                id='password'
                onChange={this.changeInfo}
                value={this.state.password}
                name='password'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <textarea
                className='form-control'
                id='description'
                name='description'
                rows='3'
                value={this.state.description}
                onChange={this.changeInfo}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='hobby'>Hobby</label>
              <select
                className='form-control'
                id='hobby'
                name='hobby'
                onChange={this.changeInfo}
                value={this.state.hobby}
              >
                <option value={0}>Sleep</option>
                <option value={1}>Play games</option>
                <option value={2}>Listening to music</option>
                <option value={3}>Studying</option>
                <option value={4}>Shopping</option>
              </select>
            </div>
            <div className='form-group mt-2'>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='gender'
                  id='genderMale'
                  onChange={this.changeInfo}
                  value={0}
                  checked={this.state.gender == 0}
                />
                <label className='form-check-label' htmlFor='genderMale'>
                  Male
                </label>
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='gender'
                  id='genderFemale'
                  onChange={this.changeInfo}
                  value={1}
                  checked={this.state.gender == 1}
                />
                <label className='form-check-label' htmlFor='genderFemale'>
                  Female
                </label>
              </div>
            </div>
            <div className='form-group'>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='inlineCheckbox1'
                  value='option1'
                />
                <label className='form-check-label' htmlFor='inlineCheckbox1'>
                  Tiếng Việt
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='inlineCheckbox2'
                  value='option2'
                />
                <label className='form-check-label' htmlFor='inlineCheckbox2'>
                  Tiếng Anh
                </label>
              </div>
            </div>
            <button type='submit' className='btn btn-primary m-2'>
              Lưu lại
            </button>
            <button type='reset' className='btn btn-warning m-2'>
              Nhập lại
            </button>
          </form>
        </div>
      </>
    );
  }
}

// const App = () => {
//   const [user, setUser] = useState("");

//   const changeUser = (e) => {
//     setUser(e.target.value);
//   }
//   return (
//     <>
//       <div className='container'>
//         <form>
//           <div className='form-group mt-5'>
//             <label htmlFor='username'>Username</label>
//             <input
//               type='text'
//               className='form-control'
//               id='username'
//               onChange={changeUser}
//               value={user}
//             />
//             <button type='button' className='btn btn-primary m-2'>
//               Lưu lại
//             </button>
//             <button type='reset' className='btn btn-warning m-2'>
//               Nhập lại
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

export default App;
