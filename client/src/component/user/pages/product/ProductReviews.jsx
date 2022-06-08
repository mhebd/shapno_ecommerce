import React from 'react';
import fStar from '../../../../images/full-star.png';
import hStar from '../../../../images/gray-star.png';

function ProductReviews({ product }) {
  // eslint-disable-next-line consistent-return
  const stars = (rat) => {
    const imgs = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < rat; i++) {
      imgs.push(`<img src=${fStar} alt="" />`);
    }

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 5 - rat; i++) {
      imgs.push(`<img src=${hStar} alt="" />`);
    }

    return imgs.join('');
  };
  return (
    <div className="box">
      <div className="reviews-wrap">
        <h3 className="r-heading">Product Reviews</h3>

        {product?.reviews.length > 0 &&
          product.reviews.map((rev) => (
            <div key={Math.random()} className="review mb-3 pb-3">
              <div
                className="stars mb-1"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: stars(rev.ratting) }}
              />
              <p className="name">
                By, <a href={`/profile/about/${rev.userId}`}>{rev.userName}</a>
              </p>
              <p className="message">{rev.message}</p>
            </div>
          ))}

        {product?.reviews.length <= 0 && <p>No review found!</p>}
      </div>
    </div>
  );
}

export default ProductReviews;
