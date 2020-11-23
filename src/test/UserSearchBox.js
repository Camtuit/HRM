import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import UserSearchBox from '../components/User/UserSearchBox';

configure({ adapter: new Adapter() });

describe('UserSearchBox', function () {
  it('should form clear', function () {
    const wrapper = shallow(<UserSearchBox />);
    const clearButton = wrapper.find('#user-search-box-clear-button');

    const fullNameInput = wrapper.find('#full-name-input');
    expect(fullNameInput.props().value).to.equal('10');
  });
});
