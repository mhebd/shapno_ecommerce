import React from 'react';
import { Link } from 'react-router-dom';

function CopyRight({ data }) {
  return (
    <div className="footer-bottom pt-2 text-center">
      <p className="copyright">
        <Link to="/">{data?.siteName} </Link>
        &copy; 2021. All Rights Reserved.
      </p>
    </div>
  );
}

export default CopyRight;
