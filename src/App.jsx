import { useState } from "react"
import { Switch } from "@material-tailwind/react"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Qualifications from "./components/Qualifications"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import Projects from "./components/Projects"

function App() {

  const [darkMode, setDarkMode] = useState(true)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    
    <div className={`font-firaCode ${darkMode && "dark"}`}>
      <div className="dark:bg-primary-dark h-screen overflow-x-hidden">
        <Header/>
        <div className="flex justify-end py-10 px-6">
          <Switch defaultChecked onClick={toggleDarkMode}/>
        </div>
        <main>
          <Home/>
          <About/>
          <Qualifications/>
          <Skills/>
          <Projects/>
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default App
