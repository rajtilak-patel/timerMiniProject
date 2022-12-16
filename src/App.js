
import { useState } from 'react';
import './App.css';

function App() {

  let time = new Date().toLocaleTimeString();
  const [cTime , setCTime] = useState(time)

  const updateData = () =>{
    let time = new Date().toLocaleTimeString();
    setCTime(time)
  }

  setInterval(updateData ,1000);

  return (
    <div className="App">
      <h1 style={{fontSize:"50px"}}>{cTime}</h1>
    </div>
  );
}

export default App;
