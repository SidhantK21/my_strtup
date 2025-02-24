import Navbar from './components/Navbar';
import Hero from './components/Herosection';
import CardSpotlight from './components/Pricing';
import  Footer  from './components/Footer';


function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <CardSpotlight/>
      <Footer/>
    </div>
  );
}

export default App;