import React, { Component } from 'react'
import Avatar from './Avatar';

class MemberInfo extends Component {
  render() {
    return (
      <div style={{border: "1px solid blue"}}>
        <Avatar link={this.props.info.path} />
        <p>Tên: {this.props.info.name}</p>
        <p>Tuổi: {this.props.info.age}</p>
      </div>
    )
  }
}

export default MemberInfo;