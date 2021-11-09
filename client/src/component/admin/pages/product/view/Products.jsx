import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../common/AdminLayout';
import ProductList from './ProductList';

function Products() {
  return (
    <AdminLayout>
      <div id="product">
        <div className="page-header">
          <h3 className="as-heading">Products</h3>
          <Link to="/admin/product/createNupdate" className="btn pc-btn">
            Add Product
          </Link>
        </div>
        <ProductList />
      </div>
    </AdminLayout>
  );
}

export default Products;
