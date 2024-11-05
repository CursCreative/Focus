import { useState } from 'react'
import './App.css'
import WellBeing from './WellBeing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WellBeing/>
    </>
  )
}

export default App
