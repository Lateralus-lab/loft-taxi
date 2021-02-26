import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { PROFILE_DATA } from '../../../redux/actions/types';

const ProfileForm = () => {
  const [cardHolder, setCardHolder] = useState('JOHN SMITH');
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
  const [expiryDate, setExpiryDate] = useState('05/25');
  const [cvc, setCvc] = useState('123');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: PROFILE_DATA,
      payload: { cardHolder, cardNumber, expiryDate, cvc },
    });
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
          id="card-number"
          label="Card number"
          required
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="expiry"
          name="expiritation"
          variant="standard"
          label="MM/YY"
          required
          inputProps={{ maxLength: 5 }}
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
        <TextField
          id="cvc"
          variant="standard"
          label="CVC"
          required
          inputProps={{ maxLength: 3 }}
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
        />
      </div>
      <div>
        <Button id="save-button" variant="contained" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
