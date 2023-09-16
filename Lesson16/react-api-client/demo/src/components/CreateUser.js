import React, {useState} from 'react'
import axios from '../api/api-data'
// import {useNavigate} from 'react-router-dom'

export default function CreateUser() {
    // const [id, setId] = useState(0)
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    // const navigate = useNavigate();

    //hàm xử lý sự kiện thêm mới
    const handleCreateUser = async () => {
        //gọi phương thức post của api
        axios.post("user",{username,password});
        // navigate("/");
    }
    return (
        <div className='form'>
            <h2>Create User</h2>
            <div className="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">UserName</span>
                <input type="text" class="form-control" 
                    placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" 
                    onChange={(event)=>setUserName(event.target.value)}/>
            </div>
            <div className="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Password</span>
                <input type="text" class="form-control" 
                    placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"
                    onChange={(ev)=> setPassword(ev.target.value)} />
            </div>
            <button className='btn btn-primary' onClick={handleCreateUser}>Create</button>
        </div>
    )
}
