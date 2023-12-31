import React, { Component } from 'react'
import Student from './Student'

export default class ListStudent extends Component {

    //hàm xử lý cho sự kiện xem
    handleView = (toggle, actionName, student) => {
        this.props.onView(toggle, actionName, student);
    }

    handleUpdate = (toggle, actionName, student) => {
        this.props.onUpdate(toggle, actionName, student);
    }

    handleDelete = (student) => {
        this.props.onDelete(student);
    }

    render() {
        let {renderStudents} = this.props;
        //render du lieu vao cac student
        let elementStudent = renderStudents.map((student,index) => {
            return <Student 
                key={index} 
                renderStudent={student} 
                stt={index+1} 
                onView={this.handleView}
                onUpdate={this.handleUpdate}
                onDelete={this.handleDelete}
                />
        })
        return (
            <>
                <div className="card-body">
                    <h3 className="card-title">Danh sách sinh viên</h3>
                    <div className="table-responsive pt-3">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Mã sinh viên</th>
                                    <th>Tên sinh viên</th>
                                    <th>Tuổi</th>
                                    <th>Giới tính</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Student */}
                                {elementStudent}
                                 {/* Student */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}
