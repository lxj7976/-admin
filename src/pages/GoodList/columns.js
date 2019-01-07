import {Button, Popconfirm} from 'antd'
import React from 'react'
const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    // render: text => <a href="javascript:;">{text}</a>,
    width:200
  }, {
    title:'sex',
    dataIndex:'sex',
    key:'sex',
    render(type){
      let arrs=["男","女"]
      return arrs[type];
    },
    width:60
  },{
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: (a, b) => a.age - b.age,
    width:80
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },{
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    fixed:'right',
    width:100,
    render:()=>{
      return (
        <div>
          <Popconfirm title='确认删除？'>
          <Button size='small'>删除</Button>
          </Popconfirm>
          <Button size='small'>修改</Button>
        </div>
      )
    }
  }
]
export default columns;