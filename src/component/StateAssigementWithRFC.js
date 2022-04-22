import React,{useState } from 'react'

export default function StateAssigementWithRFC() {
    //1. state/Hooks
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    // const [name, setName] = useState('ritik');
    // const [email,setEmail] = useState('hritik1810@gmail.com');
    // const [password,setPassword] = useState('12345')

    //2. funtion defination

    let handalSubmit = (e) => {
        e.preventDefault();
        // console.log(name);
        // console.log(email);
        // console.log(password);
        console.log(data.name);
        console.log(data.email);
        console.log(data.password);
    }
    //console.log('data', data)

    let handalChange = (e) => {
        console.log('name', e.target.name, e.target.value);
        setData({ ...data, [e.target.name]: e.target.value });
    }
    //3. return statement / jsx
    return (
        <React.Fragment>
            {/* <form>
                <label htmlFor="examleName">name </label>
                <input type="text" id="examleName" name="name" value={name} onChange={(e)=>{setName(e.target.value) }} placeholder="enter name" /><br /><br />
                <label htmlFor="examleEmail">email </label>
                <input type="email" id="examleEmail" name="email" value={email} onChange={(e)=>{setEmail(e.target.value) }} placeholder="enter email" /><br /><br />
                <label htmlFor="examlePassword">password </label>
                <input type="password" id="examlePassword" name="password" value={password} onChange={(e)=>{setPassword(e.target.value) }} placeholder="enter password" /><br /><br />
                <button type="button" onClick={ (e)=>{ submit(e) } }>submit</button>
            </form> */}
            <h1>GET THE VALUE IN FUNCTIONAL COMPONENT</h1>
            <form onSubmit={(e) => { handalSubmit(e) }}>
                <label htmlFor="examleName">name </label>
                <input type="text" id="examleName" name="name" value={data.name} onChange={(e) => { handalChange(e) }} placeholder="enter name" /><br /><br />
                <label htmlFor="examleEmail">email </label>
                <input type="email" id="examleEmail" name="email" value={data.email} onChange={(e) => { handalChange(e) }} placeholder="enter email" /><br /><br />
                <label htmlFor="examlePassword">password </label>
                <input type="password" id="examlePassword" name="password" value={data.password} onChange={(e) => { handalChange(e) }} placeholder="enter password" /><br /><br />
                <button type="submit" >submit</button>
            </form>

        </React.Fragment>
    )
}



