import React, { useState } from 'react'

export default function Hooks(){
    //1. state/Hooks
    const [number,setNumber] = useState(0)


    //2. funtion
    let changeName = () =>{ 
        setNumber(number+2)
    }


    //return statement/jsx 
    return(
        <div>
            <h1>Ritik {number}</h1>
            <button onClick={ ()=>{ changeName() }}>change name</button>
            
        </div>
    )
}