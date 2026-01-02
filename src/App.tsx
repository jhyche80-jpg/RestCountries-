
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import CountryDisplay from './components/CountryDisplay'


function App() {



  return (
    <>
      <div>
        <div id='header'>
          <h2>Where in the world?</h2>
        </div>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='country/:country' element={<CountryDisplay />} />
        </Routes>

      </div>





    </>
  )
}

export default App
