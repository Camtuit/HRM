import React from 'react';


function TbodyCommon(props) {
  const { usersDatas, columns} = props;

  const userDataTable =
    usersDatas &&
    usersDatas.map((user, index) => {
      const cols = columns.map((col) => {
        if (col.render) {
          return <td>{col.render(user[col.dataIndex], user)}</td>;
        }
        return <td>{user[col.dataIndex]}</td>;
      });

      return <tr>{cols}</tr>;
    });


  return (
    <tbody>
      {userDataTable}
    </tbody>
  );
}
export default TbodyCommon;
