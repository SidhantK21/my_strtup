import Navbar from './components/Navbar';
import Hero from './components/Herosection';
import { Offerings } from './components/Offerings';
import { Contact } from './components/Contact';
import { Pricing } from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Offerings/>
      <Contact/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;