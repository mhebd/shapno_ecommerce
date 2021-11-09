import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useAuth } from '../../../../../context/user/AuthProvider';
import Loading from '../../../../user/reusable/Loading';
import UserListItem from './UserListItem';

function UserList() {
  const [allUser, setAllUser] = useState([]);
  const { getAllUser, users, isLoading, deleteUser, message } = useAuth();

  useEffect(() => {
    getAllUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setAllUser(users);
  }, [users]);

  useEffect(() => {
    if (message) {
      toast[message.status](message.message);
    }
  }, [message]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <table id="list-table" className="cat-tabel my-3 p-2 pb-3">
          <thead>
            <tr>
              <th>Image</th>
              <th>name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading &&
              allUser.length > 0 &&
              allUser.map((user) => (
                <UserListItem key={Math.random()} onClickHdl={deleteUser} user={user} />
              ))}
          </tbody>
        </table>
      )}
      <ToastContainer />
    </>
  );
}

export default UserList;
