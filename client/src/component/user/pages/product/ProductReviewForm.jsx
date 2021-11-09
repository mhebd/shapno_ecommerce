/* eslint-disable react/no-danger */
import React from 'react';
import ReviewForm from './ReviewForm';

function ProductReviewForm({ addReview, id }) {
  return (
    <div className="box">
      <div className="sp-rev-form">
        <h3 className="sprf-heading">Leave Your Message</h3>
        <ReviewForm addReview={addReview} id={id} />
      </div>
    </div>
  );
}

export default ProductReviewForm;
