import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    travel : 'yes',
    id : 1
  }

  let newArray = [1,2,3,4]
  return (
  <>
    <h1 className='bg-green-400 text-orange-500 rounded-xl'>Tailwind test</h1>
    <Card userName = 'React' btnText = "click me" passObj={myObj} passArray={newArray}/*myArr =[1,2,3,4] obj1 = {}*/ />
    <Card userName = 'Javascript' btnText = "visit me"/>
  </>
  )
}

export default App
