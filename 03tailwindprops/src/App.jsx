import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username :"ritika",
    age:19
  }

  let myarr = [1,2,3]

  return (
    <>
    <div className='bg-red-400'>
       <h1 className='bg-green-500 text-red-800 p-4 rounded-xl text-center font-bold text-5xl'>tailwilnd css</h1>
       <div className='flex justify-center'>
       <Card username="chaiaurcode" btntext='click me '/>
       <Card username="Ritika" btntext='click this'/>
       </div>
       </div>
    </>
  )
}

export default App
