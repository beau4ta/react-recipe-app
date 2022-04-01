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
                <Link to='/signup'><h3>Don't have an account? Sign up!</h3></Link>
            </Form>
        </div>
    )
};

const Form = styled.div`
    margin: 2rem 10rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: black 2px solid;
    border-radius: 1rem;
    background: linear-gradient(35deg, #494949, #313131);
    
    h2{
        color: white;
        padding-bottom: 1rem;
    }
    h3{
        color: white;
        margin: 0.5rem;
    }
    h3:hover{
        transform: scale(1.05);
        text-shadow: black 5px 5px;
    }
    label{
        margin: 0.6rem;
        color: white;
    }
    input{
        width: 30%;
        padding: 0.5rem;
        border-radius: 0.3rem;
    }
    button{
        margin: 0.6rem;
        padding: 0.3rem;
        color: white;
        border-radius: 0.3rem;
        background: linear-gradient(35deg, #494949, #313131);
    }
    button:hover{
        background: linear-gradient(to right, #f27121, #e94057);
        transform: scale(1.05);
        cursor: pointer;
    }
`
export default Login;