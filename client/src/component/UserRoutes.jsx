import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './user/pages/404/NotFound';
import Category from './user/pages/category/Category';
import CheckOut from './user/pages/checkout/CheckOut';
import Home from './user/pages/home/Home';
import Login from './user/pages/login/Login';
import Order from './user/pages/order/Order';
import Product from './user/pages/product/Product';
import ProfileAbout from './user/pages/profile/about/About';
import ProfileAvatar from './user/pages/profile/avatar/Avatar';
import ProfileOrderList from './user/pages/profile/buylist/OrderList';
import ProfileCartlist from './user/pages/profile/cartlist/CartList';
import ProfileContact from './user/pages/profile/contact/Contact';
import ProfileSetting from './user/pages/profile/setting/Setting';
import Search from './user/pages/search/Search';
import Signup from './user/pages/signup/Signup';

function UserRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/checkout" component={CheckOut} />
      <Route exact path="/product/search" component={Search} />
      <Route exact path="/product/:id" component={Product} />
      <Route exact path="/product/category/:id" component={Category} />
      <Route exact path="/order/:id" component={Order} />
      <Route exact path="/profile/about" component={ProfileAbout} />
      <Route exact path="/profile/about/:id" component={ProfileAbout} />
      <Route exact path="/profile/contact-info" component={ProfileContact} />
      <Route exact path="/profile/edit-profile" component={ProfileSetting} />
      <Route exact path="/profile/change-avatar" component={ProfileAvatar} />
      <Route exact path="/profile/cartlist" component={ProfileCartlist} />
      <Route exact path="/profile/orderlist" component={ProfileOrderList} />
      <Route exact component={NotFound} />
    </Switch>
  );
}

export default UserRoutes;
