import React, { Component } from 'react'

export default class Student extends Component {

    hanldeView = (student) => {
        this.props.onView(true, "Close", student);
    }

    hanldeUpdate = () => {
        this.props.onUpdate(true, "Edit");
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
                    <td>{renderStudent.sex ? "Nam" : "Nữ"}</td>
                    <td>
                        <div className="template-demo">
                            <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                                onClick={()=>this.hanldeView(renderStudent)}
                            >
                                Xem
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                                onClick={this.hanldeUpdate}
                            >
                                Sửa
                            </button>
                            <button
                                type="button"
                                className="btn btn-success btn-icon-text"
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
