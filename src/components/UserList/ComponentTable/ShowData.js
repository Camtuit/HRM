import React, { useState } from 'react';
import { Switch } from 'antd';
import moment from 'moment';
import { useHistory } from 'react-router';
import Toast from '../../commons/ToastCommon';
import ConfirmPopupCommon from '../../commons/ConfirmPopupCommon';
import { changeUserStatusById } from '../../../apis/userApi';
import constant from '../../../constants/htmlConstants';

function ShowData(props) {
  const { usersDatas, columns, currentPage, recordPerPage } = props;
  const history = useHistory();
  console.log(usersDatas);
  const [currentUser, setCurrentUser] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [rerender, setRerender] = useState(false);
  function hanldOnChange(user, checked) {
    setCurrentUser(user.action);
    setRerender(!rerender);
    setIsPopupOpen(true);
  }

  function closePopup() {
    setRerender(Math.random());
    setIsPopupOpen(false);
  }

  const column =
    columns &&
    columns.map((c) => {
      return c.dataIndex;
    });

  console.log(usersDatas);
  const userDataTable =
    usersDatas &&
    usersDatas.map((user, index) => {
      const cols = column.map((col) => {
        if (col === 'action')
          return (
            <td>
              <i
                data-toggle="tooltip"
                data-placement="top"
                className="fas fa-edit user-popup-common-icon"
              ></i>
            </td>
          );
        if (col === 'contract_status') {
          return <td>{user[col] ? 'Resigned' : 'Signed'}</td>;
        }
        if (col === 'employee_status') {
          return (
            <td>
              <Switch
                onChange={(checked) => hanldOnChange(user, checked)}
                checkedChildren="Available"
                unCheckedChildren="Inactive"
                checked={user}
              />
            </td>
          );
        }
        return <td>{user[col]}</td>;
      });

      return <tr>{cols}</tr>;
    });
  const handleChangeUserStatus = () => {
    setIsPopupOpen(false);
    setRerender(!rerender);

    changeUserStatusById(currentUser.id)
      .then((res) => {
        Toast({ message: 'Change Status Successfull!' });
        history.push('/userslist');
        location.reload();
      })
      .catch((error) => {
        Toast({ message: 'Change Status Successfull!' });
      });
  };

  return (
    <tbody>
      {userDataTable}

      <ConfirmPopupCommon
        title={'Change Employee Status'}
        content={`Do you want change status for user "${currentUser.useName}"?`}
        visible={isPopupOpen}
        handleOk={handleChangeUserStatus}
        handleCancel={closePopup}
      />
    </tbody>
  );
}
export default ShowData;
