import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserTable from '../components/User/UserTable';

configure({ adapter: new Adapter() });
describe('UserTable - Testing display Pagination and column Sort', function () {
  it('should display Pagination in Top-Right and Bottom-Right', function () {
    const wrapper = shallow(<UserTable />);
    const pagination = wrapper.find('Table');
    expect(pagination.prop('pagination').position).toEqual(
      expect.arrayContaining(['topRight', 'bottomRight']),
    );
  });
  it('should display Sort Button in table at Name column and Contract Date column', function () {
    const wrapper = shallow(<UserTable />);
    const sort = wrapper.find('Table');
    expect(
      sort.prop('columns').map((index, key) => {
        if (key === 1) {
          expect(index.title).toBe('TABLE.COLUMN_TITLE.NAME');
        }
      }),
    );
  });
});
