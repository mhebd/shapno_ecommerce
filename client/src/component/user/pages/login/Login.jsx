/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import loginbg from '../../../../images/login.png';
import UserLayout from '../../common/UserLayout';
import LoginForm from './LoginForm';

function Login(props) {
  return (
    <UserLayout>
      <div className="login-wrap" style={{ backgroundImage: `url(${loginbg})` }}>
        <LoginForm {...props} />
      </div>
    </UserLayout>
  );
}

export default Login;
