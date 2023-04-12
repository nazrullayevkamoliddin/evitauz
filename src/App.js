import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from './pages/about/About'
import Features from "./pages/features/Features";
import Products from "./pages/products/Products";
import Services from "./pages/services/Services";
import Testimonals from "./pages/testimonals/Testimonals";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";


const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Features/>
            <Products/>
            <Services/>
            <Testimonals/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App;