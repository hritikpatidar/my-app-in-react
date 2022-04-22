import React from 'react'
import UnMount from './UnMount'

export default class ComponentWillUnmount extends React.Component{
    constructor(){
        super()
        this.state={
            toggle:true
        }
    }

    componentWillUnmount(){
        this.setState({toggle:!this.state.toggle})
    }
   
    render(){
        return(
            <div>
               <h1>ComponentWillUnmount</h1>
               {
                   this.state.toggle ?
                   <UnMount />:null
               }
               
               <button onClick={ ()=>{ this.componentWillUnmount() } }>delete</button>
            </div>
        )
    }
}