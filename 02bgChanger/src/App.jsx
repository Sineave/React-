import { useState } from 'react'

function App() {
  const [color, setColor] = useState('red');

  return (
    <>
      <div className='w-full h-screen text-white'
      style={{backgroundColor:color}}>
        <div className='fixed bottom-12 insert-x-0 px-2 flex flex-wrap justify-center align-middle w-full bg-red '>
          <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-black rounded-xl px-3 py-2'>
            <button onClick={()=>setColor('red')}
            className='outline-none px-4 bg-red-600 py-1 rounded-full shadow-lg'>Red</button>
            <button onClick={()=>setColor('green')}
            className='outline-none px-4 bg-green-600 py-1 rounded-full shadow-lg'>Green</button>
            <button onClick={()=>setColor('blue')}
            className='outline-none px-4 bg-blue-600 py-1 rounded-full shadow-lg'>Blue</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
