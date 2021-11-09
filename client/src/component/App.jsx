import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import '../asset/css/1.layout.css';
import '../asset/css/2.typo.css';
import '../asset/css/3.style.css';
import '../asset/css/4.admin.css';
import '../asset/js/script';
import { CartProvider } from '../context/cartitem/CartProvider';
import { CategoryProvider } from '../context/category/CategoryProvider';
import { OrderProvider } from '../context/order/OrderProvider';
import { ProductProvider } from '../context/product/ProductProvider';
import { SettingPorvider } from '../context/setting/SettingProvider';
import { AuthProvider } from '../context/user/AuthProvider';
import setHeader from '../utils/setHeader';
import AdminRouter from './AdminRoutes';
import UserRouter from './UserRoutes';

setHeader(localStorage.token);

function App() {
  return (
    <SettingPorvider>
      <AuthProvider>
        <ProductProvider>
          <CategoryProvider>
            <CartProvider>
              <OrderProvider>
                <Router>
                  <AdminRouter />
                  <UserRouter />
                </Router>
              </OrderProvider>
            </CartProvider>
          </CategoryProvider>
        </ProductProvider>
      </AuthProvider>
    </SettingPorvider>
  );
}
export default App;
