import React from 'react'

function FuncComp(props) {
  return (
    <>
    <h2>Function Component Review</h2>
    <div>
        <h3>Sử dụng giá trị trong props</h3>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
    </div>
    </>
  )
}

export default FuncComp;