import React, { useReducer, useState } from 'react'

function DemoUseReducer() {
    const [initCount, setCount] = useState(10);

    //sử dụng reducer
    const reducer = (state, action) => {
        switch(action){
            case "UP_ACTION":
                return state+1;
            case "DOWN_ACTION":
                return state-1;
            default:
                return state;
        }
    }
    //useReducer in hook
    const [count,dispatchEvent] = useReducer(reducer, initCount);

    return (
        <div>
            <h2>Demo Reducer / useReducer</h2>
            <h3 className='alert alert-danger'>Current Count: {count}</h3>
            <button onClick={()=>dispatchEvent('UP_ACTION')}>Up</button>
            <button onClick={()=>dispatchEvent('DOWN_ACTION')}>Down</button>
        </div>
    )
}

export default DemoUseReducer