import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { About } from './components/About'
import { TextForm } from "./components/TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "black"
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white"
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextManipulate" about="About US" mode={mode} toggleMode={toggleMode}></Navbar>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/" element={ <TextForm heading="Enter Your Text" mode={mode}></TextForm>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

