import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
} from '@material-ui/core';
import { Car } from './Car';

const SelectForm = () => {
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
      <Paper>
        <Car type="standard" />
        <div>
          <Button className="button button--form">Order</Button>
        </div>
      </Paper>
    </form>
  );
};

export default SelectForm;
