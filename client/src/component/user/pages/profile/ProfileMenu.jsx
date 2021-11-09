/* eslint-disable no-underscore-dangle */
import React from 'react';
import MenuLink from '../../reusable/MenuLink';

function ProfileMenu({ uInfo, id }) {
  return (
    <div className="profile-nav mt-3">
      <ul className="profile-menu">
        {uInfo && id && <MenuLink link={`/profile/about?uid=${uInfo._id}`}>About</MenuLink>}

        {uInfo && !id && (
          <>
            <MenuLink link="/profile/about">About</MenuLink>
            <MenuLink link="/profile/contact-info">Contact Info</MenuLink>
            <MenuLink link="/profile/cartlist">Cart List</MenuLink>
            <MenuLink link="/profile/orderlist">Order List</MenuLink>
            <MenuLink link="/profile/edit-profile">Edit Profile</MenuLink>
            <MenuLink link="/profile/change-avatar">Change Avatar</MenuLink>
          </>
        )}
      </ul>
    </div>
  );
}

export default ProfileMenu;
