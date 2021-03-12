import React from 'react';
// Import components
import Map from './Map/Map';
import SelectFormContainer from './SelectForm/SelectFormContainer';

const MainPage = () => {
  return (
    <div className="mainpage">
      <SelectFormContainer />
      <Map />
    </div>
  );
};

export default MainPage;
