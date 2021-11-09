/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../../context/user/AuthProvider';
import Loading from '../../reusable/Loading';

function CheckOutUserInfo() {
  const [uInfo, setUInfo] = useState({});

  const { loadUser, isLoading, user } = useAuth();

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setUInfo(user);
  }, [user]);

  return (
    <div className="order-user-infos ny-3">
      {isLoading && <Loading />}
      {!isLoading && uInfo && uInfo.contact && (
        <div className="s-address mb-3">
          <h3 className="heading">Shippig Address</h3>
          <p>
            <span>{uInfo?.contact.address1} </span>
            <span>{uInfo?.contact.address2} </span>
            <span>{uInfo?.contact.city} </span>
            <span>{uInfo?.contact.zipCode} </span>
            <span>{uInfo?.contact.country} </span>
          </p>
        </div>
      )}
      {!isLoading && uInfo && uInfo.contact && (
        <div className="b-address">
          <h3 className="heading">Billing Address</h3>
          <p>
            <span>{uInfo?.contact.address1} </span>
            <span>{uInfo?.contact.address2} </span>
            <span>{uInfo?.contact.city} </span>
            <span>{uInfo?.contact.zipCode} </span>
            <span>{uInfo?.contact.country} </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default CheckOutUserInfo;
