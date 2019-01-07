import React from "react"
import {Table,Pagination } from 'antd';
import columns from "./columns.js"
// import data from "./data.js"

class Goodlist extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         arrs:data
    //     }
    // }
    componentWillMount(){
        let data=[
            {
              key: '1',
              name: '1Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
            },
            {
              key: '2',
              name: '2John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
            }, {
              key: '3',
              name: '3Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
            }, {
              key: '4',
              name: '4Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
            },{
              key: '5',
              name: '5John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
            },
        ]
        this.setState({arrs:data});
        this.$axios.get("/api/goodlist")
        .then((res)=>{
          console.log(res)
        })
        .catch((err)=>{
          console.log(err)
        })
    }
   
    pageChange=(page,pageSize)=>{
        let arrs=[
            {
                key: '6',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
              },
              {
                key: '7',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
              }, {
                key: '8',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
              }, {
                key: '9',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
              },{
                key: '10',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
              },
        ]
       this.setState({arrs})
    }
    render(){
        return(
            <div className="user">
            <Table  pagination={false} columns={columns} dataSource={this.state.arrs} />
            <Pagination pageSize={5} simple defaultCurrent={1} total={20} onChange={this.pageChange} />,
            </div>
        )
    }
}

export default Goodlist;