import AboutSection from "./Components/AboutSection";
import Contact from "./Components/Contract";
import HomeSection from "./Components/HomeSection";
import Projects from "./Components/Projects";
import Skills from "./Components/SkillsSection";

export default function Home() {
  return (
   <div className="container mx-auto">
   <HomeSection></HomeSection>
  <AboutSection></AboutSection>
  <Skills></Skills>
  <Projects></Projects>
  <Contact></Contact>
   </div>
  );
}
