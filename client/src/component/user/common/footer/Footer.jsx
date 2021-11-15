import React, { useEffect, useState } from 'react';
import { useSetting } from '../../../../context/setting/SettingProvider';
import CopyRight from './CopyRight';
import FooterTop from './FooterTop';

function Footer() {
  const [data, setData] = useState(null);

  const { getSetting, setting } = useSetting();

  useEffect(() => {
    getSetting();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (setting) setData(setting);
  }, [setting]);
  return (
    <footer className="py-3 footer">
      <div className="container">
        <FooterTop data={data} />
        <CopyRight data={data} />
      </div>
    </footer>
  );
}

export default Footer;
