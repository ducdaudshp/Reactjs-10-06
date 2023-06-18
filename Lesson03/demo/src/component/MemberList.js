import React, { Component } from 'react'
import MemberInfo from './MemberInfo';

class MemberList extends Component {
  render() {
    const member = {
        path: "/images/download.jpeg",
        name: "Trung Đức",
        age: 24
      }
    
    const elementMember = (
        <>
        <MemberInfo info={member} />
        <MemberInfo info={member} />
        <MemberInfo info={member} />
        </>
    )  

    return (
      <div>
        <h2>Danh sách thành viên</h2>
        {elementMember}
      </div>
    )
  }
}

export default MemberList;