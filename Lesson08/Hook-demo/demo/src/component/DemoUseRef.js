import React, { useRef, useState } from 'react'

function DemoUseRef() {
    const [count, setCount] = useState(60);
    const timerId = useRef(); //dùng useRef gán giá trị cho biến timerId

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount-1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current);
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default DemoUseRef