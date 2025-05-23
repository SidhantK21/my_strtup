import  { Navbar }  from './components/Navbar';
import { Hero } from './components/Herosection';
import  { Offerings }  from './components/Offerings';
import { Contact } from './components/Contact';
import  { Pricing }  from './components/Pricing';
import Footer  from './components/Footer';
import PreviousWork from './components/PreviousWork';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Offerings />
    
      <PreviousWork />
      
      <Contact />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
