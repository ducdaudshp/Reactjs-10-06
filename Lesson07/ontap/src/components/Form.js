import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: "",
      studentName: "",
      age: 0
    }
  }
  componentWillmount = () => {
    let { renderStudent } = this.props;
    this.setState(
      {
        studentId: renderStudent.studentId,
        studentName: renderStudent.studentName,
        age: renderStudent.age
      }
    )
  }
  componentWillReceiveProps = (nextProps) => {
    let { renderStudent } = nextProps;
    this.setState(
      {
        studentId: renderStudent.studentId,
        studentName: renderStudent.studentName,
        age: renderStudent.age
      }
    )
  }

  handleChange = (event) => {
    let name = event.target.name
    let value=event.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    let student = {
      studentId: this.state.studentId,
      studentName: this.state.studentName,
      age: this.state.age
    }
    this.props.onSubmit(student)
  }
  render() {
    return (
      <>
        <form>
          <div>
            <label htmlFor='studentId'>Mã:</label>
            <input name='studentId' id='studentId'
              value={this.state.studentId}
              onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor='studentName'>Họ và tên:</label>
            <input name='studentName' id='studentName'
              value={this.state.studentName}
              onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor='age'>Tuổi:</label>
            <input name='age' id='age'
              value={this.state.age}
              onChange={this.handleChange} />
          </div>
          <button onClick={this.handleSubmit}>Update</button>
        </form>
      </>
    )
  }
}
