import React, { useEffect, useState } from 'react';
import { useSetting } from '../../../../context/setting/SettingProvider';
import InputGroup from '../../../user/reusable/InputGroup';

function SettingForm() {
  const [basic, setBasic] = useState({
    siteName: '',
    ufg: '',
    ubg: '',
    ulc: '',
    uhc: '',
    afg: '',
    abg: '',
    amc: '',
    ahc: '',
    afc: '',
  });

  const [social, setSocial] = useState({
    socialIcon: '',
    socialLink: '',
  });

  const [socialMenu, setSocialMenu] = useState([]);
  // const [footerMneu, setFooterMenu] = useState([]);

  const { getSetting, setting, updateSetting } = useSetting();
  console.log(socialMenu, social);

  const { siteName, ufg, ubg, ulc, uhc, afg, abg, amc, ahc, afc } = basic;
  const { socialIcon, socialLink } = social;

  const onChangeHdl = (e) => setBasic({ ...basic, [e.target.name]: e.target.value });
  const socialChange = (e) => setSocial({ ...social, [e.target.name]: e.target.value });

  const addSocialMenu = () => {
    if (!socialIcon || !socialLink) {
      console.log('Enter social icon name & link.');
    } else {
      setSocialMenu([...socialMenu, { icon: socialIcon, link: socialLink }]);
      setSocial({
        socialIcon: '',
        socialLink: '',
      });
    }
  };

  // Get Setting
  useEffect(() => {
    getSetting();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Set setting basic info
  useEffect(() => {
    if (setting) {
      setBasic({
        siteName: setting.siteName,
        ufg: setting.userBaseStyle.forground,
        ubg: setting.userBaseStyle.background,
        ulc: setting.userBaseStyle.link,
        uhc: setting.userBaseStyle.header,
        afg: setting.adminBaseStyle.forground,
        abg: setting.adminBaseStyle.background,
        amc: setting.adminBaseStyle.main,
        ahc: setting.adminBaseStyle.header,
        afc: setting.adminBaseStyle.footer,
      });
      setSocialMenu(setting.socialMenu);
    }
  }, [setting]);

  const submitHdl = (e) => {
    e.preventDefault();
    updateSetting({
      siteName,
      userBaseStyle: {
        forground: ufg,
        background: ubg,
        link: ulc,
        header: uhc,
      },
      adminBaseStyle: {
        forground: afg,
        background: abg,
        main: amc,
        header: ahc,
        footer: afc,
      },
      socialMenu,
    });
  };

  return (
    <>
      <form onSubmit={submitHdl} className="form setting-form">
        <InputGroup
          type="text"
          name="siteName"
          placeholder="Enter website name"
          label="Enter website name"
          onChange={onChangeHdl}
          value={siteName}
        />

        <h3 className="my-3">User section color setting</h3>

        <div className="grid-row">
          <div className="col-m6">
            <InputGroup
              type="color"
              name="ufg"
              label="Set user foreground color"
              onChange={onChangeHdl}
              value={ufg}
              style={{ width: '125px' }}
              inputStyle={{ padding: 0 }}
            />
          </div>
          <div className="col-m6">
            <InputGroup
              type="color"
              name="ubg"
              label="Set user background color"
              onChange={onChangeHdl}
              value={ubg}
              style={{ width: '125px' }}
              inputStyle={{ padding: 0 }}
            />
          </div>
          <div className="col-m6">
            <InputGroup
              type="color"
              name="ulc"
              label="Set user link color"
              onChange={onChangeHdl}
              value={ulc}
              style={{ width: '125px' }}
              inputStyle={{ padding: 0 }}
            />
          </div>
          <div className="col-m6">
            <InputGroup
              type="color"
              name="uhc"
              label="Set user header color"
              onChange={onChangeHdl}
              value={uhc}
              style={{ width: '125px' }}
              inputStyle={{ padding: 0 }}
            />
          </div>
        </div>

        <h3 className="my-3">Dashboard Color setting</h3>

        <div className="grid-row">
          <div className="col-m6">
            <InputGroup
              type="color"
              name="afg"
              label="Set admin foreground color"
              onChange={onChangeHdl}
              value={afg}
              style={{ width: '125px' }}
              inputStyle={{ padding: 0 }}
            />
          </div>
          <div className="col-m6">
            <InputGroup
              type="color"
              name="abg"
              label="Set admin background color"
              onChange={onChangeHdl}
              value={abg}
              style={{ width: '125px' }}
              inputStyle={{ padding: 0 }}
            />
          </div>
          <div className="col-m6">
            <InputGroup
              type="color"
              name="amc"
              label="Set admin main color"
              onChange={onChangeHdl}
              value={amc}
              style={{ width: '125px' }}
              inputStyle={{ padding: 0 }}
            />
          </div>
          <div className="col-m6">
            <InputGroup
              type="color"
              name="ahc"
              label="Set admin header color"
              onChange={onChangeHdl}
              value={ahc}
              style={{ width: '125px' }}
              inputStyle={{ padding: 0 }}
            />
          </div>
          <div className="col-m6">
            <InputGroup
              type="color"
              name="afc"
              label="Set user footer color"
              onChange={onChangeHdl}
              value={afc}
              style={{ width: '125px' }}
              inputStyle={{ padding: 0 }}
            />
          </div>
        </div>

        <h3 className="my-3">Social Mneu Setting</h3>

        <div className="social-menu-list-wrap">
          <ul className="list">
            {socialMenu.map((sitem) => (
              <li key={Math.random()} className="list-item" title={sitem.link}>
                {sitem.icon}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid-row">
          <div className="col-s3 col-m2 mb-3">
            <InputGroup
              type="text"
              name="socialIcon"
              label="Social Icon"
              onChange={socialChange}
              value={socialIcon}
            />
          </div>
          <div className="col-s7 col-m8 mb-3">
            <InputGroup
              type="text"
              name="socialLink"
              label="Social Link"
              onChange={socialChange}
              value={socialLink}
            />
          </div>
          <div className="col-s2 col-m2 mb-3">
            <button type="button" onClick={() => addSocialMenu()} className="btn add-btn">
              Add
            </button>
          </div>
        </div>

        <button type="submit" className="btn submit-btn">
          Update
        </button>
      </form>
    </>
  );
}

export default SettingForm;
