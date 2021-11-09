/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import UserLayout from '../../common/UserLayout';
import ProfileHeader from './ProfileHeader';

function Profile(props) {
  return (
    <UserLayout>
      <div className="box profile-box">
        <div className="grid-row">
          <ProfileHeader {...props} />

          <div className="col-s9">
            <div className="profile-body">{props.children}</div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

export default Profile;
