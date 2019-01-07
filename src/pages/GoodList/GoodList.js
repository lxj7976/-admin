import React from "react"
import {Table,Pagination,Button, Popconfirm, message } from 'antd';
// import columns from "./columns.js"
import AddGoods from "./AddGoods"
class Goodlist extends React.Component{
    constructor(props){
        super(props);
        this.state={
            arrs:[],
            total:null,
            showAdd:false
        }
    }
    componentWillMount(){
        this.getGoods();
    }
   getGoods(){
        this.$axios.get("/api/goodlist")
        .then((res)=>{
          if(res.err===0){
            let arrs = res.data.map((item,index)=>{
              item.key=index;
              return item
            })
            this.setState({
              arrs:arrs,
              total:arrs.length
            })
            // console.log(this.state.total)
          }
        })
        .catch((err)=>{
          console.log(err)
        })
   }
   delGoods(){
        this.$axios.get("/api/delgoods")
        .then((res)=>{
          if(res.err===0){
            message.success("删除成功",1);
            this.getGoods();
          }else{
            message.error("删除失败",1)
          }
        })
        .catch((err)=>{
          console.log(err)
        })
   }
   addGoods=()=>{
     this.setState({showAdd:true})
   }
   hideGoods=()=>{
     this.setState({showAdd:false})
   }
    render(){
      let {total} = this.state;
      const columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name1',
        fixed:'left',
        // render: text => <a href="javascript:;">{text}</a>,
        width:120
      },
       {
        title: 'Name',
        dataIndex: 'name',
        key: 'name2',
        // render: text => <a href="javascript:;">{text}</a>,
        width:120,
        fixed:'left',
      }, 
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name3',
        // render: text => <a href="javascript:;">{text}</a>,
        width:120
      }, 
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name4',
        // render: text => <a href="javascript:;">{text}</a>,
        width:120
      },
       {
        title:'sex',
        dataIndex:'sex',
        key:'sex',
        render(type){
          let arrs=["男","女"]
          return arrs[type];
        },
        width:60
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
        width:80
      }, 
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age1',
        sorter: (a, b) => a.age - b.age,
        width:80,
        
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        width:160,
        filters: [{
          text: '河南',
          value: '河南',
        }, {
          text: '湖北',
          value: '湖北',
        }],
        filterMultiple: true,
        onFilter: (value, record) => record.address.indexOf(value) === 0,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address1',
        width:160,
      },
      {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        fixed:'right',
        width:80,
        render:(record)=>{
          return (
            <div>
              <Popconfirm 
              title='确认删除？'
              onConfirm={this.delGoods.bind(this,record)}
              >
              <Button size='small' type='danger' >删除</Button>
              </Popconfirm>
              <Button size='small' type='primary'>修改</Button>
            </div>
          )
        }
      }
    ];
        return(
            <div className="user" style={{width:1000}}>
            <Button size="large" type="primary" onClick={this.addGoods}>添加商品</Button>
            <Table bordered pagination={false} columns={columns} dataSource={this.state.arrs} scroll={{x:1120, y: 300 }}/>
            <Pagination pageSize={5} simple defaultCurrent={1} total={total} onChange={this.pageChange} />,
            {!this.state.showAdd||<AddGoods cacel={this.hideGoods}></AddGoods>}
            </div>
        )
    }
}

export default Goodlist;