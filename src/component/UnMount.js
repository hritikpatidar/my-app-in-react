import React from 'react'

export default class UnMount extends React.Component {
    componentWillUnmount(){
        //alert("data deleted successfuly");
        //console.warn('componentWillUnmount')
    }
    render() {
        return (
            <div>
                <h1>CLASS COMPONENT</h1>
                <ul>
                    <li>name:ritik</li>
                    <li>email:hritikpatidar@gmail.com</li>
                    <li>mon no : 0000000000</li>
                </ul>
            </div>
        )
    }
}
