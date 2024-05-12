import { useState } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import { Switch } from "@material-tailwind/react"

function App() {

  const [darkMode, setDarkMode] = useState(true)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`font-firaCode ${darkMode && "dark"}`}>
      <div className="dark:bg-primary-dark h-screen overflow-x-hidden">
        <Header/>
        <div className="flex justify-end pt-3 px-6">
          <Switch className="" defaultChecked onClick={toggleDarkMode}/>
        </div>
        <main>
          <Home/>
        </main>
      </div>
    </div>
  )
}

export default App
