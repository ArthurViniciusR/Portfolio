import { useState } from "react"
import Header from "./components/Header"
import { Switch } from "@material-tailwind/react"

function App() {

  const [darkMode, setDarkMode] = useState(true)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`font-firaCode ${darkMode && "dark"}`}>
      <div className="dark:bg-primary-dark">
        <Header/>
        <Switch className="" defaultChecked onClick={toggleDarkMode}/>
      </div>
    </div>
  )
}

export default App
