import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Header/Navbar";
import Hero from "./Components/Section/Hero"
import Client from "./Components/Section/Client";
import About from "./Components/Section/About";
import WhyUs from "./Components/Section/WhyUs";
import Skills from "./Components/Section/Skills";
import Services from "./Components/Section/Services";
import Cta from "./Components/Section/Cta";
import Portfolio from "./Components/Section/Portfolio";
import Team from "./Components/Section/Team";
import Price from "./Components/Section/Price";
import Faq from "./Components/Section/Faq";
import Contact from "./Components/Section/Contact";
import Footer from "./Components/Footer";

const App = () => {
    return ( 
        <div>
      <Header />
      <Navbar />
      <Hero />
      <Client />
      <About />
      <WhyUs />
      <Skills />
      <Services />
      <Cta />
      <Portfolio />
      <Team />
      <Price />
      <Faq />
      <Contact />
      <Footer />
    </div>
     );
}
 
export default App;