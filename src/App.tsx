import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import CarBrands from './components/CarBrands';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <CarBrands />
      <HowItWorks />
      <Gallery />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}
