import React from 'react'

function Member(props) {
  return (
    <div style={{border: "1px solid red"}}>
        <h2>Member Info</h2>
        <p>Name: {props.name}</p>
        <p>Address: {props.address}</p>
    </div>
  )
}

export default Member