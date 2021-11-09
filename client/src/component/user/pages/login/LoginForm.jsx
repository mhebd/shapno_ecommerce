/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useAuth } from '../../../../context/user/AuthProvider';
import Button from '../../reusable/Button';
import InputGroup from '../../reusable/InputGroup';

function LoginForm({ history }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { loginUser, isAuthenticated, loadUser, message } = useAuth();

  const { email, password } = formData;

  const onChangeHdl = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const submitHdl = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.warning('All the field is required.');
    } else if (password.length < 6) {
      toast.warning('Passwrod is too short.');
    } else {
      loginUser(formData);
    }
  };

  // useEffect(() => {
  //   loadUser();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [history, isAuthenticated]);

  useEffect(() => {
    if (message) {
      toast[message.status](message.message);
    }
  }, [message]);

  return (
    <form onSubmit={(e) => submitHdl(e)} className="login-form mx-auto">
      <h2 className="form-heading">Login Your Account</h2>

      <InputGroup
        type="email"
        name="email"
        placeholder="Your Email"
        value={email}
        onChange={onChangeHdl}
        label="Enter your email"
      />

      <InputGroup
        type="password"
        name="password"
        placeholder="Your Passwrod"
        value={password}
        onChange={onChangeHdl}
        label="Enter your password"
      />

      <p className="mb-3">
        Not Have An Accoutn?
        <Link to="/signup"> Signup Now.</Link>
      </p>

      <Button type="submit" classes="submit-btn">
        Login
      </Button>

      <ToastContainer />
    </form>
  );
}

export default LoginForm;
