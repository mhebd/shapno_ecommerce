/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { useAuth } from '../../../../../context/user/AuthProvider';
import Loading from '../../../reusable/Loading';
import ProfInfoGroup from '../../../reusable/ProfInfoGroup';
import Profile from '../Profile';

function Contact(props) {
  // eslint-disable-next-line no-unused-vars
  const { isLoading, isAuthenticated, user, loadUser } = useAuth();

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Profile {...props}>
      <div className="ci-wrap">
        <h3 className="pb-heading hbbd">Contact Information</h3>
        {isLoading && <Loading />}
        {!isLoading && user && user.contact.address1 && (
          <ProfInfoGroup label="User Address Line One" info={user.contact.address1} />
        )}
        {!isLoading && user && user.contact.address2 && (
          <ProfInfoGroup label="User Address Line Two" info={user.contact.address2} />
        )}
        {!isLoading && user && user.contact.country && (
          <ProfInfoGroup label="User Country" info={user.contact.country} />
        )}
        {!isLoading && user && user.contact.city && (
          <ProfInfoGroup label="User City" info={user.contact.city} />
        )}
        {!isLoading && user && user.contact.zipCode && (
          <ProfInfoGroup label="User Zip Code" info={user.contact.zipCode} />
        )}
      </div>
    </Profile>
  );
}

export default Contact;
