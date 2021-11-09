import React from 'react';
import AdminLayout from '../../common/AdminLayout';
import SettingForm from './SettingForm';

function Setting() {
  return (
    <AdminLayout>
      <div id="site-setting">
        <h3 className="as-heading">Website Setting</h3>

        <SettingForm />
      </div>
    </AdminLayout>
  );
}

export default Setting;
