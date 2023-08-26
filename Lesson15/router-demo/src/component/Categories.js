import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Categories() {
    const activeClass = ({isActive}) => {
        return isActive ? 'group-item selected' : 'group-item';
    }

    const activeStyle = ({isActive}) => {
        return {
            backgroundColor: isActive ? 'yellow' : 'red',
            color: isActive ? 'blue' : 'yellow',
        }
    }

    return (
        <div>
            <h2>Danh mục: Categories</h2>
            <ul>
                <li>
                    <NavLink to={'program'} className={activeClass} style={activeStyle}>
                        Khóa học lập trình
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'kid'} className={activeClass} style={activeStyle}>
                        Khóa học lập trình cho trẻ em
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'network'} className={activeClass} style={activeStyle}>
                        Khóa học quản trị mạng
                    </NavLink>
                </li>
            </ul>
            <div className='alert alert-danger'>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
