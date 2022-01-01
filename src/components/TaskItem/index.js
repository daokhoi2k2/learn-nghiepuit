import React from "react";
import { Component } from "react/cjs/react.production.min";

class TaskItem extends Component {
  render() {
    const { stt, name, status, toggleStatus} = this.props;
    return (
      <tr>
        <td>{stt + 1}</td>
        <td>{name}</td>
        <td className='text-center'>
          <button className={status ? "btn btn-success" : "btn btn-danger"} onClick={toggleStatus} >
            {status ? "Kích hoạt" : "Ẩn"}
          </button>
        </td>
        <td className='text-center'>
          <button type='button' className='btn btn-warning'>
            <span className='fa fa-pencil mr-5' />
            Sửa
          </button>
          &nbsp;
          <button type='button' className='btn btn-danger'>
            <span className='fa fa-trash mr-5' />
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default React.memo(TaskItem);
