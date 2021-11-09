/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../../../context/user/AuthProvider';
import Loading from '../../../reusable/Loading';
import ProfInfoGroup from '../../../reusable/ProfInfoGroup';
import Profile from '../Profile';

function About(props) {
  const { id } = props.match.params;
  const [uInfo, setUInfo] = useState(null);
  // eslint-disable-next-line no-unused-vars
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
  }, [id, user, userById]);
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Profile {...props}>
      <div className="gi-wrap">
        <h3 className="pb-heading hbbd">General Information</h3>
        {isLoading && <Loading />}
        {!isLoading && uInfo && (
          <>
            {uInfo.name && <ProfInfoGroup label="User Name" info={uInfo.name} />}
            {uInfo.email && <ProfInfoGroup label="User Email" info={uInfo.email} />}
            {uInfo.phone && <ProfInfoGroup label="User Phone" info={uInfo.phone} />}
            {uInfo.age && <ProfInfoGroup label="User Age" info={uInfo.age} />}
            {uInfo.sex && <ProfInfoGroup label="User Sex" info={uInfo.sex} />}
          </>
        )}
      </div>
    </Profile>
  );
}

export default About;
