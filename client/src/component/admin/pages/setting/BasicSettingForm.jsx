/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import InputGroup from '../../../user/reusable/InputGroup';

function BasicSettingForm({ setting, updateSetting }) {
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
    contactAddress: '',
  });

  const { siteName, ufg, ubg, ulc, uhc, afg, abg, amc, ahc, afc, contactAddress } = basic;

  const onChangeHdl = (e) => setBasic({ ...basic, [e.target.name]: e.target.value });

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
        contactAddress: setting.contactAddress,
      });
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
      contactAddress,
    });
  };

  return (
    <form onSubmit={submitHdl} className="form setting-form">
      <h3 className="my-3">Site basic setting</h3>

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

      <p className="mb-2">
        <label htmlFor="images">Enter Contact Address</label>
      </p>
      <div className="input-group mb-3">
        <textarea
          name="contactAddress"
          style={{ width: '100%' }}
          rows="10"
          value={contactAddress}
          onChange={onChangeHdl}
        />
      </div>

      <button type="submit" className="btn submit-btn">
        Update
      </button>
    </form>
  );
}

export default BasicSettingForm;
