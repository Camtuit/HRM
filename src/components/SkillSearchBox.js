import React, {useState} from 'react'
import { Form, Input, Button, Select, DatePicker } from 'antd';
import '../css/SkillSearchBox.css';

function SkillSearchBox() {
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };
    return (
        <div className="holiday-search-box">
            <Form
                labelCol={{
                span: 9,
                }}
                wrapperCol={{
                span: 6,
                }}
                layout="horizontal"
                initialValues={{
                size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <Form.Item label="Name">
                    <Input placeholder= "Skill name"/>
                </Form.Item>

                <div className="user-search-box-button">
                <Button>Cancel</Button>
                <Button type="primary">Search</Button>
                </div>
            </Form>
        </div>
    )
}

export default SkillSearchBox;

