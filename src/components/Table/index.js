import React from "react";
import { Component } from "react/cjs/react.production.min";
import TaskItem from "../TaskItem";

class Table extends Component {
  render() {
    return (
      <table className='table table-bordered table-hover'>
        <thead>
          <tr>
            <th className='text-center'>STT</th>
            <th className='text-center'>Tên</th>
            <th className='text-center'>Trạng Thái</th>
            <th className='text-center'>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            <td>
              <input type='text' className='form-control' />
            </td>
            <td>
              <select className='form-control'>
                <option value={-1}>Tất Cả</option>
                <option value={0}>Ẩn</option>
                <option value={1}>Kích Hoạt</option>
              </select>
            </td>
            <td />
          </tr>
          {
            this.props.tasks.map((item, index) => {
              return <TaskItem key={item.id} stt={index} name={item.name} status={item.status} id={item.id} toggleStatus={() => this.props.toggleStatus(item.id)} />
            })
          }
        </tbody>
      </table>
    );
  }
}

export default React.memo(Table);
