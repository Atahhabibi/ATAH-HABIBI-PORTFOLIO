import { AboutSection, HeroSection, Sidebar, Skills, WorksSection } from "./components"
import Navbar from "./components/Navbar"
import Section from './components/Section'



function App() {

  return <div >
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <Skills/>
    <Sidebar/>
    <WorksSection/>
    <Section/>
  </div>
}

export default App
