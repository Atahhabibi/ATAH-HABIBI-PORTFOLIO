import {
  AboutSection,
  ContactSection,
  Footer,
  HeroSection,
  Sidebar,
  Skills,
  WorksSection,
} from "./components";
import BlogsSection from "./components/BLogsSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Skills />
      <Sidebar />
      <WorksSection />
      <BlogsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
