import React, {useState, useEffect} from 'react'
import { getUser, logout } from './helper';

import { Link, useNavigate,  } from 'react-router-dom';
const Nav = ({ title,}) => {
    // console.log(props.title, props.name)
    const [name, setName] = useState('')
    let navigate = useNavigate()

    // useEffect(() => {
    //     getUser() && navigate('/');
    // }, []);

    return (
        <nav>
            <ul className="nav nav-tabs">
                <li className="nav-item pr-3 pt-3 pb-3">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item pr-3 pt-3 pb-3">
                    <Link to="/create">Create</Link>
                </li>
                <h1>{title}</h1>
                
                {!getUser() ? (
                    <li className="nav-item ml-auto pr-3 pt-3 pb-3">
                        <Link to="/login">Login</Link>
                    </li>) : <li
                        onClick={() => logout(() => navigate('/'))}
                        className="nav-item ml-auto pr-3 pt-3 pb-3"
                        style={{ cursor: 'pointer' }}
                    >
                    Logout
                   
                </li>}
            </ul>
        </nav>
    )
}

export default Nav