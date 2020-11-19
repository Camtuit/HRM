import { Button } from 'antd';
import React from 'react';
import types from '../../constants/apiResourceTypes';
import constants from '../../constants/htmlConstants';

function ButtonTableGroup({
  type,
  handleAddButton,
  handleExportFileButton,
  handleExportWorkdayButton,
}) {
  const ButtonAdd = () => {
    return (
      <Button className="table-button" type="primary" onClick={handleAddButton}>
        {constants.BUTTON.ADD}
      </Button>
    );
  };
  const ButtonExportFile = () => {
    return (
      <Button
        className="table-button"
        type="primary"
        onClick={handleExportFileButton}
      >
        {constants.BUTTON.EXPORT_FILE}
      </Button>
    );
  };
  const ButtonExportWorkday = () => {
    return (
      <Button
        className="table-button"
        type="primary"
        onClick={handleExportWorkdayButton}
      >
        {constants.BUTTON.EXPORT_WORKDAYS}
      </Button>
    );
  };
  const renderButton = () => {
    switch (type) {
      case types.HOLIDAY:
        return (
          <div className="button-table-group">
            <ButtonAdd />
            <ButtonExportFile />
          </div>
        );
      case types.SKILL:
        return (
          <div className="button-table-group">
            <ButtonAdd />
          </div>
        );
      case types.USER:
        return (
          <div className="button-table-group">
            <ButtonAdd />
            <ButtonExportFile />
            <ButtonExportWorkday />
          </div>
        );

      default:
        return null;
    }
  };

  return renderButton();
}

export default ButtonTableGroup;
