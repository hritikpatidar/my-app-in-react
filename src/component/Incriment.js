import React from 'react'

export default class Incriment extends React.Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }

    incriment() {
        //console.log("okokok");
        this.setState({count:this.state.count+1})
       
    }

    render() {
        return (
            <div>
                <h1>CLASS COMPONENT</h1>
                <h1>Count :- {this.state.count}</h1>
                <button onClick={ ()=>{ this.incriment() } } >Incriment</button>
            </div>
        )
    }
}
