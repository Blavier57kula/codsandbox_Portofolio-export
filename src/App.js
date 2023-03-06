import "./styles.css";
import "./styles/index.pcss";
import "./styles/tailwind-pre-build.css";
import Hero from "./component/Hero";
import Bot from "./component/Bot";
import Apropos from "./component/Apropos";
import Hireme from "./component/Hireme";
import Competence from "./component/Competence";
import Contact from "./component/Contact";
import Projet from "./component/Projet";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bot />
      <Hero />
      <Apropos />
      <Competence />
      <Hireme />
      <Projet />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
