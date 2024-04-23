import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../common/Header";
import Home from "../home/Home";
import About from "./About";
import Services from "./Services";
import Footer from "../common/Footer";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Contact from "./Contact";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/services" Component={Services} />
          <Route path="/portfolio" Component={Portfolio} />
          <Route path="/testimonials" Component={Testimonials} />
          <Route path="/blog" Component={Blog} />
          <Route path="/contact" Component={Contact} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
