import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'

function App() {

  return (
    <>
      <div  className="min-h-screen bg-custom-cream font-montserrat"> 
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </HashRouter>
      </div>
    </>
  )
}

export default App
