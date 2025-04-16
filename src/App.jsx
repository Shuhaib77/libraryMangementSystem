import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserRoute from './Router'
import { Toaster } from 'sonner'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Toaster richColors position="bottom-right" />
    <UserRoute/>
  
    </>
  )
}

export default App
