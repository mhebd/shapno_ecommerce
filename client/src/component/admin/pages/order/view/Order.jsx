import React from 'react';
import AdminLayout from '../../../common/AdminLayout';
import OrderList from './OrderList';

function Order() {
  return (
    <AdminLayout>
      <div id="order">
        <div className="page-header">
          <h3 className="as-heading">Orders</h3>
        </div>
        <OrderList />
      </div>
    </AdminLayout>
  );
}

export default Order;
