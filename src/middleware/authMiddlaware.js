import {
  fetchAuthRequest,
  fetchAuthSuccess,
  fetchAuthFailure,
} from '../actions/types';

export const authMiddlaware = (store) => (next) => async (action) => {
  if (action.type === fetchAuthRequest.toString()) {
    const resp = await fetch('https://loft-taxi.glitch.me/auth');

    console.log(resp);
  }
};
