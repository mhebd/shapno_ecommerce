import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateCategory from './admin/pages/category/control/CreateCategory';
import Category from './admin/pages/category/view/Category';
import UpdateOrder from './admin/pages/order/control/UpdateOrder';
import Order from './admin/pages/order/view/Order';
import CreatePage from './admin/pages/page/control/CreatePage';
import Pages from './admin/pages/page/view/Page';
import CreateProduct from './admin/pages/product/control/CreateProduct';
import Products from './admin/pages/product/view/Products';
import Setting from './admin/pages/setting/Setting';
import Users from './admin/pages/user/view/Users';

function AdminRoutes() {
  return (
    <Switch>
      <Route exact path="/admin" component={Setting} />
      <Route exact path="/admin/products" component={Products} />
      <Route exact path="/admin/product/createNupdate" component={CreateProduct} />
      <Route exact path="/admin/categories" component={Category} />
      <Route exact path="/admin/categories/createNupdate" component={CreateCategory} />
      <Route exact path="/admin/pages" component={Pages} />
      <Route exact path="/admin/page/createNupdate" component={CreatePage} />
      <Route exact path="/admin/users" component={Users} />
      <Route exact path="/admin/orders" component={Order} />
      <Route exact path="/admin/order/update" component={UpdateOrder} />
    </Switch>
  );
}

export default AdminRoutes;
