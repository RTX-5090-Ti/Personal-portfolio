import BackgroundDecor from "../components/common/BackgroundDecor";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import LearningJourney from "../sections/LearningJourney";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";

export default function HomePage({ language, setLanguage, content }) {
  return (
    <>
      <BackgroundDecor />
      <Navbar language={language} setLanguage={setLanguage} navText={content.nav} />
      <main>
        <Hero heroText={content.hero} />
        <About aboutText={content.about} />
        <Skills skillsText={content.skills} />
        <Projects projectsText={content.projects} />
        <LearningJourney journeyText={content.journey} />
        <Contact contactText={content.contact} />
      </main>
      <Footer footerText={content.footer} />
    </>
  );
}
