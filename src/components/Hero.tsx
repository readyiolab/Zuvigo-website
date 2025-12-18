import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100">
      {/* Background Image Full Width */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(./hero.png)',
            backgroundPosition: 'center right',
          }}
        />
        {/* Dark Overlay - Left Side Only */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent" />
      </div>

      {/* Content Left Side */}
      <div className="container mx-auto px-6  relative z-10 max-w-7xl" style={{paddingTop:"90px"}}>
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          

          {/* Main Headline */}
          <h1 className="text-4xl md:text-4xl lg:text-7xl font-semibold leading-tight mb-4 fade-in-up stagger-1 text-slate-900">
            We Don't Just Build Websites.
            <br />
            <span className="text-indigo-600 md:text-5xl">We Build What's Next.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-slate-700 max-w-lg mb-12 fade-in-up stagger-2 leading-relaxed">
            From sleek websites to smart automation, we help founders and entrepreneurs 
            build digital systems that scale their business.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4 fade-in-up stagger-3">
            <Button 
              size="lg" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 px-8 py-6 text-base font-semibold rounded-lg"
            >
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .stagger-1 {
          animation-delay: 0.1s;
        }
        
        .stagger-2 {
          animation-delay: 0.2s;
        }
        
        .stagger-3 {
          animation-delay: 0.3s;
        }
        
        .stagger-4 {
          animation-delay: 0.4s;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;