import authMiddleware from './authMiddleware';
import { fetch_auth_request } from '../actions/actions';
import { serverLogin } from './../api';

jest.mock('./../api', () => ({ serverLogin: jest.fn(() => true) }));

describe('authMiddleware', () => {
  afterAll(jest.clearAllMocks);

  describe('#AUTHENTICATE', () => {
    it('authenticates through api', async () => {
      serverLogin.mockImplementation(async () => true);
      const dispatch = jest.fn();
      //   await authMiddleware({ dispatch })()(
      //     fetch_auth_request('testlogin', 'testpassword')
      //   );
      //   expect(serverLogin).toBeCalledWith('testlogin', 'testpassword');
      //   expect(dispatch).toBeCalledWith({ type: 'FETCH_AUTH_SUCCESS' });
    });
  });
});
