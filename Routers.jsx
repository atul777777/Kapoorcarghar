import { Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import Home from './Home.jsx';
import ContactUs from './ContactUs.jsx';
import Cars from './Cars.jsx';
import CarBlog from './CarBlog.jsx';
import BlogPost from './Blogpost.jsx';
import Signup from './Signup.jsx';
import ProductDetails from './ProductDetails.jsx';
import Header from './Header.jsx';


export const Routers = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Cars" element={<Cars />} />
        <Route path="/CarBlog" element={<CarBlog />} />
        <Route path="/BlogPost/:name" element={<BlogPost />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/product/:name" element={<ProductDetails />} />
        <Route path="/blog/:postId" element={<BlogPost />}/>
      </Routes>
    </div>
    
  );
};

export default Routers;