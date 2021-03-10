import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';

const SelectForm = () => {
  return (
    <form className="form form--mainpage" noValidate autoComplete="off">
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
      <div>
        <Button className="button button--form">Order</Button>
      </div>
    </form>
  );
};

export default SelectForm;
