import React from 'react'
export default class EventHandling extends React.Component{
    constructor(){
        super()
        this.state={
            name:""
        }
    }

    eventHandling1(){
        this.setState({name:":- onClick and etc is a event"})

    }
    render(){
        return(
            <div>
                <h1>CLASS COMPONENT</h1>
                <h1>Event Handling {this.state.name}</h1>
                <button onClick= { ()=>{ this.eventHandling1() } }>Event Handling</button>
            </div>
        )
    }
}