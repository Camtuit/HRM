import React from 'react';
import constants ,{LABLE, LABLE_FROFILE} from '../../constants/htmlConstants';
import { Form, Input, Button, Image, Row,Col} from 'antd';
export default function ProfileTable(){
   const profileDetail= {
      employeeCode: 'Nals001',
      fullName: 'Pham Thi Cam Tu',
      emaill : 'tuptc@nail.vn',
      phoneNumber : '0393222020',
      gender : 'Fale',
      dateOfBirth : '03/04/1998',
      projectName : 'Nal HRM',
      skillList : 'HTML/CSS', 
      startDate : '07/11/2020',
      contractDate : '16/11/2020',
      contracStatus : 'Signed',
       assignedDevice: ' Mac_29',
      remainingDaysOff : '2'
   }
  const { employeeCode,fullName, emaill,phoneNumber,gender,
          dateOfBirth,projectName,skillList,startDate,contractDate,
           contracStatus,remainingDaysOff , assignedDevice}= profileDetail;
    return(
      <Row gutter = {[16, 16]}>
       
        <Col xs={{ span: 16, offset: 1 }} lg={{ span: 16, offset: 2 }}>
         <Form
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 10 }}
            layout="horizontal"
          >
           <Form.Item label={constants.LABEL_FROFILE.EMPLOYEE_CODE} >
              <Input defaultValue={profileDetail.employeeCode} readOnly/>
            </Form.Item>
            <Form.Item label={constants.LABEL_FROFILE.FULL_NAME} >
              <Input  defaultValue={profileDetail.fullName} readOnly/>
            </Form.Item>
            <Form.Item label={constants.LABEL_FROFILE.EMAIl} >
              <Input  defaultValue={profileDetail.emaill} readOnly/>
            </Form.Item>
            <Form.Item label={constants.LABEL_FROFILE.PHONE_NUMBER} >
              <Input  defaultValue={profileDetail.phoneNumber} readOnly/>
            </Form.Item>
            <Form.Item label={constants.LABEL_FROFILE.GENDER} >
              <Input  defaultValue={profileDetail.gender} readOnly/>
            </Form.Item>
            <Form.Item label={constants.LABEL_FROFILE.DATE_OF_BIRTH} >
              <Input  defaultValue={profileDetail.dateOfBirth} readOnly/>
            </Form.Item>
            <Form.Item label={constants.LABEL_FROFILE.PROJECT_NAME} >
              <Input  defaultValue={profileDetail.projectName} readOnly/>
            </Form.Item>
            <Form.Item label={constants.LABEL_FROFILE.SKILL_LIST} >
              <Input  defaultValue={profileDetail.skillList} readOnly/>
            </Form.Item>
            <Form.Item label={constants.LABEL_FROFILE.START_DATE} >
              <Input  defaultValue={profileDetail.startDate} readOnly/>
            </Form.Item>
            <Form.Item label={constants.LABEL_FROFILE.CONTRACT_DATE} >
              <Input  defaultValue={profileDetail.contractDate} readOnly/>
            </Form.Item>
            <Form.Item label={constants.LABEL.CONTRACT_STATUS} >
              <Input  defaultValue={profileDetail.contracStatus} readOnly/>
            </Form.Item>
            <Form.Item label={constants.LABEL_FROFILE.START_DATE} >
              <Input  defaultValue={profileDetail.startDate} readOnly/>
            </Form.Item>
            <Form.Item label={constants.LABEL_FROFILE.REMAINING_DAYS_OFFF} >
              <Input  defaultValue={profileDetail.remainingDaysOff} readOnly/>
            </Form.Item>
            <Form.Item label={constants.LABEL_FROFILE.ASSIGNED_DEVICE} >
              <Input  defaultValue={profileDetail.assignedDevice} readOnly/>
            </Form.Item>
          </Form>
        </Col>
      
      </Row>
    ) 
}

