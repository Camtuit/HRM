import { Button } from 'antd';
import React from 'react';
import types from '../../constants/apiResourceTypes';
import { useTranslation } from 'react-i18next';

function ButtonTableGroup({
  type,
  handleAddButton,
  handleExportFileButton,
  handleExportWorkdayButton,
}) {
  const { t, i18n } = useTranslation();
  const ButtonAdd = () => {
    return (
      <Button className="table-button" type="primary" onClick={handleAddButton}>
        {t('button.add')}
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
        {t('buttonCommon.export_file')}
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
        {t('buttonCommon.export_workdays')}
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
