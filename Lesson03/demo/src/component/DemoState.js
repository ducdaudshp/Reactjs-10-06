import React, { Component } from 'react'

export default class DemoState extends Component {
constructor(props) {
    super(props)
    //Đối tượng state
    this.state = {
        name: "Devmaster",
        age: 6,
        address: "25 Vũ Ngọc Phan"
    }
}
handleChangName = () => {
    //cập nhật lại name trong state
    this.setState({
        name: "Trung Đức",
    })
}
  render() {
    return (
      <div>
        <h2>Sử dụng dữ liệu trong state</h2>
        <div style={{border: "2px solid green", background: "cyan"}}>
            <p>Name: {this.state.name}</p>
            <p>Age: {this.state.age}</p>
            <p>Address: {this.state.address}</p>
        </div>
        <button onClick={this.handleChangName}>Change Name</button>
      </div>
    )
  }
}
