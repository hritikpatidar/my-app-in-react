import React from 'react'

export default class ComponentDidUpdate extends React.Component{
    constructor(){
        super()
        this.state={
            name:"ritik",
            age:23
        }
    }
    componentDidMount(){
        this.setState({age:24})
    }
    componentDidUpdate(){
        //console.warn('componentDidUpdate')    //withoud using loop this is going in loop
       if(this.state.age===24){  
            this.setState({age:25})
       }else{

       }
    }
    render(){
        return(
            <div>
                <h1>{this.state.name + this.state.age}</h1>
                
                <button onClick={ ()=>{ this.componentDidMount() } }>Update</button>
            </div>
        )
    }
}