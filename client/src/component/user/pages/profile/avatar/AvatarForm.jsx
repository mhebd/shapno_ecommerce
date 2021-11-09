/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Button from '../../../reusable/Button';
import InputGroup from '../../../reusable/InputGroup';

function SettingForm({ update }) {
  const [info, setInfo] = useState(null);

  const submitHdl = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('avatar', info);
    update(data);
  };

  const onChangeHdl = (e) => {
    setInfo(e.target.files[0]);
  };

  return (
    <form onSubmit={submitHdl} encType="multipart/form-data" className="form">
      <InputGroup type="file" name="avatar" label="Change Avatar" onChange={onChangeHdl} />

      <Button type="submit" classes="submit-btn">
        Save
      </Button>
    </form>
  );
}

export default SettingForm;
