import React from 'react';

function GetInTouch({ data }) {
  return (
    <div className="col-m4 pb-3">
      <h3 className="ft-heading">Get In Touch</h3>
      <ul className="social-menu">
        {data &&
          data.socialMenu.map((item) => (
            <li className="menu-item">
              <a href={item.link} target="_blank" rel="noreferrer" className="menu-link">
                <i className={`fab fa-${item.icon}`} />
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default GetInTouch;
