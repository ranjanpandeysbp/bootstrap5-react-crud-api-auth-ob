import React, { useState, useContext } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config/constant';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { state, dispatch } = useContext(UserContext);

    const login = (event) => {
        event.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const reqData = {
            email: email,
            password: password
        }
        axios.post(`${API_BASE_URL}/users`, reqData, config)
            .then((response) => {
                //Assume user has sucessfully authenticated
                //Fetch the details of Authenticated user, In our case assume userId=1
                const userId = 1;
                fetch(`${API_BASE_URL}/users/${userId}`)
                    .then((response) => response.json())
                    .then((json) => {

                        localStorage.clear();
                        localStorage.setItem('user', JSON.stringify(json));
                        localStorage.setItem('token', 'hfsdbvgdsdfhdfh');

                        const token = localStorage.getItem('token');
                        const user = JSON.parse(localStorage.getItem('user'));
                        const userState = { 'token': token, 'user': user };
                        const action = { type: 'LOGIN', payload: userState };

                        dispatch(action);

                        navigate('/posts');
                    });
            })
            .catch((err) => {
                console.log(err)
            });
    }

    return (
        <div className='container'>
            <h3 className='text-center text-uppercase pt-4'>Please login below</h3>
            <div className='mx-auto contact-form-container text-muted shadow-sm rounded p-3 lh-2'>
                <form onSubmit={(e) => login(e)}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" required />
                    </div>
                    <div className='d-grid'>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login