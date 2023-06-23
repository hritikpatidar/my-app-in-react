import React from "react"

export default class ClassComponent extends React.Component{
    constructor(){
        super()
        this.state={
            name:"ankush"
        }
    }
    changeName (){
        this.setState({name:"ritik"})
    }

    render(){
        return(
            <React.Fragment>
                <h1>CLASS COMPONENT</h1>
                <h1>hello {this.state.name}</h1>
                <button onClick={ ()=>{ this.changeName() } }>change Name</button>
            </React.Fragment>
           
        )
    }
}

