import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { expect } from 'chai';
// import { mount, shallow } from 'enzyme';

import TestDemo from '../TestDemo';

const jsdom = require('mocha-jsdom');

global.document = jsdom({
  url: 'http://localhost:6000/',
});

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement('div');
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe('TestDemo Component Testing', () => {
  it('Test h1 tag when TestDemo run', () => {
    act(() => {
      ReactDOM.render(<TestDemo />, rootContainer);
    });
    const h1 = rootContainer.querySelector('h1');
    expect(h1.textContent).to.equal('Hello World!!!!');
  });
  it('Test p tag when TestDemo run', () => {
    act(() => {
      ReactDOM.render(<TestDemo />, rootContainer);
    });
    const p = rootContainer.querySelector('p');
    expect(p.textContent).to.equal("My name 's Huy");
  });
});
