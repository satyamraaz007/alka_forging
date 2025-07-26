import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ImpressionDieForging from './pages/ImpressionDieForging';
import Materials from './pages/Materials';
import MaterialDetail from './pages/MaterialDetail';
import Capabilities from './pages/Capabilities';
import Industries from './pages/Industries';
import About from './pages/About';
import DirectorMessage from './pages/DirectorMessage';
import FAQ from './pages/FAQ';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import Careers from './pages/Careers';
import Quote from './pages/Quote';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <div className="min-h-screen bg-white">
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/impression-die-forging" element={<ImpressionDieForging />} />
              <Route path="/materials" element={<Materials />} />
              <Route path="/materials/:material" element={<MaterialDetail />} />
              <Route path="/capabilities" element={<Capabilities />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/about" element={<About />} />
              <Route path="/director-message" element={<DirectorMessage />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </MotionConfig>
  );
}

export default App;