import SingleProduct from './CustomHooks/SingleProduct';
import Products from './CustomHooks/Products';
import {GlobalStyle} from './CustomHooks/GobalStyle';
import Product from './Components/product/Product';
import Payment from './CustomHooks/Payment'


import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route,Routes } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import Contact from './Pages/contact/Contact';
import Login from './Pages/auth/Login';
import Register from './Pages/auth/Register';
//import OrderHistory from './Pages/orderHistory/OrderHistory'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from "styled-components";
import  Header  from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Cart from "./Pages/cart/Cart";
import "react-toastify/dist/ReactToastify.css";
import Reset from './Pages/auth/Reset';
import Home from './Components/admin/home/Home';


function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };


  return (
    <ThemeProvider theme={theme}>
    
       <ToastContainer/>
       <GlobalStyle/>
        <Header />
        
        <Routes>
       

        <Route path="/Products" element={<Products />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />

        <Route path="/Payment" element={<Payment />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
         <Route path='/Cart' element={<Cart/>}></Route>
          <Route path="/Product" element={<Product />} />
          <Route path="/Reset" element={<Reset />} />
        </Routes>
       
        <Footer />
    </ThemeProvider>
    
  );
}

export default App;
