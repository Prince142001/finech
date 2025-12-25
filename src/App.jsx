import { useState } from "react";
import Navbar from "./components/Header/Navbar";
import "./App.css";
import HeroSection from "./components/Hero/HeroSection";
import WhyFinech from "./components/WhyFinech/WhyFinech";
import WhoIsItFor from "./components/WhoIsItFor/WhoIsItFor";
import FinanceSolution from "./components/FinanceSolution/FinanceSolution";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyFinech />
      <WhoIsItFor />
      <FinanceSolution />
    </>
  );
}

export default App;
