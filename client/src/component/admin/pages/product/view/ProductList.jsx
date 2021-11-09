import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useProduct } from '../../../../../context/product/ProductProvider';
import Loading from '../../../../user/reusable/Loading';
import ProductListItem from './ProdListItem';

function ProductList() {
  const [prods, setProds] = useState([]);
  const { getAllProducts, products, isLoading, deleteProduct, message } = useProduct();

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setProds(products);
  }, [products]);

  useEffect(() => {
    if (message) {
      toast[message.status](message.message);
    }
  }, [message]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <table id="list-table" className="cat-tabel my-3 p-2 pb-3">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading &&
              prods.length > 0 &&
              prods.map((prod) => (
                <ProductListItem key={Math.random()} product={prod} onClickHdl={deleteProduct} />
              ))}
          </tbody>
        </table>
      )}
      <ToastContainer />
    </>
  );
}

export default ProductList;
