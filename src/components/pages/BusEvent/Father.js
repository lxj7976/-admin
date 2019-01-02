import React from "react"
import bus from "../../../module/Bus"
import store from '../../../store/index'
import actionCreater from "../../../store/actionCreater"
class   Father extends React.Component{
    constructor(props){
        super(props)
        console.log(store.getState())
          this.state={
              todos:store.getState().todos
          }
    }
    componentWillMount(){
        store.subscribe(()=>{
            this.setState({todos:store.getState().todos})
        })
    }
    changeage(){
       // bus.emit("add")
       actionCreater.changeEvent("打游戏")
    }
    render(h) {
     return(
         <div>
             <p>这里是father组件</p>
             <button onClick={this.changeage}>点击增加</button>
             {this.state.todos[0]["title"]}
         </div>
     )   
    }
}
export default Father