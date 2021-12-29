import React, { useState } from "react";
import { Component } from "react/cjs/react.production.min";
import Control from "./components/Control";
import Table from "./components/Table";
import TaskForm from "./components/TaskForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: JSON.parse(localStorage.getItem("tasks")) || [],
      isShow: true,
    };
    console.log("Constructor")
  }

  // Sẽ chạy trước khi Component được render
  componentWillMount() {
    console.log("App Will Mount");
  }

  // Sẽ chạy sau khi Component được render
  componentDidMount() {
    console.log("App mounted");
  }

  // Sẽ chạy trước khi Component bị unmount
  componentWillUnmount() {
    console.log("App will unmount");
  }

  // 
  componentWillReceiveProps() {
    console.log("Sẽ thay đổi props");
  }

  // Return true nếu update false sẽ dừng lại và không chạy vào componentDidUpdate và componentWillUpdate
  shouldComponentUpdate() {
    console.log("Nên re-render")
    return true;
  }
  
  // Sẽ chạy sau khi component được update và UI được render và shouldComponentUpdate trả về true
  componentDidUpdate() {
    console.log("App did updated");
  }
  
  // Sẽ chạy khi component sẽ update và chạy trước componentDidUpdate 
  componentWillUpdate() {
    console.log("App will update")
  }

  handleMockData = () => {
    const tasks = [
      {
        id: this.generateID(),
        name: "Học lập trình",
        statis: false,
      },
      {
        id: this.generateID(),
        name: "Tiêm vacine",
        statis: true,
      },
      {
        id: this.generateID(),
        name: "Ăn cơm",
        statis: true,
      },
    ]
    
    this.setState({
      tasks
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  v4() {
    return Math.floor((1 + Math.random()) * 0x1000)
      .toString(16)
      .substring(1);
  }

  generateID() {
    return (
      this.v4() +
      this.v4() +
      "-" +
      this.v4() +
      "-" +
      this.v4() +
      "-" +
      this.v4() +
      "-" +
      this.v4() +
      this.v4() +
      this.v4()
    );
  }

  toggleIsShow = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  render() {
    return (
      <>
      {console.log("Render UI")}
        <div className='container'>
          <div className='text-center'>
            <h1>Quản Lý Công Việc</h1>
            <hr />
          </div>
          <div className='row'>
            <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
              <TaskForm />
            </div>
            <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8'>
              <button onClick={this.toggleIsShow} type='button' className='btn btn-primary mt-3 mb-3'>
                Thêm Công Việc
              </button>
              <button
                type='button'
                className='btn btn-danger mt-3 mb-3'
                style={{ marginLeft: 15 }}
                onClick={this.handleMockData}
              >
                Mock data
              </button>
              <Control />
              <div className='row mt-15'>
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                  {
                    this.state.isShow && <Table bol={this.state.tasks} />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
