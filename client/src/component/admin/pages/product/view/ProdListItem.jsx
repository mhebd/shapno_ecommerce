import React from 'react';
import { Link } from 'react-router-dom';

function ProdListItem({ product, onClickHdl }) {
  const { title, image, _id, category } = product;

  return (
    <tr>
      <td>
        <img src={`../../uploads/product/${image}`} alt={title} />
      </td>
      <td>{title}</td>
      <td>{category?.name}</td>
      <td>
        <Link to={`/admin/product/createNupdate?pid=${_id}`} className="btn edit-btn">
          Edit
        </Link>
      </td>
      <td>
        <button type="button" onClick={() => onClickHdl(_id)} className="btn remove-btn">
          Remove
        </button>
      </td>
    </tr>
  );
}

export default ProdListItem;
