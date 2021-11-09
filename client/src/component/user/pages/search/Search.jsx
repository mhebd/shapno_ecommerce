import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useProduct } from '../../../../context/product/ProductProvider';
import UserLayout from '../../common/UserLayout';
import Empty from '../../reusable/Empty';
import Loading from '../../reusable/Loading';
import SearchBox from './SearchBox';

function Search({ location }) {
  const { search } = queryString.parse(location.search);
  const limit = 2;
  const page = 0;

  const [searchProdList, setSearchProdList] = useState([]);

  const { isLoading, getSearchedProducts, searchedProducts, totalSearchProd } = useProduct();

  const pageCount = () => Math.floor(totalSearchProd / limit);

  useEffect(() => {
    getSearchedProducts(search, limit, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSearchProdList(searchedProducts);
  }, [searchedProducts]);

  const handlePageClick = (data) => {
    getSearchedProducts(search, limit, data.selected);
  };

  return (
    <UserLayout>
      {isLoading && <Loading />}
      {!isLoading && searchProdList.length !== 0 ? (
        <SearchBox
          boxId="category"
          heading={`Searched Query : ${search}`}
          products={searchProdList}
        />
      ) : (
        <Empty />
      )}

      {!(totalSearchProd < limit) && (
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

export default Search;
