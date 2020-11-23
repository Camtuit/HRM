import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { expect } from 'chai';
import SkillSearchBox from '../components/Skill/SkillSearchBox';

configure({ adapter: new Adapter() });

describe('render a div', () => {
  it('always renders a div', () => {
    const wrapper = shallow(<SkillSearchBox />);
    const searchButton = wrapper.find('div');
    expect(searchButton.length).toBeGreaterThan(0);
  });
});

describe('Button Search', () => {
  it('should display Search Button', function () {
    const wrapper = shallow(<SkillSearchBox />);
    const searchButton = wrapper.find('#skills-search-box-button');
    expect(searchButton.length).toBe(1);
  });
});

describe('Button Cancel', () => {
  it('should display Search Button', function () {
    const wrapper = shallow(<SkillSearchBox />);
    const searchButton = wrapper.find('#skills-search-box-button');
    expect(searchButton.length).toBe(1);
  });
});

describe('the rendered div', () => {
  it('contains everything else that gets rendered', () => {
    const wrapper = shallow(<SkillSearchBox />);
    const searchButton = wrapper.find('div');
    expect(searchButton.children()).toEqual(SkillSearchBox().children());
  });
});
