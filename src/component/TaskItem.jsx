import React from 'react'
import { List, Space, Button, Popover, Checkbox } from 'antd';
import {dateTime} from '../utils/dateTime'
const Taskitem = ({task,onEdit,onDelete,onComplete}) => {
  return (
   <List.Item extra={<Space>
    <Popover title='Edit Task'>
    <Button onClick={onEdit} icon={<i className='fas fa-edit text-success' />} type='text'/>
    <Button onClick={onDelete} icon={<i className='fas fa-trash text-danger' />} type='text'/>
    </Popover>
   </Space>}>
    <List.Item.Meta
    avatar={<Checkbox onChange={(val) => onComplete(val.target.checked)}/>} title={task.content} 
    description={dateTime(task.updateAt)} />
   </List.Item>
  );
}

export default Taskitem