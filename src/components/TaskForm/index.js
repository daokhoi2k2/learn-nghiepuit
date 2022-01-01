import React, { useState } from "react";
import { Component } from "react/cjs/react.production.min";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      status: false,
    };
    this.nameElement = React.createRef();
  }

  changeInfo = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addWorkItem({ ...this.state }); // phải clone this.state để khi gán id bên App.js không bị trùng key (Vì đây là reference)
    this.onClear();
    this.props.onExit();
  };

  onClear = () => {
    this.setState({
      name: "",
      status: false
    });
    this.nameElement.current.focus();
  };

  render() {
    return (
      <div className='panel panel-warning'>
        <div className='panel-heading d-flex justify-content-between'>
          <h3 className='panel-title'>Thêm Công Việc</h3>
          <div onClick={this.props.onExit} style={{ cursor: "pointer" }}>
            x
          </div>
        </div>
        <div className='panel-body'>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label>Tên :</label>
              <input
                type='text'
                className='form-control'
                value={this.state.name}
                onChange={this.changeInfo}
                name='name'
                ref={this.nameElement}
              />
            </div>
            <label>Trạng Thái :</label>
            <select
              className='form-control'
              name='status'
              value={this.state.status}
              onChange={this.changeInfo}
            >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div className='text-center'>
              <button
                type='submit'
                className='btn btn-warning'
                onClick={() => console.log(this.nameElement)}
              >
                Thêm
              </button>
              &nbsp;
              <button
                type='button'
                className='btn btn-danger'
                onClick={this.onClear}
              >
                Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
