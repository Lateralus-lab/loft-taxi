import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginForm from './LoginForm';

Enzyme.configure({ adapter: new Adapter() });

describe('LoginForm', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.find('#email').prop('name')).toEqual('email');
    expect(wrapper.find('#password').prop('name')).toEqual('password');
    expect(wrapper.find('#signup-button')).toHaveLength(1);
  });
});
