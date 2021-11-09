/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

function ReviewForm({ addReview, id }) {
  const [data, setData] = useState({
    message: '',
    ratting: 5,
  });

  const { message, ratting } = data;

  const onChangHdl = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const submitHdl = (e) => {
    e.preventDefault();
    if (!message) {
      toast.warning('Enter a message');
    } else {
      addReview(id, data);
      setData({
        message: '',
        ratting: 5,
      });
    }
  };

  return (
    <div className="review-form-wrap">
      <form className="review-form" onSubmit={submitHdl}>
        <div className="grid-row">
          <div className="col-s8">
            <p className="mb-2">
              <label htmlFor="email">Your Opinion</label>
            </p>
            <div className="input-group mb-3">
              <textarea
                style={{
                  width: '100%',
                  height: '100px',
                  resize: 'none',
                }}
                name="message"
                cols="30"
                rows="10"
                value={message}
                onChange={onChangHdl}
                className="py-1 px-2"
              />
            </div>
          </div>
          <div className="col-s4">
            <p className="mb-2">
              <label htmlFor="email">Product Ratting</label>
            </p>
            <div className="input-group mb-3">
              <select name="ratting" value={ratting} onChange={onChangHdl} onBlur={onChangHdl}>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
              </select>
            </div>

            <button type="submit" style={{ width: '100%' }} className="submit-btn btn mt-3">
              Submin
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default ReviewForm;
