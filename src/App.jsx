import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Sed23 from "./components/Sed23";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Sponsors from "./components/Sponsors";
import Report from "./components/Report";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header id="header">
        <Header />
      </header>
      <main>
        <Hero />
        <Sed23 />
        {/* <Sponsors /> */}
        <About />
        <Report/>
        <Team />
        <Contact />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
