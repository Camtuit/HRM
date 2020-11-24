import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { expect } from 'chai';
import UserSearchBox from '../components/User/UserSearchBox';
import UserTable from '../components/User/UserTable';
import { findByTestAtrr } from './utils';

configure({ adapter: new Adapter() });

describe('UserSearchBox', function () {
  it('should form clear', function () {
    const wrapper = shallow(<UserSearchBox />);
    const clearButton = wrapper.find('#user-search-box-clear-button');

    const fullNameInput = wrapper.find('#full-name-input');
    expect(fullNameInput.props().value).to.equal('10');
  });
});

describe('UserSearchBox - Testing display Search button and handleClick Search button', function () {
  let mockFunc;
  let wrapper;
  beforeEach(() => {
    mockFunc = jest.fn();
    const props = {
      buttonText: 'Example button text',
      emitEvent: mockFunc,
    };
    wrapper = shallow(<UserSearchBox {...props} />);
  });
  it('should render Search button', () => {
    const button = findByTestAtrr(wrapper, 'buttonSearch');
    expect(button.length).toBe(1);
  });
  it('Should emit callback onClick event', () => {
    const button = findByTestAtrr(wrapper, 'buttonSearch');
    button.simulate('click');
    const callback = mockFunc.mock.calls.length;
    expect(callback).toBe(1);
  });
});
