import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Navigation from "./components/navigation/Navigation";
import Professional from "./components/Professional/Professional";
// import Project from "./components/projects/Project";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Project3 from "./components/projects/Project3";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Intro />
      <About />
      <Skills />
      {/* <Project /> */}
      <Project3 />
      <Professional />
      <Contact />
    </div>
  );
}

export default App;
