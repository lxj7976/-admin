import React from 'react'
import ReactEcharts from "echarts-for-react"
class Line extends React.Component{
    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        legend: {
            data:['a','b','c'],
            orient :'vertical',
            left:'10%',
            top:'center',
        },
        grid: {
            left: '20%',
            right: '20%',
            bottom: '10%',
            containLabel: true
        },
        series: [{
            name:"a",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        },{
            name:'b',
            data: [420, 432, 501, 234, 90, 430, 320],
            type: 'line'
        },{
            name:'c',
            data: [80, 592, 501, 234, 990, 130, 130],
            type: 'line'
        }]
    }
    render(){
        return (
            <div>
                <ReactEcharts option={this.option} />
            </div>
        )
    }
}
export default Line;