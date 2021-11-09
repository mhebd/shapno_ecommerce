import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import InputGroup from '../../reusable/InputGroup';

function SearchBox() {
  const [search, setSearch] = useState('');
  const onChangeHdl = (e) => setSearch(e.target.value);

  const submitHdl = (e) => {
    if (!search) {
      e.preventDefault();
      toast.warning('Enter some text first');
    }
  };

  return (
    <div className="col-12 col-m6 col-l4 search-box">
      <form action="/product/search" onSubmit={submitHdl} className="form">
        <InputGroup
          type="text"
          name="search"
          placeholder="Search Your Product..."
          value={search}
          onChange={onChangeHdl}
          append="search"
        />
      </form>
      <ToastContainer />
    </div>
  );
}

export default SearchBox;
