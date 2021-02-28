import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

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
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <TextField
          data-testid="name"
          label="Name on card"
          required
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
        />
      </div>
      <div>
        <TextField
          data-testid="card-number"
          label="Card number"
          required
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>
      <div>
        <TextField
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
        <Button data-testid="save-button" variant="contained" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
