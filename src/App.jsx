import { AboutSection, HeroSection, Sidebar, Skills, WorksSection } from "./components"
import BlogsSection from "./components/BLogsSection"
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
    <BlogsSection/>
    <Section/>
    
  </div>
}

export default App
