import React from "react"
import bus from "../../../module/Bus"

class  Son extends React.Component{
    constructor(props){
        super(props)
        this.state={
          age:20
        }
    }
    componentWillMount(){
       bus.on("add",()=>{
           this.setState({age:2233})
       })
        
    }
    render(h) {
     return(
         <div>
             <p>这里是son组件年龄：{this.state.age}</p>
        
         </div>
     )   
    }
}
export default Son