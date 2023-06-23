
import { useState } from 'react';
import './App.css';

function App() {
  //1. state/variable
  const [name,setName] = useState("ritik")

  //2. function defination
  let change = (e) =>{
    console.log(e);
    setName("kishor");
    //setName='deepak'
  }
  return (
    <div className="App">
      <h1>FONCTIONAL COMPONENT</h1>
        <h1>{name}</h1>
        <p>hello,good morning!</p>
        <button onClick={ (e)=>{ change(e)} }>click me</button>
    </div>
  );
}

export default App;
