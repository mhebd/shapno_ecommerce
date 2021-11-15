/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import InputGroup from '../../../user/reusable/InputGroup';

// eslint-disable-next-line no-unused-vars
function MainMenuForm({ setting, updateSetting }) {
  const [mmenu, setMmenu] = useState({
    text: '',
    link: '',
  });

  const [mainMenu, setMainMenu] = useState([]);

  const { text, link } = mmenu;

  const onChangeHdl = (e) => setMmenu({ ...mmenu, [e.target.name]: e.target.value });

  const addFooterMenu = () => {
    if (!text || !link) {
      console.log('Enter page name and link.');
    } else {
      setMainMenu([...mainMenu, mmenu]);
      setMmenu({
        text: '',
        link: '',
      });
    }
  };

  useEffect(() => {
    if (setting) setMainMenu(setting.mainMenu);
  }, [setting]);

  const submitHdl = (e) => {
    e.preventDefault();
    updateSetting({
      siteName: setting.siteName,
      mainMenu,
    });
  };

  return (
    <form onSubmit={submitHdl} className="form setting-form">
      <h3 className="my-3">Footer Mneu Setting</h3>

      <div className="footer-menu-list-wrap mb-3">
        <ul className="setting-menu-list">
          {mainMenu.map((item) => (
            <li key={Math.random()} className="list-item" title={item.link}>
              <p>{item.text}</p>
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
            name="text"
            label="Page Name"
            onChange={onChangeHdl}
            value={text}
          />
        </div>
        <div className="col-s7 col-m8 mb-3">
          <InputGroup
            type="text"
            name="link"
            label="Page Link"
            onChange={onChangeHdl}
            value={link}
          />
        </div>
        <div className="col-s2 col-m2 mb-3">
          <button type="button" onClick={() => addFooterMenu()} className="btn add-btn">
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

export default MainMenuForm;
