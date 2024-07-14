import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName:'Jenny',
    age:19
  }
  return (
    <>
     <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'>Tailwind Test</h1>
     <Card username = 'Jenny' />  
     {/* array and objects cannot be passed directly in props */}
     {/* it can be passed as someObj = {myObj} */}
     <Card username = 'Jackie' btnText = 'View Here' />
    </>
  )
}

export default App
