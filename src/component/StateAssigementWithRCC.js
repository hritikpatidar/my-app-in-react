import React from 'react'

export default class StateAssigementWithRCC extends React.Component{
    constructor(){
        super()
        this.state={
            name:"",
            email:"",
            password:""
        }
        //console.log(this.state)
    }
    
    handalChange(e){
        
        //console.log(e.target.name, e.target.value)
        this.setState({...this.state,[e.target.name]: e.target.value })
    }

    handalSubmit(e){
        //console.log('okok')
        e.preventDefault();
        console.log(this.state)
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.password);
    }

    render(){
        return(
            <div>
                <h1>GET THE VALUE IN CLASS COMPOMENTS</h1>
                <form onSubmit={(e) => { this.handalSubmit(e) }}>
                <label htmlFor="examleName1">name </label>
                <input type="text" id="examleName1" name="name" value={this.state.name} onChange={(e) => { this.handalChange(e) }} placeholder="enter name" /><br /><br />
                <label htmlFor="examleEmail1">email </label>
                <input type="email" id="examleEmail1" name="email" value={this.state.email} onChange={(e) => { this.handalChange(e) }} placeholder="enter email" /><br /><br />
                <label htmlFor="examlePassword1">password </label>
                <input type="password" id="examlePassword1" name="password" value={this.state.password} onChange={(e) => { this.handalChange(e) }} placeholder="enter password" /><br /><br />
                <button type="submit" >submit</button>
            </form>
            </div>
        )
    }
}