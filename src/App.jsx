import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import Services from './sections/Services.jsx';
import Team from './sections/Team.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx'; 
import ScrollProgess from './components/ScrollProgress.jsx';
import Location from './sections/Location.jsx';
import Testimonials from './sections/Testimonials.jsx';
import Contact from './sections/Contact.jsx';
import CTAStickyFooter from './components/CtaStickyFooter.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className='bg-sky-60 text-slate-800 min-h-screen'>
      
      <Navbar />
      <ScrollProgess />

      
      <main>
        <Hero />
        <Services />
        <Team />
        <Location />
        <Testimonials />
        <Contact />
      </main>


      <CTAStickyFooter />
      <WhatsAppFloat />
      <Footer />
    </div>
  );
}
