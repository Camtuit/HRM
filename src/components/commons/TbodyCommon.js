import React from 'react';


function TbodyCommon(props) {
  const { usersDatas, columns} = props;

  const userDataTable =
    usersDatas &&
    usersDatas.map((user, index) => {
      const cols = columns.map((col, key) => {
        if (col.render) {
          return <td key = {key}>{col.render(user[col.dataIndex], user)}</td>;
        }
        return <td key = {key}>{user[col.dataIndex]}</td>;
      });

      return <tr key={index}>{cols}</tr>;
    });


  return (
    <tbody>
      {userDataTable}
    </tbody>
  );
}
export default TbodyCommon;
