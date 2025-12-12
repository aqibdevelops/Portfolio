import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-white/20">
      {/* Background radial gradient spotlight */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(50,50,50,0.4),transparent_50%)]" />

      <div className="relative z-10 font-sans">
        <Navbar />
        <main className="flex flex-col items-center w-full">
          <Hero />
          <Skills />
          <Projects />
          <Pricing />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
