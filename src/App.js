import { Routes, Route} from 'react-router-dom'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
import About from './Pages/About'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='menu' element={<Menu/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
