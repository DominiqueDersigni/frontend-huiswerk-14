import './App.css'
import { NavLink, Routes, Route } from 'react-router-dom'
import logo from './assets/logo-white.png'

function App() {
    return (
        <>
        <div className="page-container">
            <img src={logo} alt="Company logo"/>
            <h1>Begin hier met het maken van jouw blog-applicatie!</h1>
        </div>

        <main>
            <Routes>
                <Route path="/" element={<h1>Homepage</h1>} />
                <Route path="/newblogpost" element={<h1>New blogpost</h1>} />
                <Route path="/overview" element={<h1>Overzichtpagina</h1>} />
                <Route path="*" element={<h1>Errorpagina</h1>} />
            </Routes>
        </main>
        </>
    )
}

export default App
