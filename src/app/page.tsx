import AboutSection from "./Components/AboutSection";
import Contact from "./Components/Contract";
import Education from "./Components/Education";
import HomeSection from "./Components/HomeSection";
import Projects from "./Components/Projects";
import Skills from "./Components/SkillsSection";

export default function Home() {
  return (
   <div>
   <HomeSection></HomeSection>
  <AboutSection></AboutSection>
  <Skills></Skills>
  <Projects></Projects>
  <Education></Education>
  <Contact></Contact>
   </div>
  );
}
