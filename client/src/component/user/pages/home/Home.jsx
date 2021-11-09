/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useOrder } from '../../../../context/order/OrderProvider';
import UserLayout from '../../common/UserLayout';
import HomeFeatured from './HomeFeatured';
import HomeNew from './HomeNew';

function Home() {
  const { clearOrderState } = useOrder();
  useEffect(() => {
    clearOrderState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <UserLayout>
      <HomeFeatured />
      <HomeNew />
    </UserLayout>
  );
}

export default Home;
