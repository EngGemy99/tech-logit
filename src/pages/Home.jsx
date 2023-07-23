import React from "react";
import Services from "../components/HomeComponent/Services/Services";
import Projects from "../components/HomeComponent/Projects/Projects";
import Clients from "../components/HomeComponent/Clients/Clients";
import About from "../components/HomeComponent/About/About";
import Portfolio from "../components/HomeComponent/Portfolio/Portfolio";
import Customer from "../components/HomeComponent/Customer/Customer";
import Companies from "../components/HomeComponent/Companies/Companies";
import Header from "../components/HomeComponent/Header/Header";
import Contact from "../components/HomeComponent/Contact/Contact";
function Home() {
  return (
    <>
      <Header />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "#fff",
        }}
        className="py-5"
      >
        <Services />
        <Projects />
        <Clients />
        <About />
        <Portfolio />
        <Customer />
        <Companies />
        <Contact />
      </div>
    </>
  );
}

export default Home;
