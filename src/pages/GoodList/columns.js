import {Divider, Tag } from "antd"
import React from "react"
const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    // render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }
]
export default columns;