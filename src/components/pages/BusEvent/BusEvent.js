import React from "react"
import Father from "./Father"
import Son from "./Son"

class   Bus extends React.Component{
    constructor(props){
        super(props)
    }
    render(h) {
     return(
         <div>
             <p>这里是react模拟事件</p>
              <Father></Father>
              <Son></Son>       
         </div>
     )   
    }
}
export default Bus