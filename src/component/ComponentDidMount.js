import React from 'react'

export default class ComponentDidMount extends React.Component{
    constructor(){
        super()
        this.state={
            name:"ritik"
            
        }
        //console.log(this.state.name)
        //console.warn("constructor");
    }
    componentDidMount(){
        this.setState({name:"anil"});
        console.warn("componentDidMount");
    }
    render(){
        console.warn("render")
        return( 
            <div>
                <h1>CLASS COMPONENT</h1>
                <h1>hello {this.state.name} constructorDidMount </h1>
            </div>
        )
    }
}


// first constructor call hoga 
// secnd componentWillMount call hoga
// thred render call hoga
// forth componentDidMount call hoga
// fifth render call hoga