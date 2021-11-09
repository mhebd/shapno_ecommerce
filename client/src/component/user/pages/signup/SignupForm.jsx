/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useAuth } from '../../../../context/user/AuthProvider';
import Button from '../../reusable/Button';
import InputGroup from '../../reusable/InputGroup';

function SignupForm({ history }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { userSignup, isAuthenticated, loadUser, message } = useAuth();

  const { name, email, password, password2 } = formData;

  const onChangeHdl = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const submitHdl = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !password2) {
      toast.warning('All the field is required.');
    } else if (password.length < 6) {
      toast.warning('Passwrod is too short.');
    } else if (password !== password2) {
      toast.warning('Passwrod & Confirm password did not match.');
    } else {
      userSignup(formData);
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
  }, [isAuthenticated, history]);

  useEffect(() => {
    if (message) {
      toast[message.status](message.message);
    }
  }, [message]);

  return (
    <form onSubmit={(e) => submitHdl(e)} className="signup-form mx-auto">
      <h2 className="form-heading">Create A New Account</h2>

      <InputGroup
        type="text"
        name="name"
        placeholder="Your Name"
        value={name}
        onChange={onChangeHdl}
        label="Enter Your Name"
      />

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

      <InputGroup
        type="password"
        name="password2"
        placeholder="Re-type Passwrod"
        value={password2}
        onChange={onChangeHdl}
        label="Confirm Your Password"
      />

      <p className="mb-3">
        Already Have An Account?
        <Link to="/login"> Login Now</Link>
      </p>

      <Button type="submit" classes="submit-btn">
        Login
      </Button>
      <ToastContainer />
    </form>
  );
}

export default SignupForm;
