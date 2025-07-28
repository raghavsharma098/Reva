import ReviewCard from "./components/reviewCard";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Main from "./components/Main";
import About from "./components/About";
import Hower from "./components/Hower";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Disclaimer from "./components/Disclaimer";
import Footer from "./components/Footer";
import Form1 from "./components/Form1";
import Homehero from "./components/Homehero";
import './index.css';

function App() {
  return (
    <div>
      {/* Hero & Header */}
      <div className="mt-0"><Homehero /></div>
      <div className="my-0"><Header /></div>

      {/* Main Sections */}
      <div><Main /></div>
      <div><Cards /></div>
      <div><About /></div>
      <div><Form1 /></div>

      {/* Scroll Target Sections */}
      <section id="about-us" className="scroll-mt-24">
        <AboutUs />
      </section>

      <section id="contact-us" className="scroll-mt-24">
        <ContactUs />
      </section>

      <section id="terms" className="scroll-mt-24">
        <Terms />
      </section>

      <section id="privacy-policy" className="scroll-mt-24">
        <Privacy />
      </section>

      <section id="declaimer" className="scroll-mt-24">
        <Disclaimer />
      </section>

      {/* Footer */}
      <div><Footer /></div>
    </div>
  );
}

export default App;
