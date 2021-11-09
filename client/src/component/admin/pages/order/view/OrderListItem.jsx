import React from 'react';
import { Link } from 'react-router-dom';

function OrderListItem({ order, index, deleteOrder }) {
  const { created, totalPrice, status, _id } = order;
  return (
    <tr>
      <td className="pl-1">{index + 1 < 10 ? `0${index + 1}` : index + 1}</td>
      <td>{new Date(created).toDateString()}</td>
      <td>{new Date(created).toLocaleTimeString()}</td>
      <td>{status}</td>
      <td>${totalPrice}</td>
      <td>
        <Link to={`/admin/order/update?oid=${_id}`} className="btn edit-btn">
          Update
        </Link>
      </td>
      <td>
        <button type="button" onClick={() => deleteOrder(_id)} className="btn remove-btn">
          Remove
        </button>
      </td>
    </tr>
  );
}

export default OrderListItem;
