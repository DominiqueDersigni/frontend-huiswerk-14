import './App.css'
import { NavLink, Routes, Route } from 'react-router-dom'
import logo from './assets/logo-white.png'
import HomePage from './pages/homepage/homepage.jsx'
import ErrorPage from "./pages/errorpage/errorpage.jsx";
import OverviewPage from "./pages/overviewpage/overviewpage.jsx";
import NewBlogPostPage from "./pages/newblogpostpage/newblogpostpage.jsx";

function App() {
    return (
        <>
            <div className="page-container">
                <img src={logo} alt="Company logo"/>
                <h1>Begin hier met het maken van jouw blog-applicatie!</h1>
            </div>

            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/newblogpost" element={<NewBlogPostPage />} />
                    <Route path="/overview" element={<OverviewPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </main>
        </>
    )
}

export default App