import Navbar from './components/Navbar';
import Hero from './components/Herosection';
import CardSpotlight from './components/Pricing';
import  Footer  from './components/Footer';
import PreviousWork from './components/PreviousWork';
import TechStack from './components/TechStack';


function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <CardSpotlight/>
      <PreviousWork/>
      <TechStack/>
        <Footer/>

    </div>
  );
}

export default App;