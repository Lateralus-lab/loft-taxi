import React, { useState } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';

const ProfileForm = ({ cardData }) => {
  const [cardHolder, setCardHolder] = useState('JOHN SMITH');
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
  const [expiryDate, setExpiryDate] = useState('05/25');
  const [cvc, setCvc] = useState('123');

  const handleSubmit = (e) => {
    e.preventDefault();

    cardData(cardHolder, cardNumber, expiryDate, cvc);
  };

  return (
    <form
      className="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <Typography className="form__title form__title--profile" variant="h4">
          Profile
        </Typography>
      </div>
      <div className="form__desc">Please fill out the form</div>
      <div className="input__group">
        <TextField
          className="input"
          data-testid="name"
          label="Name on card"
          required
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
        />
      </div>
      <div className="input__group">
        <TextField
          className="input"
          data-testid="card-number"
          label="Card number"
          required
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>
      <div className="input__group input__group--double">
        <TextField
          className="input input--small"
          data-testid="expiry"
          name="expiritation"
          variant="standard"
          label="MM/YY"
          required
          inputProps={{ maxLength: 5 }}
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
        <TextField
          className="input input--small"
          data-testid="cvc"
          variant="standard"
          label="CVC"
          required
          inputProps={{ maxLength: 3 }}
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
        />
      </div>
      <div>
        <Button className="button" data-testid="save-button" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
