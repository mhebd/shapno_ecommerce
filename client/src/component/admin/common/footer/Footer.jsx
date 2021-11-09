import React from 'react';

function Footer() {
  return (
    <footer id="footer">
      <p className="mt-2 text-center">
        <a href="/">eCommerce</a>
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
