import React from 'react'

function EventDemo1(props) {
    
    const eventHanldeClick1 = () => {
        alert("Button Click 1")
    }

    const eventHanldeClick2 = () => {
        alert("Button Click 2")
    }

    const eventHanldeClick3 = (param) => {
        alert(param)
    }

    const eventHanldeClick4 = () => {
        alert("Wellcome to " + props.name)
    }

  return (
    <div>
        <h2>Xử lý sự kiện - không có tham số / có tham số</h2>
        <button className='btn btn-primary m-2 px-4'
        //thực hiện sự kiện khi load - 1 lần duy nhất
                // onClick={eventHanldeClick1()}
        >
            Button 1
        </button>
        <button className='btn btn-success m-2 px-4'
        //Phát sinh khi người dùng tương tác
                onClick={eventHanldeClick2}>
            Button 2
        </button>
        <button className='btn btn-warning m-2 px-4'
        //Phát sinh khi người dùng tương tác - có tham số
                onClick={() => eventHanldeClick3("My click here")}>
            Button 3
        </button>
        <button className='btn btn-danger m-2 px-4'
        //props
                onClick={eventHanldeClick4}>
            Button 4
        </button>
    </div>
  )
}

export default EventDemo1