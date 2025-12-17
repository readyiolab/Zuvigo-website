import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gray-100">
     
      
      <div className="container mx-auto px-6 text-center relative z-10 max-w-6xl">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-200 bg-white/80 backdrop-blur-sm mb-8 fade-in-up shadow-sm">
            <span className="w-2 h-2 rounded-full bg-slate-900 animate-pulse" />
            <span className="text-sm text-slate-900 font-medium">Digital Agency for Founders</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 fade-in-up stagger-1 text-slate-900">
            We Don't Just Build Websites.
            <br />
            <span className="bg-indigo-600  bg-clip-text text-transparent">We Build What's Next.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 fade-in-up stagger-2">
            From sleek websites to smart automation, we help founders and entrepreneurs 
            build digital systems that scale their business.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up stagger-3">
            <Button 
              size="lg" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30  transition-all duration-300 px-8"
            >
              Let's Build Together
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-slate-900 hover:bg-slate-950 text-white px-8"
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