import React from 'react'
import {BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom"
import User from '../pages/User/User'
import Admin from '../pages/Home/home'
import Login from '../pages/Login/Login'
import GoodList from '../pages/GoodList/GoodList'
import Bar from "../pages/Echarts/Bar/Bar"
import Line from "../pages/Echarts/Line/Line"
import Pie from "../pages/Echarts/Pie/Pie"
class Head extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/login"></Redirect>
                        </Route>
                        <Route path="/user" component={User}></Route>
                        <Route path="/admin" 
                            render={(props)=>{
                                return <Admin route={props}>
                                            <Route exact path="/admin" component={GoodList}></Route>
                                            <Route path="/admin/user" component={User}></Route>
                                            <Route path="/admin/goods/list" component={GoodList}></Route>
                                            <Route path="/admin/echarts/bar" component={Bar}/>
                                            <Route path="/admin/echarts/line" component={Line}/>
                                            <Route path="/admin/echarts/pie" component={Pie} />
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