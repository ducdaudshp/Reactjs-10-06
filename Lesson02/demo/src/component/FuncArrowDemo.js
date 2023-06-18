import React from "react";

const FuncArrowDemo = (props) => {
    return(
        <>
            <h2>Arrow Function Component Demo</h2>
            <p>Dữ liệu từ props:
                Name: {props.name} <br/>
                <b>Module: {props.module}</b>
            </p>
        </>
    )
}

export default FuncArrowDemo;