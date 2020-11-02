import React, { useRef, useState } from 'react'
import { Form, Input, Button } from 'antd';
import '../css/SkillRegistInput.css';
import { useHistory } from 'react-router';

function SkillRegistInput() {
  const [componentSize, setComponentSize] = useState('default');
  const [skillName, setSkillName] = useState('');
  const skillNameInput = useRef(null);
  const history = useHistory();
  
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onChangeSkillName = (e) => {
    setSkillName(e.target.value);
  };

  const onContinueRegistSkill = () => {
    setSkillName('');
    skillNameInput.current.focus();
  };

  const onSubmitRegistSkill = () => {
    setSkillName('');
    history.push('/skilllist');
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
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Name">
          <Input placeholder="Skill name" value={skillName} ref={skillNameInput} onChange={onChangeSkillName} />
        </Form.Item> 
        <div className="skill-regist-button">
          <Button 
            size="large" 
            onClick={onContinueRegistSkill}
          >
            Continue
          </Button>
          <Button 
            type="primary" 
            size="large"
            onClick={onSubmitRegistSkill}
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default SkillRegistInput;