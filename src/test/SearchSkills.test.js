import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
<<<<<<< HEAD
=======
// import { expect } from 'chai';
>>>>>>> 9cda6cc... [HRM-228] Create unit test for search skills
import SkillSearchBox from '../components/Skill/SkillSearchBox';

configure({ adapter: new Adapter() });

describe('render a div', () => {
  it('always renders a div', () => {
    const wrapper = shallow(<SkillSearchBox />);
    const searchButton = wrapper.find('div');
    expect(searchButton.length).toBeGreaterThan(0);
  });
});

<<<<<<< HEAD
describe('render a search button', () => {
  it('should display search Button', function () {
=======
describe('Button Search', () => {
  it('should display Search Button', function () {
>>>>>>> 9cda6cc... [HRM-228] Create unit test for search skills
    const wrapper = shallow(<SkillSearchBox />);
    const searchButton = wrapper.find('#skills-search-box-button');
    expect(searchButton.length).toBe(1);
  });
});

<<<<<<< HEAD
describe('render a cancel button', () => {
  it('should display cancel Button', function () {
    const wrapper = shallow(<SkillSearchBox />);
    const cancelButton = wrapper.find('#skills-cancel-box-button');
    expect(cancelButton.length).toBe(1);
=======
describe('Button Cancel', () => {
  it('should display Search Button', function () {
    const wrapper = shallow(<SkillSearchBox />);
    const searchButton = wrapper.find('#skills-search-box-button');
    expect(searchButton.length).toBe(1);
>>>>>>> 9cda6cc... [HRM-228] Create unit test for search skills
  });
});

describe('the rendered div', () => {
<<<<<<< HEAD
  it('contains everything else that gets rendered', function () {
    const wrapper = shallow(<SkillSearchBox />);
    const searchButton = wrapper.find('div');
    expect(searchButton.children()).toEqual(wrapper.children());
  });
});

describe('render input tag skills', () => {
  it('should display input tag on the screen', function () {
    const result = shallow(<SkillSearchBox />);
    const nameInput = result.find('#skill-input').first();
    nameInput.simulate('change', {
      target: { value: 'java' },
    });
    expect(nameInput.prop('value')).toEqual('java');
  });
});

describe('event button search', () => {
  it('should Simulate button push events search', function () {
    const wrapper = shallow(<SkillSearchBox />);
    expect(wrapper.state().data).toBe('state1');
    wrapper.find('#skills-search-box-button').simulate('click');
    expect(wrapper.state().data).toBe('state2');
  });
});

describe('event button cancel', () => {
  it('should Simulate button push events cancel', function () {
    const wrapper = shallow(<SkillSearchBox />);
    expect(wrapper.state().data).toBe('state1');
    wrapper.find('#skills-cancel-box-button').simulate('click');
    expect(wrapper.state().data).toBe('state2');
=======
  it('contains everything else that gets rendered', () => {
    const wrapper = shallow(<SkillSearchBox />);
    const searchButton = wrapper.find('div');
    expect(searchButton.children()).toEqual(SkillSearchBox().children());
>>>>>>> 9cda6cc... [HRM-228] Create unit test for search skills
  });
});
