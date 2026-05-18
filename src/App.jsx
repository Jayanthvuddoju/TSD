import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import StaffingServices from './pages/StaffingServices';
import TechSolutions from './pages/TechSolutions';
import WhyChooseUs from './pages/WhyChooseUs';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#063330] to-[#1ca89d] bg-fixed relative text-white">
      <ScrollToTop />
      {/* Main Layout Container */}
      <div className="relative z-10 flex flex-col min-h-screen pointer-events-none">
        {/* Enable pointer events on nested components to allow full interactivity */}
        <div className="pointer-events-auto flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/staffing-services" element={<StaffingServices />} />
              <Route path="/tech-solutions" element={<TechSolutions />} />
              <Route path="/why-tsd" element={<WhyChooseUs />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
