import React from "react";

function FuncDemo(props) {
    return(
        <>
        <h2>Function Component Demo</h2>
        <p>Wellcome to, {props.name}</p>
        <p>Address: {props.address}</p>
        <p>Company: {props.company}</p>
        </>
    )
}

export default FuncDemo;