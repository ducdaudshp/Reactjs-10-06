import React, { useState, useEffect } from 'react'
import axios from '../api/api-data'

export default function ListUsers() {
    const [listUser, setListUser] = useState([])

    //lấy dữ liệu từ api
    const getAllUser = async () => {
        let respone = await axios.get("user")
        console.log("Data api User:", respone);
        console.log("Data api User:", respone.data);
        setListUser(respone.data)
    }

    useEffect(() => {
        getAllUser();
    }, []);

    //map dữ liệu ra view
    const elementListUser = listUser.map((item, index) => {
        return (
            <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.username}</td>
                <td>{item.password}</td>
                <td>
                    <button className='btn btn-primary'>Sửa</button>
                    <button className='btn btn-danger'>Xóa</button>
                </td>
            </tr>
        )
    })
    return (
        <div>
            <h2>List Users</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Password</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {elementListUser}
                </tbody>
            </table>
        </div>
    )
}
