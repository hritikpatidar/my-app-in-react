import React from 'react'

export default class HideAndShow extends React.Component{

    constructor(){
        super()
        this.state={
            name:true
        }
    }

    HideAndShow(){
        //console.log('okok')
        this.setState({name:!this.state.name})
    }


    render(){
        return(
            <div>
                <h1>CLASS COMPONENT</h1>
                {
                    this.state.name ?
                    <h1>Hide and Show</h1>
                    :null
                }
                <button onClick={ ()=>{ this.HideAndShow() } }>Hide and Show</button>
            </div>
        )
    }
}