import React, { useState } from 'react';
import { Switch } from 'antd';
import { render } from 'enzyme';

const TableContent = (props) => {
  const { usersDatas, columns } = props;

  const column =
    columns &&
    columns.map((c) => {
      return c.dataIndex;
    });
  const renderData = () =>
    usersDatas &&
    usersDatas.map((user, index) => {
      const cols = column.map((col) => {
        if (col.render) return col.render();

        return <td>{user[col]}</td>;
      });

      return <tr>{cols}</tr>;
    });

  return <tbody>{renderData()}</tbody>;
};

export default TableContent;
