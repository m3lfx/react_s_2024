import React from 'react'

import { Link } from 'react-router-dom';
const Nav = ({title, name}) => {
    // console.log(props.title, props.name)
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
                {/* <h1>{props.name}</h1> */}
                 {(name === undefined) ? <h1>no name</h1> : <h2>{name}</h2>} 
            </ul>
        </nav>
    )
}

export default Nav