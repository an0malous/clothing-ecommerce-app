import React from 'react';
import './login-logout.styles.scss'
import Login from '../../components/login/login.component';
import Register from '../../components/register/register.component';

const LoginLogout = () => (
    <div className='login-logout'>
        <Login />
        <Register />
    </div>
)

export default LoginLogout;