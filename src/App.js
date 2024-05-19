import About from './components/About';
import Contact from './components/Contact';
import Experense from './components/Experence';
import Footer from './components/Footer';
import HeaderHero from './components/HeaderHero/index';
import Navbar from './components/Navbar/index';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar />
      <HeaderHero />
      <About />
      <Experense />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
