import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  const [themeMode , setThemeMode] = useState("light");

  const darkTheme = ()=>{
    setThemeMode("dark");
  }

  const lightTheme = ()=>{
    setThemeMode("light");
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])



  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
     <b><h1 className='p-4 text-pink-300 text-3xl' >Theme Switcher with context api</h1></b>
      <div className='flex flex-wrap min-h-screen items-center'>
        <div className='w-full max-w-sum mx-auto flex justify-end mb-4'>
          <ThemeBtn />
        </div>
        <div className='w-full max-w-sm mx-auto'>
          <Card />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
