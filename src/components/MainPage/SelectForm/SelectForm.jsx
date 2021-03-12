import React from 'react';
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
  locationFrom,
  locationTo,
  handleLocationFromOnChange,
  handleLocationToOnChange,
}) => {
  return (
    <form className="form form--mainpage">
      <div className="form__selectors">
        <FormControl>
          <InputLabel>From</InputLabel>
          <Select>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirdty</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>To</InputLabel>
          <Select>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirdty</MenuItem>
          </Select>
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
