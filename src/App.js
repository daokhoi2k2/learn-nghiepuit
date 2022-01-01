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
    this.setState({
      taskShow: true,
    });
  };

  handleExit = () => {
    this.setState({
      taskShow: false,
    });
  };

  toggleStatus = (id) => {
    const index = this.state.tasks.findIndex((item) => {
      return item.id === id;
    });

    const arrayChange = [...this.state.tasks];

    arrayChange[index] = {
      ...arrayChange[index],
      status: !arrayChange[index].status,
    };
    this.setState({
      tasks: arrayChange,
    });

    localStorage.setItem("tasks", JSON.stringify(arrayChange));
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
      // React.memo của Component Table sẽ không re-render khi nhận địa chỉ ô nhớ cũ. Ta phải truyền vào 1 địa chỉ ổ nhớ mới thì mới re-render
      tasks: [...tasks],
    });
    // Đã tìm ra được nguyên nhân khiến Table không re-render khi sử dụng HOC React.memo
    // Lý do: giá trị thay đổi phải là 1 state khác (Không được sử dụng refenrence để ghi đè giá trị cũ) (Phải tìm hiểu kỹ hơn)
    // Cái tasks tham số là nguyên nhân khiến table không re-render
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

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
              <Control />
              <div className='row mt-15'>
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                  <Table
                    tasks={this.state.tasks}
                    toggleStatus={this.toggleStatus}
                  />
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
