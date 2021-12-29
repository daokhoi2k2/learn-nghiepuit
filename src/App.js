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
    console.log("App Constructor")
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
    console.log("Show form");
    this.setState({
      taskShow: true,
    });
  };

  handleExit = () => {
    this.setState({
      taskShow: false,
    });
  };

  // Cách này làm khá dài dòng do chưa áp dụng Referrence
  // addWorkItem = (item) => {
  //   item.id = this.generateID();
  //   this.setState((prev) => {
  //     return {
  //       ...prev,
  //       tasks: [...prev.tasks, item]
  //     };
  //   });
  // };

  addWorkItem = (item) => {
    const { tasks } = this.state;
    item.id = this.generateID();
    tasks.push(item);
    this.setState({
      tasks: [...tasks],
    });
    // Đã tìm ra được nguyên nhân khiến Table không re-render khi sử dụng HOC React.memo
    // Lý do: giá trị thay đổi phải là 1 state khác (Không được sử dụng refenrence để ghi đè giá trị cũ) (Phải tìm hiểu kỹ hơn)
    // Cái tasks tham số là nguyên nhân khiến table không re-render
    console.log(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  render() {
    console.log("Re-render app");
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
                <TaskForm
                  onExit={this.handleExit}
                  addWorkItem={this.addWorkItem}
                />
              </div>
            )}
            <div
              className={
                this.state.taskShow
                  ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                  : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
              }
            >
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
