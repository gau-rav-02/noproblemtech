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
import FloatingWhatsapp from './components/FloatingWhatsapp/floatingWhatsapp'
import PrivacyPolicy from './pages/Policies/PrivacyPolicy'
import SecurityPolicy from './pages/Policies/SecurityPolicy'
import SoftwarePrinciples from './pages/Policies/SoftwarePrinciples'

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
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/security-policy' element={<SecurityPolicy/>}/>
        <Route path='/software-principles' element={<SoftwarePrinciples/>}/>
      </Routes>
      <FloatingWhatsapp />
      <Footer/>
    </main>
  )
}

export default App
