import  {Navbar}  from './components/Navbar';
import { Hero } from './components/Herosection';
import { Offerings } from './components/Offerings';
import { Contact } from './components/Contact';
import  {Pricing}  from './components/Pricing';
import Footer from './components/Footer';
import PreviousWork from './components/PreviousWork';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="bg-black min-h-screen">
        <Navbar />
      <Hero />
    
      <PreviousWork />
      <TechStack />
      
      <Offerings />
      <Contact />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
