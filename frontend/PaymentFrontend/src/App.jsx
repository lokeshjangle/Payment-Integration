import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Button from './Component/Button'
function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
      <Route exact path="/" element={<Button />} /> 
   </Routes>
   </BrowserRouter>
  )
}

export default App
