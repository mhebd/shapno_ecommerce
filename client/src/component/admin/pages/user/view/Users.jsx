import React from 'react';
import AdminLayout from '../../../common/AdminLayout';
import UserList from './UserList';

function Users() {
  return (
    <AdminLayout>
      <div id="user">
        <div className="page-header">
          <h3 className="as-heading">Users</h3>
        </div>
        <UserList />
      </div>
    </AdminLayout>
  );
}

export default Users;
