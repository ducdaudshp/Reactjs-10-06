import React, { Component } from 'react'

export default class EventFormControl2 extends Component {

constructor(props){
    super(props);
    this.state = {
        course: 'css'
    };
};
//khi thay đổi dữ liệu trên form
hanldeChange = (e) => {
    this.setState({
        course: e.target.value
    });
}
//xử lý sự kiện khi submit form
hanldeSubmit = (e) => {
    alert("Khóa học bạn đã chọn là " + this.state.course);
    e.preventDefault();
}

  render() {
    return (
      <div>Event form Select
        <form onSubmit={this.hanldeSubmit}>
            <lable>
                Chọn khóa học:
                <select value={this.state.course} onChange={this.hanldeChange}>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="js">JavaScript</option>
                    <option value="reactjs">Reactjs</option>
                </select>
            </lable>
            <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}
