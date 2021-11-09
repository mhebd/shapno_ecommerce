import React, { useEffect, useState } from 'react';
import { useProduct } from '../../../../context/product/ProductProvider';
import Loading from '../../reusable/Loading';
import HomeBox from './HomeBox';

function HomeFeatured() {
  const [featuredProdList, setFeaturedProdList] = useState([]);

  const { isLoading, featuredProducts, getFeaturedProducts } = useProduct();

  // Set featured product
  useEffect(() => {
    getFeaturedProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFeaturedProdList(featuredProducts);
  }, [featuredProducts]);
  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && featuredProdList.length !== 0 && (
        <HomeBox boxId="featured" heading="Featured Product" products={featuredProdList} />
      )}
    </>
  );
}

export default HomeFeatured;
