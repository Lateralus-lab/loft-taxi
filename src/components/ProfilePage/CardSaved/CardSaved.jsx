import React from 'react';
import { Button, Typography } from '@material-ui/core';

const CardSaved = () => {
  return (
    <div className="form form--profile form--save">
      <Typography className="form__title form__title--profile" variant="h4">
        Profile
      </Typography>
      <div className="form__desc">
        Billing information has been updated. Now you can order a taxi.
      </div>
      <div className="profile__item">
        <Button
          className="button button--profile"
          data-testid="save-button"
          type="submit"
        >
          Go to map
        </Button>
      </div>
    </div>
  );
};

export default CardSaved;
