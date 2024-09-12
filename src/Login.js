
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { authenticate, getUser } from './helper';
import Nav from './Nav';
const Login = () => {
    const [state, setState] = useState({
        name: '',
        password: ''
    });
    let navigate = useNavigate()
    const { name, password } = state;
    const handleChange = name => event => {
        // console.log('name', name, 'event', event.target.value);
        setState({ ...state, [name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.table({ name, password });
        axios
            .post(`${process.env.REACT_APP_API}/login`, { name, password })
            .then(response => {
                console.log(response);
                // empty state
                setState({ ...state, name, password });
                // show sucess alert
                authenticate(response, () => navigate("/create"));
            })
            .catch(error => {
                console.log(error.response);
                alert(error.response.data.error);
            });
    };

    useEffect(() => {
        getUser() && navigate('/');
    }, []);

    return (
        <div className="container pb-5">
            <Nav />
            <br />
            <h1>LOGIN</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="text-muted">Name</label>
                    <input
                        onChange={handleChange('name')}
                        value={name}
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="text-muted">Password</label>
                    <input
                        onChange={handleChange('password')}
                        value={password}
                        type="password"
                        className="form-control"
                        placeholder="Your Password"
                        required
                    />
                </div>
                <div>
                    <button className="btn btn-primary">login</button>
                </div>
            </form></div>
    )
}

export default Login