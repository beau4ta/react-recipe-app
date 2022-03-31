import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import API from '../../src/utils/api';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        API.signIn({
            username: username,
            password: password
        })
        .then(res => {
            console.log(res)
            window.location.replace('/')
        })
        .catch(err => console.log(err))
    };

    return(
        <div>
            <Form>
                <h2>Welcome Back!</h2>
                <label>Username</label>
                <input
                type='username'
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)} 
                />
                <label>Password</label>
                <input
                type='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)} 
                />
                <button
                onClick={handleLogin}
                >Log In!</button>
                <Link to='/signup'>Don't have an account? Sign up!</Link>
            </Form>
        </div>
    )
}

const Form = styled.div`
    margin: 2rem 10rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: black 2px solid;
    border-radius: 5px;

    h2{
        color: black;
        padding-bottom: 1rem;
    }
    label{
        margin: 0.6rem;
    }
    button{
        margin: 0.6rem;
    }
`

export default Login;