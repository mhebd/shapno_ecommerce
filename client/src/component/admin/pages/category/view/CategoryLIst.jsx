/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useCategory } from '../../../../../context/category/CategoryProvider';
import Loading from '../../../../user/reusable/Loading';
import CatListItem from './CatListItem';

function CategoryLIst() {
  const [cats, setCats] = useState([]);

  const { getCategories, categories, isLoading, deleteCategory, message } = useCategory();

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    setCats(categories);
  }, [categories]);

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
              <th>Index</th>
              <th>Category</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading &&
              cats.length > 0 &&
              cats.map((cat, i) => (
                <CatListItem
                  key={Math.random()}
                  onClickHdl={deleteCategory}
                  index={i}
                  category={cat}
                />
              ))}
          </tbody>
        </table>
      )}
      <ToastContainer />
    </>
  );
}

export default CategoryLIst;
