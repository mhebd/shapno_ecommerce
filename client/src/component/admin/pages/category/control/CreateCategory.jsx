import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useCategory } from '../../../../../context/category/CategoryProvider';
import Button from '../../../../user/reusable/Button';
import InputGroup from '../../../../user/reusable/InputGroup';
import AdminLayout from '../../../common/AdminLayout';

function CreateCategory({ location }) {
  const { cid } = queryString.parse(location?.search);
  const [catInfo, setCatInfo] = useState({
    name: '',
    icon: '',
    color: '',
  });

  const { createCategory, getCategory, category, updateCategory, message } = useCategory();

  const { name, icon, color } = catInfo;

  useEffect(() => {
    if (cid) {
      getCategory(cid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (cid) {
      setCatInfo(category);
    }
  }, [category, cid]);

  const onChangeHdl = (e) => setCatInfo({ ...catInfo, [e.target.name]: e.target.value });

  const submitHdl = (e) => {
    e.preventDefault();
    if (!name) {
      console.log('Category Name is required.');
    } else if (cid) {
      updateCategory(cid, catInfo);
    } else {
      createCategory(catInfo);
    }
  };

  useEffect(() => {
    if (message) {
      toast[message.status](message.message);
    }
  }, [message]);

  return (
    <AdminLayout>
      <div id="createCategory">
        <h3 className="as-heading">Add New Category</h3>

        <form onSubmit={submitHdl} className="form">
          <InputGroup
            type="text"
            name="name"
            placeholder="Enter category name"
            label="Enter category name"
            onChange={onChangeHdl}
            value={name}
          />

          <InputGroup
            type="text"
            name="icon"
            placeholder="Enter category icon"
            label="Enter category icon"
            onChange={onChangeHdl}
            value={icon}
          />

          <InputGroup
            type="text"
            name="color"
            placeholder="Enter category color"
            label="Enter category color"
            onChange={onChangeHdl}
            value={color}
          />

          <Button type="submit" classes="submit-btn">
            {cid ? 'Update' : 'Create'}
          </Button>
        </form>
        <ToastContainer />
      </div>
    </AdminLayout>
  );
}

export default CreateCategory;
