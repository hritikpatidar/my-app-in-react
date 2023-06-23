import React, { useState } from "react";
import swal from 'sweetalert';

//import env from "react-dotenv";

function Register() {

  //1.state/ variable
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //2. function
  let submitData = () => {
    console.log(username);
    console.log(email);
    console.log(password);
     //http://localhost:1337/api/auth/local/register
    var data = {
      "username":username,
      "email":email,
      "password":password
    }
     fetch('http://localhost:1337/api/auth/local/register' ,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
        },
        body: JSON.stringify(data)
     }).then((response )=>{
        response.json()
        if(response.status === 200){
          swal("Good job!", "User Created Successfully", "success");
        }
        if(response.status ===400){
          swal("Bed Request", "User Not Created","error")
        }
     }).then(()=>{
        console.log(data);
        console.log(data.status);
        
     }).catch((error)=>{

     }).finally((all)=>{

     });
  }

 

  //3. return statement
  return (
    <div className="row">
      <div className="col-6 offset-3 mt-5">
        <h1 className="text-center">Register Form (fatch API)</h1>
        <form>
          <input className="form-control" placeholder="Enter Username" type="text" name="username" value={ username } onChange={(e)=>{setUsername(e.target.value)}}/><br/>
          <input className="form-control" placeholder="Enter Email" type="email" name="email" value={ email } onChange={(e)=>{setEmail(e.target.value)}}/><br/>
          <input className="form-control" placeholder="Enter Your Password" type="text" name="password" value={ password } onChange={(e)=>{setPassword(e.target.value)}}/><br/>
          <div className="d-grid gap-2">
              <button type="button" name="button" className="btn btn-success" onClick={ ()=>{ submitData() } }>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;