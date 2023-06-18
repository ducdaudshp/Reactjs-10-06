import './App.css';
import React, { Component } from 'react'
import Control from './component/Control';
import ListStudent from './component/ListStudent';
import Form from './component/Form';

export class App extends Component {
  constructor(props){
    super(props);
    //quan ly du lieu trong state
    this.state = {
      students : [
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" }
      ], //mang ds sinh vien
      isToggle: false, //quản lý trạng thái ẩn/hiện form
      actionName: "", //thuộc tính xử lý hiển thị nút submit trên form
      student: "", // quản lý đối tượng dữ liệu cho Form
    }
  }

  //xử lý sự kiện
  hanldeAddOrUpdate = (toggle, actionName, student) => {
    this.setState({
      isToggle: toggle,
      actionName: actionName,
      student: student,
    })
  };

  //hàm xử lý sự kiện submit form
  handleSubmit = (toggle, actionName) => {
    this.hanldeAddOrUpdate(toggle, actionName);
  }

  render() {
    let {students} = this.state;
    // ẩn/hiện form theo isToggle
    let elementForm = (this.state.isToggle === true) ? 
        <Form renderActionName={this.state.actionName}
              onSubmit={this.handleSubmit}
              renderStudents={this.state.student}
        /> : ""
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* Control */}
              <Control 
                onAdd={this.hanldeAddOrUpdate}
              />
              {/* Control */}
              {/* ListStudent */}
              <ListStudent 
                renderStudents={students} 
                onView={this.hanldeAddOrUpdate}
                onUpdate={this.hanldeAddOrUpdate} />
              {/* ListStudent */}
            </div>
          </div>
          <div className="col-5 grid-margin">
            {/* form */}
            {elementForm}
            {/* form */}
          </div>
        </div>
      </div>
    )
  }
}

export default App;