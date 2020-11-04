import React, { useRef, useState } from 'react';
import { Form, Input, Button } from 'antd';
import '../../css/SkillRegistInput.css';
import { useHistory } from 'react-router';

function SkillRegistInput() {
  const [componentSize, setComponentSize] = useState('default');
  const [skillName, setSkillName] = useState('');
  const skillNameInput = useRef(null);
  const history = useHistory();

  const handleChangeLayoutForm = ({ size }) => {
    setComponentSize(size);
  };

  const handleChangeSkillName = (e) => {
    setSkillName(e.target.value);
  };

  const handleContinueRegistSkill = () => {
    setSkillName('');
    skillNameInput.current.focus();
  };

  const handleSubmitRegistSkill = () => {
    setSkillName('');
    history.push('/skills');
  };
  return (
    <div>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 5,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={handleChangeLayoutForm}
        size={componentSize}
      >
        <div className="skill-regist-field">
          <Form.Item label="Name">
            <Input
              placeholder="Skill name"
              value={skillName}
              ref={skillNameInput}
              onChange={handleChangeSkillName}
            />
          </Form.Item>
        </div>
        <div className="skill-regist-button">
          <Button size="large" onClick={handleContinueRegistSkill}>
            Continue
          </Button>
          <Button type="primary" size="large" onClick={handleSubmitRegistSkill}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default SkillRegistInput;
