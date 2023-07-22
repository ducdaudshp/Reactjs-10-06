import ListStudent from './components/ListStudent';
import React, { Component } from 'react';
import Form from './components/Form';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" }
      ],
      student : "",
    }
  }

  //xem
  handleView = (student) => {
    this.setState({
      student: student
    })
  }
//cập nhật dữ liệu mới
handleSubmit = (student) => {
  console.log(student);
  //cập nhật vào mảng
  let {students} = this.state;
  for (let i = 0; i < students.length; i++) {
    if (students[i].studentId === student.studentId) {
      students[i] = student;
    }
    
  }
  this.setState({
    students: students
  })
}

//xóa 
handleDelete = (student) => {
  let {students} = this.state;
  let listStudent = students.filter( x => x.studentId !== student.studentId)
  this.setState({
    students: listStudent
  })
}
  render() {
    let {students} = this.state
    return (
      <div>
        <h1>Danh sách sinh viên</h1>
        <ListStudent renderStudents={students} onView={this.handleView} onDelete={this.handleDelete}/>
        <Form renderStudent={this.state.student} onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
