import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../common/AdminLayout';
import PageList from './PageList';

function Pages() {
  return (
    <AdminLayout>
      <div id="page">
        <div className="page-header">
          <h3 className="as-heading">Pages</h3>
          <Link to="/admin/page/createNupdate" className="btn pc-btn">
            Add Page
          </Link>
        </div>
        <PageList />
      </div>
    </AdminLayout>
  );
}

export default Pages;
