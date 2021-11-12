import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { usePage } from '../../../../../context/page/PageProvider';
import Loading from '../../../../user/reusable/Loading';
import PageListItem from './PageListItem';

function PageList() {
  const [pageList, setPageList] = useState([]);
  const { getPages, pages, isLoading, deletePage, message } = usePage();

  useEffect(() => {
    getPages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setPageList(pages);
  }, [pages]);

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
              <th>Title</th>
              <th>Created</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading &&
              pageList.length > 0 &&
              pageList.map((page, i) => (
                <PageListItem key={Math.random()} index={i} page={page} onClickHdl={deletePage} />
              ))}
          </tbody>
        </table>
      )}
      <ToastContainer />
    </>
  );
}

export default PageList;
