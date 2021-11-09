import React from 'react';

function UserListItem({ user, onClickHdl }) {
  const { _id, name, avatar, gravatar } = user;
  return (
    <tr>
      <td>
        {avatar ? (
          <img src={`../../uploads/user/${avatar}`} alt={name} />
        ) : (
          <img src={gravatar} alt={name} />
        )}
      </td>
      <td style={{ width: '100%', paddingLeft: '.5rem' }}>{name}</td>
      <td>
        <button type="button" onClick={() => onClickHdl(_id)} className="btn remove-btn">
          Remove
        </button>
      </td>
    </tr>
  );
}

export default UserListItem;
