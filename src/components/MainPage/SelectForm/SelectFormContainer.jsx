import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAddressList } from '../../../modules/addressList';
import SelectForm from './SelectForm';

const SelectFormContainer = ({ addressList, getAddressList, profile }) => {
  const [locationFrom, setLocationFrom] = useState('');
  const [locationTo, setLocationTo] = useState('');

  const [locationsFrom, setLocationsFrom] = useState(addressList);
  const [locationsTo, setLocationsTo] = useState(addressList);

  const handleLocationFromOnChange = (e) => {
    setLocationFrom(e.target.textContent);
    const inputValue = addressList.filter((el) => el !== e.target.textContent);
    setLocationsTo(inputValue);
  };

  const handleLocationToOnChange = (e) => {
    setLocationTo(e.target.textContent);
    const inputValue = addressList.filter((el) => el !== e.target.textContent);
    setLocationsTo(inputValue);
  };

  useEffect(() => {
    getAddressList();
  }, [getAddressList]);

  return (
    <>
      <SelectForm
        locations={addressList}
        locationsTo={locationsTo}
        locationsFrom={locationsFrom}
        handleLocationFromOnChange={handleLocationFromOnChange}
        handleLocationToOnChange={handleLocationToOnChange}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  addressList: state.addressList,
  profile: state.profile,
});

export default connect(mapStateToProps, { getAddressList })(
  SelectFormContainer
);
