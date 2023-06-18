import React, { Component } from 'react'

class ClassComp extends Component {
  render() {
    return (
      <div>
        <h2>Class Component Review</h2>
        <div style={{border: "1px solid #444"}}>
            <p>Name: {this.props.name}</p>
            <p>Age: {this.props.age}</p>
        </div>
      </div>
    )
  }
}

export default ClassComp;
