import React, { useEffect } from 'react';
import cartListToggler from '../../../../asset/js/script';
import { useSetting } from '../../../../context/setting/SettingProvider';
import Headertop from './Headertop';
import HUserInfo from './HUserInfo';
import Logo from './Logo';
import Navbar from './Navbar';
import SearchBox from './SearchBox';

function Header() {
  const { getSetting, setting } = useSetting();

  useEffect(() => {
    getSetting();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (setting) {
      document.documentElement.style.setProperty('--footer', setting.userBaseStyle.header);
      document.documentElement.style.setProperty('--link', setting.userBaseStyle.link);
      document.documentElement.style.setProperty('--theme', setting.userBaseStyle.forground);
      document.documentElement.style.setProperty('--bg', setting.userBaseStyle.background);
    }
  }, [setting]);

  useEffect(() => {
    cartListToggler();
  });

  return (
    <header className="header">
      <Headertop />
      <div className="header">
        <div className="container py-2">
          <div className="grid-row">
            <Logo />

            <SearchBox />

            <HUserInfo />
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
