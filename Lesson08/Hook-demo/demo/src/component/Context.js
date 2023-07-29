import React, { useContext } from 'react'
//sử dụng tài nguyên chia sẻ từ component ExampleContext
import { ThemeContext } from './ExampleContext';
import Info from './Info';

function Context() {
    //sử dụng hàm useContext để truy cập đến theme
    const theme = useContext(ThemeContext);

    return (
        <div>
            <h3 className={theme}>Nội dung component Context</h3>
            <Info />
        </div>
    )
}

export default Context