import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/LOgin/Login';
import Registar from './Pages/Login/Registar/Registar';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Blog from './Pages/Shared/Blog/Blog';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Notfound from './Pages/Shared/Notfound/Notfound';




function App() {
 
  

  return (
    <div>
      <Header></Header>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="*" element={<Notfound></Notfound>} />
        <Route path="/register" element={<Registar></Registar>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/register" element={<Registar></Registar>} />
        <Route path="/checkout" element={
         <RequireAuth>
           <Checkout></Checkout>
         </RequireAuth>
        } />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;