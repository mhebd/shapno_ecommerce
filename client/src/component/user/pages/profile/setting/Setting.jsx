/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useAuth } from '../../../../../context/user/AuthProvider';
import Loading from '../../../reusable/Loading';
import Profile from '../Profile';
import SettingForm from './SettingForm';

function Setting(props) {
  // eslint-disable-next-line no-unused-vars
  const { isLoading, isAuthenticated, user, loadUser, updateUser, message } = useAuth();

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (message) {
      toast[message.status](message.message);
    }
  }, [message]);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Profile {...props}>
      <div className="ci-wrap">
        <h3 className="pb-heading hbbd">Edit Your Profile</h3>
        {isLoading && <Loading />}
        {!isLoading && user && <SettingForm user={user} update={updateUser} />}
      </div>
      <ToastContainer />
    </Profile>
  );
}

export default Setting;
