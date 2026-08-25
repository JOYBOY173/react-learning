import Hero from "./Hero";
import Services from "./services";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Navbar />
      <main id="home">
        <Hero
          title="We build digital experiences."
          description="Websites and web applications for ambitious businesses."
        />
      </main>
      <Services />
      <About />
      <Contact />
    </>
  );
}

export default App;
