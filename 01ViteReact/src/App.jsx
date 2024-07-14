import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(10)

  const addCount =()=>{
    count+=1;
    if(count > 20) count = 20;
    setCount(count);
    console.log(count);
  }
  const removeCount = ()=>{
    count-=1;
    if(count < 0) count = 0;
    setCount(count);
  }

  return (  
    <>
      <div>
        <p>Count is : {count}</p><br/>
        <button onClick = {addCount}>AddCount : {count}</button><br /><br/>
        <button onClick={removeCount}>RemoveCount : {count}</button>
      </div>
    </>
  )
}

export default App
