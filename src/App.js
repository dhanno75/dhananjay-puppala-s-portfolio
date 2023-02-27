import "./App.css";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Navigation from "./components/navigation/Navigation";
import Professional from "./components/Professional/Professional";
import Project from "./components/projects/Project";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Intro />
      <About />
      <Skills />
      <Project />
      <Professional />
      <Contact />
    </div>
  );
}

export default App;
