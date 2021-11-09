/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useOrder } from '../../../../../context/order/OrderProvider';
import Button from '../../../../user/reusable/Button';
import AdminLayout from '../../../common/AdminLayout';

function UpdateOrder({ location }) {
  const { oid } = queryString.parse(location?.search);
  const [status, setStatus] = useState('created');

  const { updateOrder, getOrder, order, message } = useOrder();

  useEffect(() => {
    getOrder(oid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setStatus(order?.status);
  }, [order]);

  const onChangeHdl = (e) => setStatus(e.target.value);

  const submitHdl = (e) => {
    e.preventDefault();
    if (!status) {
      console.log('Status is required.');
    } else {
      updateOrder(oid, { status });
    }
  };

  useEffect(() => {
    if (message) {
      toast[message.status](message.message);
    }
  }, [message]);

  return (
    <AdminLayout>
      <div id="updateOrder">
        <h3 className="as-heading">Update Order</h3>

        <form className="form" onSubmit={submitHdl}>
          <p className="mb-2">
            <label htmlFor="email">Order Status</label>
          </p>
          <div className="input-group mb-3">
            <select
              name="status"
              value={status}
              onChange={(e) => onChangeHdl(e)}
              onBlur={(e) => onChangeHdl(e)}
            >
              <option value="created">Created</option>
              <option value="accepted">Accepted</option>
              <option value="processing">Processing</option>
              <option value="shipping">Shipping</option>
              <option value="delevered">Delevered</option>
            </select>
          </div>

          <Button type="submit" classes="submit-btn">
            Update
          </Button>
        </form>
        <ToastContainer />
      </div>
    </AdminLayout>
  );
}

export default UpdateOrder;
