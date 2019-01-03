import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import User from '../pages/User/User'
import Admin from '../pages/Home/home'
import Login from '../pages/Login/Login'

class Head extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/user" component={User}></Route>
                        <Route path="/admin/:id" 
                            render={(props)=>{
                                return <Admin route={props}>
                                            <Route path="/admin/user" component={User}></Route>
                                        </Admin>
                            }}
                        ></Route>
                        <Route path="/login" component={Login}></Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default Head