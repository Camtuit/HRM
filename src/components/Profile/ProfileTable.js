import React,{useState} from 'react';
import '../../css/UserRegist.css';
import { Form, Input, Button, Radio, DatePicker } from 'antd';
import { Link } from 'react-router-dom';
export default function ProfileTable(){
    const profileDetail=[{

    }]
    return(
       <div className="profile-detail">
       <div className="user-regist-content profile-detail-content">
         <div className="user-regist-form profile-detail-form">
           <div className="profile-detail-form-avatar">
           </div>
           <Form
             labelCol={{ span: 7 }}
             wrapperCol={{ span: 10 }}
             layout="horizontal"
           >
             <Form.Item label="Employee Code">
               <Input  />
             </Form.Item>
 
             <Form.Item label="Full Name">
               <Input  />
             </Form.Item>
 
             <Form.Item label="Email">
               <Input />
             </Form.Item>
 
             <Form.Item label="Phone Number">
               <Input  />
             </Form.Item>
 
             <Form.Item label="Gender">
               <Input />
             </Form.Item>
 
             <Form.Item label="Date of Birth">
               <DatePicker />
             </Form.Item>
 
             <Form.Item label="Project Name">
               <Input placeholder="Project Name" />
             </Form.Item>
 
             <Form.Item label="Skill List">
               <Input placeholder="Skill List" />
             </Form.Item>
 
             <Form.Item label="Start Date">
               <DatePicker />
             </Form.Item>
 
             <Form.Item label="Contract Date">
               <DatePicker />
             </Form.Item>
 
             <Form.Item label="Contract Status">
             <Input />
             </Form.Item>
 
             <Form.Item label="Remaining Days Off">
               <Input placeholder="Remaining Days Off" />
             </Form.Item>
 
             <div className="user-regist-form-button profile-detail-form-button">
               <Link to="/users">
                 <Button>Back</Button>
               </Link>
 
               <Button type="primary">Save</Button>
             </div>
           </Form>
         </div>
       </div>
     </div>
    ) 
}

