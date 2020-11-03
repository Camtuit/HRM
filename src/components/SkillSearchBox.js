import React, {useState} from 'react'
import { Form, Input, Button, Select, DatePicker } from 'antd';
import '../css/SkillSearchBox.css';

function SkillSearchBox() {
    const [componentSize, setComponentSize] = useState('default');
    const [getInput,setGetInput] = useState('');

    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };
    const handleChange = (e)=>{
        e.preventDefault();
    }
    const handleSearch = () => {
        console.log('ok');
    }
    return (
        <div className="skill-search-box">
            <Form
                labelCol={{
                span: 6,
                }}
                wrapperCol={{
                span: 20,
                }}
                layout="inline"
                initialValues={{
                size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
                style ={{padding: "25px 205px"}}
            >
                <Form.Item label="Name">
                    <Input onChange={(e)=>{handleChange(e)}} placeholder= "Skill name"/>
                    

                </Form.Item>

                <div className="user-search-box-button">
                    <Button>Cancel</Button>
                    <Button type="primary" onClick = {handleSearch}>Search</Button>
              
                </div>
            </Form>
        </div>
    )
}

export default SkillSearchBox;

