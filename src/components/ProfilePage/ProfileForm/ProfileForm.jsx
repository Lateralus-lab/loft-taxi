import React from 'react';
import { TextField, Button } from '@material-ui/core';

const ProfileForm = () => {
  return (
    <form noValidate autoComplete="off">
      <div>
        <TextField label="Your full name" required />
      </div>
      <div>
        <TextField label="Card number" required />
      </div>
      <div>
        <TextField
          id="standart-basic"
          label="DD/MM/YY"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="standart-basic" label="CVC" />
      </div>
      <div>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
