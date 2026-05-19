import { useState } from 'react'
// import './App.css'

function App() {
 let  [counter , setCounter] = useState(0)


const addvalue = ()=>{
      // counter = counter + 1
      if(counter <20){
      setCounter(counter + 1) 
      
      }
    }

const removeValue = () =>{
  if(counter >0){
  setCounter(counter - 1)
  // console.log("removed" ,counter);
  }
}

  return (
    
    <>
          <h1>Chai aur react</h1>
          <h2>Counter value :{counter}</h2>
          <button onClick={addvalue}>Add value</button>
          <br/>
          <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
