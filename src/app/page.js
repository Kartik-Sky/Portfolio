import Image from "next/image";
import './globals.css';
import { NavBar } from "./Components/navbar";
import { Banner } from "./Components/banner";
import { Skills } from "./Components/mySkills";
import { Projects } from "./Components/projects";
import Experience from "./Components/Experience";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

export default function Home() {
  return (
    <div className="App">
      <div className="bgClass">
        <NavBar/>
        <Banner/>
      </div>
        <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}
