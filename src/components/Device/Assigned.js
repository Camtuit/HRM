import Form from 'antd/lib/form/Form';
import constants ,{BUTTON} from '../../constants/htmlConstants';
import React, {useState} from 'react';
import {Modal, Button, Select, Row, Col} from 'antd';
export default function Addigned({ title, content, onOk }){
    const [visible, setVisible] = useState(false);
    const { Option, OptGroup } = Select;

    function handleCancel (){
        setVisible (false);
    }
    function showModal(){
        setVisible (true);
    }
    function handleChange(value) {
        console.log(`selected ${value}`);
      }
    return(
        <>
        <Row style={{ textAlign: 'center' }} >
            <Col span = {8}></Col>
            <Col span = {4}>
                <Button type="primary" onClick = {showModal} >
                  {constants.BUTTON.ASSIGNED}
                  </Button>
           </Col>
        </Row>
        <Modal
        title={title}
        visible={visible}
        onOk={handleCancel}
        onCancel={handleCancel}
        width = "400px"
      >
        <Row  >
            <Col span ={6} >
        <label >{content}</label>
        </Col>
        <Col span ={10}>
        <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
                Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
        </Select>
        </Col>
        </Row>
      </Modal>
        </>
    );
}