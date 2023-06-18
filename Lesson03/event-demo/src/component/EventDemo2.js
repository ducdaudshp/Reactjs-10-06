import React, { Component } from 'react'

export default class EventDemo2 extends Component {

constructor(props){
    super(props);
    //tổ chức dữ liệu trong state
    this.state = {
        name: "Trung Đức",
        age: 24,
        job: "DevSoft",
    }
}

handleChangeState = () => {
    console.log(this.props.name)
    this.setState({
        name: this.props.name === undefined ? this.state.name : this.props.name,
        age: 55,
        job: "Pro Reactjs Job"
    })
}

  render() {
    return (
      <div>
        <h2>Sử dụng props, state với Event</h2>
        <div className='alert alert-success'>
            <p>{this.state.name} - {this.state.age} - {this.state.job}</p>
        </div>
        <button className='btn btn-danger' onClick={this.handleChangeState}>
            Event-Change State
        </button>
      </div>
    )
  }
}
