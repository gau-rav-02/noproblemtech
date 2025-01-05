import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import AboutUs from './pages/About/about'
import Contact from './pages/Contact/contact'
import Career from './pages/Career/career'
import Apply from './pages/Apply/apply'
import CareerCounselling from './pages/CareerCounselling/careercounselling'
import Multiservice from './pages/Multiservice/multiservice'
import ScrollToTop from './components/ScrollToTop/scrolltotop'

function App() {

  return (
    <main>
      <Header/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/apply' element={<Apply/>}/>
        <Route path='/careercounselling' element={<CareerCounselling/>}/>
        <Route path='/multiservice' element={<Multiservice/>}/>
      </Routes>
      <Footer/>
    </main>
  )
}

export default App
