import React, { Component } from 'react'

export default class EventFormControl extends Component {
    constructor (props) {
        super(props);
        this.state = {
            studentName: ""
        }
    }
    //khi thay đổi dữ liệu trên form, cập nhật lại state
    hanleChange = (e) => {
        //lấy giá trị trên form
        let val = e.target.value;
        this.setState({
            studentName:val,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state.studentName);
    }
  render() {
    return (
      <div>
        <form>
            Tên sinh viên:
            <input value={this.state.studentName}
                onChange={this.hanleChange}
            />
            <br/>
            <button onClick={this.handleSubmit}>Submit</button>
            {/* <button onClick={(event) => this.handleSubmit}>Submit</button> */}
        </form>
      </div>
    )
  }
}
