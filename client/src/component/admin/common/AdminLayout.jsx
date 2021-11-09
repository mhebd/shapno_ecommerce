import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

function AdminLayout({ children }) {
  return (
    <div id="admin">
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}

export default AdminLayout;
