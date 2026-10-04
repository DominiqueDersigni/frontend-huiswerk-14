import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage.jsx'
import OverviewPage from './pages/OverviewPage/OverviewPage.jsx'
import NewPostPage from "./pages/NewPostPage/NewPostPage.jsx";
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import Navigation from './Navigation.jsx'
import logo from './assets/logo-white.png'
import BlogPostPage from "./pages/BlogPostPage/BlogPostPage.jsx";

function App() {
    return (
        <>
            <header className="header">
               <img src={logo} alt="Company logo"/>
                <Navigation />
            </header>
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/newblogpost" element={<NewPostPage />}/>
                <Route path="/overview" element={<OverviewPage />}/>
                <Route path="/blogpost/:id" element={<BlogPostPage />}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
        </main>
        </>
    )
}

export default App
