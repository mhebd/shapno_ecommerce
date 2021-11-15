import React, { useEffect, useState } from 'react';
import InputGroup from '../../../user/reusable/InputGroup';

// eslint-disable-next-line no-unused-vars
function SocialMenuForm({ setting, updateSetting }) {
  const [social, setSocial] = useState({
    socialIcon: '',
    socialLink: '',
  });

  const [socialMenu, setSocialMenu] = useState([]);

  const { socialIcon, socialLink } = social;

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

  useEffect(() => {
    if (setting) setSocialMenu(setting.socialMenu);
  }, [setting]);

  const submitHdl = (e) => {
    e.preventDefault();
    updateSetting({
      siteName: setting.siteName,
      socialMenu,
    });
  };

  return (
    <form onSubmit={submitHdl} className="form setting-form">
      <h3 className="my-3">Social Mneu Setting</h3>

      <div className="social-menu-list-wrap mb-3">
        <ul className="setting-menu-list">
          {socialMenu.map((sitem) => (
            <li key={Math.random()} className="list-item" title={sitem.link}>
              <p>{sitem.icon}</p>
              <div className="actions">
                <button type="submit" className="btn delete-btn">
                  X
                </button>
              </div>
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
  );
}

export default SocialMenuForm;
