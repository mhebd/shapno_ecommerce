import React, { useEffect, useState } from 'react';
import { useSetting } from '../../../../context/setting/SettingProvider';
import BasicSettingForm from './BasicSettingForm';
import FooterMenuForm from './FooterMneuForm';
import MainMenuForm from './MainMenuForm';
import SocialMenuForm from './SocialMenuForm';

function SettingForm() {
  const [data, setData] = useState(null);

  const { getSetting, setting, updateSetting } = useSetting();

  // Get Setting
  useEffect(() => {
    getSetting();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setData(setting);
  }, [setting]);

  return (
    <>
      <BasicSettingForm setting={data} updateSetting={updateSetting} />
      <MainMenuForm setting={data} updateSetting={updateSetting} />
      <SocialMenuForm setting={data} updateSetting={updateSetting} />
      <FooterMenuForm setting={data} updateSetting={updateSetting} />
    </>
  );
}

export default SettingForm;
