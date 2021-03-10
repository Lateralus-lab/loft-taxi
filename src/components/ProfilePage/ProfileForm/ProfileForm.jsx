import React, { useState } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import LogoCard from '../../svg/LogoCard';
import IdCard from '../../svg/IdCard';
import LabelCard from '../../svg/LabelCard';

const ProfileForm = ({ token, setProfile }) => {
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    setProfile(cardHolder, cardNumber, expiryDate, cvc, token);
    history.push('/main');
  };

  return (
    <form
      className="form form--profile"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <Typography className="form__title form__title--profile" variant="h4">
          Profile
        </Typography>
      </div>
      <div className="form__desc">Enter your payment details</div>
      <div className="profile">
        <div className="profile__left">
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
        </div>
        <div className="profile__right">
          <div className="card">
            <div className="card__header">
              <LogoCard />
              <div className="card__expiry">{expiryDate}</div>
            </div>
            <div className="card__content">{cardNumber}</div>
            <div className="card__footer">
              <IdCard />
              <LabelCard />
            </div>
          </div>
        </div>
      </div>
      <div className="profile__item">
        <Button
          className="button button--profile"
          data-testid="save-button"
          type="submit"
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
