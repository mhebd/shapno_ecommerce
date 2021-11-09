/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../../context/user/AuthProvider';
import ProfileMenu from './ProfileMenu';

function ProfileHeader({ match }) {
  const { id } = match.params;
  const [uInfo, setUInfo] = useState(null);
  const { getUser, userById, isLoading, user, loadUser } = useAuth();

  useEffect(() => {
    if (id) {
      getUser(id);
    } else {
      loadUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (id) {
      setUInfo(userById);
    } else {
      setUInfo(user);
    }
  }, [userById, id, user]);

  return (
    <div className="col-s3">
      <div className="profile-header">
        {!isLoading && uInfo && (
          <div className="user-root-info pb-3">
            <img
              src={uInfo.avatar ? `../../uploads/user/${uInfo.avatar}` : uInfo.gravatar}
              className="mb-3"
              alt=""
            />
            <h3 className="name text-center px-2">{uInfo.name}</h3>
            <p className="text-center px-2">
              <small>{uInfo.phone}</small>
            </p>
          </div>
        )}
        {!isLoading && uInfo && <ProfileMenu uInfo={uInfo} id={id} />}
      </div>
    </div>
  );
}

export default ProfileHeader;
