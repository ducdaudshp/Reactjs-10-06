import React, { Component } from 'react'

export default class Student extends Component {
    //hàm xử lý khi xem
    hanldeView = (student) => {
        this.props.onView(true, "Close", student);
    }
    //hàm xử lý khi sửa
    hanldeUpdate = (student) => {
        this.props.onUpdate(true, "Edit", student);
    }
    //hàm xử lý khi xóa
    hanldeDelete = (student) => {
        this.props.onDelete(student);
    }

    render() {
        //lay du lieu tu props => hien thi tren cac element
        let {renderStudent,stt} = this.props;
        return (
            <>
                <tr>
                    <td>{stt}</td>
                    <td>{renderStudent.studentId}</td>
                    <td>{renderStudent.studentName}</td>
                    <td>{renderStudent.age}</td>
                    <td>{renderStudent.sex === true | renderStudent === "true" ? "Nam" : "Nữ"}</td>
                    <td>
                        <div className="template-demo">
                            <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                                onClick={() => this.hanldeView(renderStudent)}
                            >
                                Xem
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                                onClick={() => this.hanldeUpdate(renderStudent)}
                            >
                                Sửa
                            </button>
                            <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                                onClick={() => this.hanldeDelete(renderStudent)}
                            >
                                Xóa
                            </button>
                        </div>
                    </td>
                </tr>
            </>
        )
    }
}
