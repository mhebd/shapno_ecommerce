import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useProduct } from '../../../../context/product/ProductProvider';
import UserLayout from '../../common/UserLayout';
import Empty from '../../reusable/Empty';
import Loading from '../../reusable/Loading';
import CategoryBox from './CategoryBox';

function Category({ match }) {
  const limit = 2;
  const page = 0;
  const { id } = match.params;

  const [catProdList, setCatProdList] = useState([]);
  // const [activePage, setActivePage] = useState(page * 1);

  const { isLoading, getCategoryProducts, categoryProducts, totalCatProd } = useProduct();

  const pageCount = () => Math.floor(totalCatProd / limit);

  useEffect(() => {
    getCategoryProducts(id, limit, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, limit, page]);

  useEffect(() => {
    setCatProdList(categoryProducts);
  }, [categoryProducts, id]);

  const handlePageClick = (data) => {
    getCategoryProducts(id, limit, data.selected);
  };

  return (
    <UserLayout>
      {isLoading && <Loading />}
      {!isLoading && catProdList.length !== 0 ? (
        <CategoryBox
          boxId="category"
          heading={`Category : ${catProdList[0].category.name}`}
          products={catProdList}
        />
      ) : (
        <Empty />
      )}

      {!(totalCatProd < limit) && (
        <div className="box">
          <div className="pagination-wrap">
            <ReactPaginate
              previousLabel="<<"
              nextLabel=">>"
              breakLabel="..."
              pageCount={pageCount()}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName="pagination"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              activeClassName="active"
            />
          </div>
        </div>
      )}
    </UserLayout>
  );
}

export default Category;
