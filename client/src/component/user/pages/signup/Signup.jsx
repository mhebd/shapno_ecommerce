/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import signupbg from '../../../../images/illustration-4.png';
import UserLayout from '../../common/UserLayout';
import SignupForm from './SignupForm';

function Signup(props) {
  return (
    <UserLayout>
      <div className="signup-wrap" style={{ backgroundImage: `url(${signupbg})` }}>
        <SignupForm {...props} />
      </div>
    </UserLayout>
  );
}

export default Signup;
