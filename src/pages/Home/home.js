import React from "react"
import NavLeft from '../../components/NavLeft/NavLeft'
import Head from '../../components/Header/Header'
// import Center from '../../components/Center/Center'
import Foot from '../../components/Footer/Footer'
import './index.less'

class Home extends React.Component{
    componentWillMount(){
        console.log(this.props.route.match.params.id)
    }
    render(){
        return(
            <div className="home">
                <div className="left">
                    <NavLeft></NavLeft>
                </div>
                <div className='right'>
                    <div id="head">
                        <Head route={this.props.route}></Head>
                    </div>
                    <div id="center">
                        {this.props.children}
                    </div>
                    <div id='foot'>
                        <Foot></Foot>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;