import React, { useEffect, useState } from 'react';
import { useProduct } from '../../../../context/product/ProductProvider';
import HomeBox from './HomeBox';

function HomeNew() {
  const [newProdList, setNewProdList] = useState([]);

  const { newProducts, getNewProducts, isLoading } = useProduct();

  // Set new product
  useEffect(() => {
    getNewProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setNewProdList(newProducts);
  }, [newProducts]);

  return (
    <>
      {!isLoading && newProdList.length !== 0 && (
        <HomeBox boxId="new" heading="New Product" products={newProdList} />
      )}
    </>
  );
}

export default HomeNew;
