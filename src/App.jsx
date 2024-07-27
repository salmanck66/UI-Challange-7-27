import { useState } from 'react'
import './App.css'
import Nav from './assets/components/Nav.jsx'
import Sidebar from './assets/components/Sidebar.jsx'
import MainWindow from './assets/components/MainWindow.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <div className=' flex justify-between bg-red'> 
      <Sidebar/>
      <MainWindow/>
     </div>
    </>
  )
}

export default App
