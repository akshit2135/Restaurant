import Layout from "./components/layout/Layout"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import PageNotFound from './pages/PageNotFound'
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/About" element ={<About />} />
        <Route path="/Contact" element ={<Contact />} />
        <Route path="/Menu" element ={<Menu />} />
        <Route path="*" element ={<PageNotFound/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
