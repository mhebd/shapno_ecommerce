/* eslint-disable react/no-danger */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { usePage } from '../../../../context/page/PageProvider';
import UserLayout from '../../common/UserLayout';
import Box from '../../reusable/Box';
import Loading from '../../reusable/Loading';

function Page({ match }) {
  const { slug } = match.params;
  const [pageState, setPageState] = useState(null);

  const { isLoading, getPage, page } = usePage();

  useEffect(() => {
    getPage(slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setPageState(page);
  }, [page]);

  return (
    <UserLayout>
      <Box boxId="page-wrap">
        {isLoading && <Loading />}
        {!isLoading && pageState && (
          <>
            <h2 className="page-title text-center mb-3 pb-3">{pageState?.title}</h2>
            <div className="page-content" dangerouslySetInnerHTML={{ __html: pageState.content }} />
          </>
        )}
      </Box>
    </UserLayout>
  );
}

export default Page;
