import React, { useEffect, useState } from 'react';
import Button from '../../../reusable/Button';
import InputGroup from '../../../reusable/InputGroup';

function SettingForm({ user, update }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    address1: '',
    address2: '',
    country: '',
    city: '',
    zipCode: '',
  });

  const { name, age, phone, address1, address2, country, city, zipCode } = formData;

  useEffect(() => {
    setFormData({
      name: user.name,
      age: user.age,
      phone: user.phone,
      address1: user.contact.address1,
      address2: user.contact.address2,
      country: user.contact.country,
      city: user.contact.city,
      zipCode: user.contact.zipCode,
    });
  }, [user]);

  const submitHdl = (e) => {
    e.preventDefault();
    if (name) {
      update(formData);
    } else {
      console.log('Name is required');
    }
  };

  const onChangeHdl = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <form onSubmit={submitHdl} className="form">
        <h3 className="pbs-heading">General Information</h3>

        <InputGroup
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={onChangeHdl}
          prepend="user"
          label="User Name"
        />
        <InputGroup
          type="number"
          name="age"
          placeholder="Enter your age"
          value={age}
          onChange={onChangeHdl}
          prepend="time"
          label="User Age"
        />
        <InputGroup
          type="number"
          name="phone"
          placeholder="Enter your phone number"
          value={phone}
          onChange={onChangeHdl}
          prepend="phone"
          label="User Phone Number"
        />

        <h3 className="pbs-heading">Contact Information</h3>

        <InputGroup
          type="text"
          name="address1"
          placeholder="Address line one"
          value={address1}
          onChange={onChangeHdl}
          prepend=""
          label="User Address Line One"
        />
        <InputGroup
          type="text"
          name="address2"
          placeholder="Address line two"
          value={address2}
          onChange={onChangeHdl}
          prepend=""
          label="User Address Line Two"
        />
        <InputGroup
          type="text"
          name="country"
          placeholder="Enter your country"
          value={country}
          onChange={onChangeHdl}
          prepend=""
          label="User Country"
        />
        <InputGroup
          type="text"
          name="city"
          placeholder="Enter your city"
          value={city}
          onChange={onChangeHdl}
          prepend=""
          label="User City"
        />
        <InputGroup
          type="number"
          name="zipCode"
          placeholder="Enter your zipCode"
          value={zipCode}
          onChange={onChangeHdl}
          prepend=""
          label="User ZipCode"
        />

        <Button type="submit" classes="submit-btn">
          Save
        </Button>
      </form>
    </>
  );
}

export default SettingForm;
