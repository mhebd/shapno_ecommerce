import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../user/reusable/Button';

function CatList({ category, index, onClickHdl }) {
  const { name, _id } = category;
  return (
    <tr>
      <td className="pl-1">{index + 1 < 10 ? `0${index + 1}` : index + 1}</td>
      <td style={{ width: '100%', paddingLeft: '.5rem' }}>{name}</td>
      <td>
        <Link to={`/admin/categories/createNupdate?cid=${_id}`} className="btn edit-btn">
          Edit
        </Link>
      </td>
      <td>
        <Button type="button" onClick={() => onClickHdl(_id)} classes="remove-btn">
          Remove
        </Button>
      </td>
    </tr>
  );
}

export default CatList;
