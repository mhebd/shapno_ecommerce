import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSetting } from '../../../../context/setting/SettingProvider';
import Navbar from './Navbar';

function Header() {
  // const [settings, setSettings] = useState({});

  const { getSetting, setting } = useSetting();

  useEffect(() => {
    getSetting();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (setting) {
      document.documentElement.style.setProperty('--Aheader', setting.adminBaseStyle.header);
      document.documentElement.style.setProperty('--Amain', setting.adminBaseStyle.main);
      document.documentElement.style.setProperty('--Afooter', setting.adminBaseStyle.footer);
      document.documentElement.style.setProperty('--theme-color', setting.adminBaseStyle.forground);
      document.documentElement.style.setProperty('--theme-bg', setting.adminBaseStyle.background);
    }
  }, [setting]);
  return (
    <header id="header">
      <h2 className="heading my-3 text-center">Admin Panel</h2>
      <Link to="/" className="ml-3">
        <i className="fas fa-arrow-left mr-2" />
        Home
      </Link>

      <Navbar />
    </header>
  );
}

export default Header;
