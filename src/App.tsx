import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#fcf9f6]">
      <div className="max-w-[1440px] mx-auto">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <TestimonialsSection />
          <FaqSection />
          <BlogSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;