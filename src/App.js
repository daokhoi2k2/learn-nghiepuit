import React, { useState } from "react";
import { Component } from "react/cjs/react.production.min";
import Control from "./components/Control";
import Table from "./components/Table";
import TaskForm from "./components/TaskForm";

class App extends Component {
  
  render() {
    return (
      <>
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
              <button type='button' className='btn btn-primary mt-3 mb-3'>
                <span className='fa fa-plus mr-5' />
                Thêm Công Việc
              </button>
              <Control />
              <div className='row mt-15'>
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                  <Table />
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
