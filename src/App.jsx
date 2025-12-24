import { useState } from "react";
import Navbar from "./components/Header/Navbar";
import "./App.css";
import HeroSection from "./components/Hero/HeroSection";
import WhyFinech from "./components/WhyFinech/WhyFinech";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyFinech />
    </>
  );
}

export default App;
