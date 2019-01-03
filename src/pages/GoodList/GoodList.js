import React from "react"
import {Table,Pagination } from 'antd';
import columns from "./columns.js"
import data from "./data.js"

class Goodlist extends React.Component{
    render(){
        return(
            <div className="user">
            <Table columnWidth='50px' columns={columns} dataSource={data} />
            <Pagination simple defaultCurrent={2} total={50} />,
            </div>
        )
    }
}

export default Goodlist;