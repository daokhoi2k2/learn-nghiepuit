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
      taskShow: false,
    };
  }

  handleMockData = () => {
    const tasks = [
      {
        id: this.generateID(),
        name: "Học lập trình",
        status: false,
      },
      {
        id: this.generateID(),
        name: "Tiêm vacine",
        status: true,
      },
      {
        id: this.generateID(),
        name: "Ăn cơm",
        status: true,
      },
    ];

    this.setState({
      tasks,
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

  showForm = () => {
    console.log("Show form")
    this.setState({
      taskShow: true
    })
  }

  handleExit = () => {
    this.setState({
      taskShow: false
    })
  }

  render() {
    return (
      <>
        <div className='container'>
          <div className='text-center'>
            <h1>Quản Lý Công Việc</h1>
            <hr />
          </div>
          <div className='row'>
            {this.state.taskShow && (
              <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                <TaskForm onExit={this.handleExit}/>
              </div>
            )}
            <div className={this.state.taskShow ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
              <button
                onClick={this.showForm}
                type='button'
                className='btn btn-primary mt-3 mb-3'
              >
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
                  <Table tasks={this.state.tasks} />
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
