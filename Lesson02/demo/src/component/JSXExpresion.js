import React from 'react'

function JSXExpresion() {
    //arrow function
    const formatName = (user) => {
        return user.firstName + ' ' + user.lastName;
    }
//function
    function sayWellcome(name){
        if (name) {
            return <p>Wellcome to {name}</p>
        }
        else {
            return <p>Wellcome!</p>
        }
    }

//Sử dụng giá trị cho thuộc tính
// const anhLogo = (
//     <>
//     <div>
//         <img src='/images/logo.png' alt='Devmaster' />
//     </div>
//     <div>
//         <img src={logo} alt='Việc công nghệ'/>
//     </div>
//     </>
// )

    //Khởi tạo đối tượng
    const users = {
        firstName: "Đức",
        lastName: "Nguyễn",
        age: 24
    }
    
    //tạo biến
    const name = "devmaster.edu.vn"

    //jsx element
    const element = (
        <div>
            <h3>Xin chào, {formatName(users)} </h3>
            <h4>Tuổi: {users.age}</h4>
            {/* sử dụng biến */}
            <h5>Website của bạn <span style={{color: "red", "fontSize": "20px"}}>{name}</span></h5>
        </div>
    )

  return (
    <div>
        <h2>JSXExpresion - Biểu thức JSX</h2>
        <br/>
        {element}
        {sayWellcome("Đức")}
        {sayWellcome()}
    </div>
  )
}

export default JSXExpresion