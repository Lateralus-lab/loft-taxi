import React from 'react';
// Import components
import Map from './Map/Map';
import SelectForm from './SelectForm/SelectForm';

const MainPage = () => {
  return (
    <div className="mainpage">
      <SelectForm />
      <Map />
    </div>
  );
};

export default MainPage;
