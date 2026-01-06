
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import CountryDisplay from './components/CountryDisplay'
import { useContext } from 'react'
import { ModeContext } from './Provider/context'


function App() {
  const { theme, toggleTheme } = useContext(ModeContext)


  return (
    <div id='Main'>
      <div>
        <div id={theme === 'light' ? "headerLight" : "headerDark"} className='header'>
          <h2>Where in the world?</h2>
          <button id='ModeBtn' onClick={() => toggleTheme()}> {theme === 'light' ? "Dark" : "Light"} Mode</button>
        </div>


        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='country/:country' element={<CountryDisplay />} />
        </Routes>

      </div>





    </div>
  )
}

export default App
