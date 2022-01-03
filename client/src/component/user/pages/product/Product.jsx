/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useProduct } from '../../../../context/product/ProductProvider';
import UserLayout from '../../common/UserLayout';
import Loading from '../../reusable/Loading';
import ProductDesc from './ProductDesc';
import ProductInfo from './ProductInfo';
import ProductReviewForm from './ProductReviewForm';
import ProductReviews from './ProductReviews';

function Product({ match }) {
  console.log(match);
  const [sProduct, setSProduct] = useState(null);

  const { isLoading, product, getSingleProduct, addReview, message } = useProduct();

  useEffect(() => {
    getSingleProduct(match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSProduct(product);
  }, [product]);

  useEffect(() => {
    if (message) {
      toast[message.status](message.message);
    }
  }, [message]);

  return (
    <UserLayout>
      {isLoading && <Loading />}
      {!isLoading && sProduct && (
        <>
          <ProductInfo product={sProduct} />
          <ProductDesc product={sProduct} />
          <ProductReviews product={sProduct} />
          <ProductReviewForm addReview={addReview} id={sProduct._id} />
          <ToastContainer />
        </>
      )}
    </UserLayout>
  );
}

export default Product;
