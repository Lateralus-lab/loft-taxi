import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
  Grid,
} from '@material-ui/core';
import { Car } from './Car';

const SelectForm = ({
  locationsFrom,
  locationsTo,
  handleLocationFromOnChange,
  handleLocationToOnChange,
}) => {
  const [openFrom, setOpenFrom] = useState(false);

  return (
    <form className="form form--mainpage">
      <div className="form__selectors">
        <FormControl>
          <InputLabel>From</InputLabel>
          <Select value={locationsFrom} onChange={handleLocationFromOnChange}>
            {locationsFrom.map((locationTo, index) => (
              <MenuItem value={locationTo} key={index}>
                {locationTo}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>To</InputLabel>
          <Select></Select>
        </FormControl>
      </div>
      <div className="car">
        <Paper>
          <Grid className="car__group" container spacind={2}>
            <Car price={15} name="Standard" type="standard" />
            <Car price={20} name="Premium" type="premium" />
            <Car price={30} name="Business" type="business" />
          </Grid>
        </Paper>
        <div>
          <Button className="button">Order</Button>
        </div>
      </div>
    </form>
  );
};

export default SelectForm;
