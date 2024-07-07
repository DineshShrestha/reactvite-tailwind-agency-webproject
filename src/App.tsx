import Navbar from './components/Navbar.tsx'
import Home from './components/Home.tsx'
import Services from './components/Services.tsx'
import About from './components/About.tsx'
import Products from './components/Products.tsx'
import Blog from './components/Blog.tsx'
import NewsLetter from './components/NewsLetter.tsx'
import MyFooter from './components/MyFooter.tsx'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Products/>
      <Blog/>
      <NewsLetter/>
      <MyFooter/>
    </>
  )
}

export default App
