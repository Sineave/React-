import { useState , useCallback , useEffect , useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(10);
  const [numberAllow , setNumberAllow] = useState(false);
  const [charAllow , setCharAllow] = useState(false);

  const [password , setPassword]=useState("");

  // useRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllow) str+= "0123456789";
    if(charAllow) str+= "!@#$%^&*(){}[]|/?<>,.~`;:"

    for(let i = 1 ; i <= length ; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass)

  } , [length , numberAllow , charAllow , setPassword]);

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
  } , [password])
  
  useEffect(()=>{passwordGenerator()} , [length,numberAllow,charAllow,passwordGenerator])

  return (
    <>
      <h1 className='text-4xl text-center p-4 bg-green-400 text-black rounded-md'>Password Generator</h1>
      <div className='w-full h-96 max-w-mid mx-auto shadow-md rounded-lg text-gray-200 px-4 my-8 bg-green-600'>
        <div className='flex justify-center rounded-lg overflow-hidden mb-4'>
          <input ref={passwordRef} type="text" value={password} className='outline-none mt-4 rounded-xl w-6/12 py-1 px-3 h-10 rounded-r-none text-green-600' placeholder='Password' readOnly/>
          <button onClick={copyPassword} className='outline-none bg-green-300 text-white px-3 py-0.5 shrink-0 rounded-xl h-10 mt-4 rounded-l-none'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2 justify-center'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllow} id='numberInput' onChange={()=>{setNumberAllow((prev)=>!prev)}}/>
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={charAllow} id='charInput' onChange={()=>{setCharAllow((prev)=>!prev)}}/>
          <label>Characters</label>
          </div>
        </div>
      </div>
    </>   
  )
}

export default App
