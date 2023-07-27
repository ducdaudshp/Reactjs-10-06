import React, { Component } from 'react'

export default class ListStudent extends Component {

    handleView = (student) => {
        this.props.onView(student)
    }

    handleDelete = (student) => {
        this.props.onDelete(student)
    }

    render() {
        let { renderStudents } = this.props;
        let elementStudent = renderStudents.map((student, index) => {
            return (
                <>
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{student.studentId}</td>
                        <td>{student.studentName}</td>
                        <td>{student.age}</td>
                        <td>
                            <button onClick={() => this.handleView(student)}>
                                Xem
                            </button>
                        </td>
                        <td>
                            <button onClick={() => this.handleDelete(student)}>
                                Xóa
                            </button>
                        </td>
                    </tr>
                </>
            )
        })

        return (
            <>
                <table border={"1px"}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã</th>
                            <th>Tên</th>
                            <th>Tuổi</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elementStudent}
                    </tbody>
                </table>
            </>
        );
    }
}
