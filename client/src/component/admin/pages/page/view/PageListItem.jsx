import React from 'react';
import { Link } from 'react-router-dom';

function ProdListItem({ page, onClickHdl, index }) {
  const { title, created, slug } = page;

  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td>{title}</td>
      <td>{new Date(created).toLocaleTimeString()}</td>
      <td>
        <Link to={`/admin/page/createNupdate?slug=${slug}`} className="btn edit-btn">
          Edit
        </Link>
      </td>
      <td>
        <button type="button" onClick={() => onClickHdl(slug)} className="btn remove-btn">
          Remove
        </button>
      </td>
    </tr>
  );
}

export default ProdListItem;
