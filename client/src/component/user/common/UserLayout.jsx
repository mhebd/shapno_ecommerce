import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

function UserLayout({ children }) {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
}

export default UserLayout;
