import React from 'react';
import { Table, Button } from 'antd';
import '../css/SkillTable.css';

function SkillTable(){
    const columns = [
        {
            id: 1,
            columnName: 'No'
        },
        {
            id:2,
            columnName: 'Name'
        },
        {
            id:3,
            columnName: 'Updated at'
        },
        {
            id:4,
            columnName: '',
            fixed: 'right',
            width: 100,
            render: () => (
                <div className = "skill-table-action">
                    <a href = "#">Edit</a> 
                    <a href = "#">Remove</a>
                </div>
            )
        }
    ];
    const data = [
        {
            no: 1,
            name: 'PHP',
            updated: '10/10/2020 15:10:15',
        },
        {
            no: 2,
            name: 'Angular',
            updated: '10/10/2020 15:10:15',
        },
        {
            no: 4,
            name: 'Reactjs',
            updated: '10/10/2020 15:10:15',
        }
    ];
    return(
        <div className = "skill-table">
            <Button className = "skill-table-button" type = "primary">
                Add new
            </Button>
            <Table columns = {columns} dataSource ={data}/>
        </div>    
    )
}
export default SkillTable;
