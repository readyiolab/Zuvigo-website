import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import Services from '@/components/Services';
import Analytics from '@/components/Analytics';
import SelectedWork from '@/components/SelectedWork';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Process />
      <Services />
      <Analytics />
      <SelectedWork />
      <CTA />
      <Footer />
      <Chatbot/>
    </main>
  );
};

export default Index;
