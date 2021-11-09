import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../common/AdminLayout';
import CategoryList from './CategoryLIst';

function Category() {
  return (
    <AdminLayout>
      <div id="category">
        <div className="page-header">
          <h3 className="as-heading">Categories</h3>
          <Link to="/admin/categories/createNupdate" className="btn cc-btn">
            Add Category
          </Link>
        </div>
        <CategoryList />
      </div>
    </AdminLayout>
  );
}

export default Category;
