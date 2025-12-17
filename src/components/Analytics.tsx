import { useState, useEffect, useRef } from 'react';
import { BarChart3, Search, PieChart } from 'lucide-react';

const analyticsCategories = [
  {
    icon: BarChart3,
    title: 'Reports & Dashboards',
    description: 'Real-time insights into your business performance.',
    features: ['Custom Dashboards', 'Automated Reports', 'KPI Tracking', 'Data Visualization'],
  },
  {
    icon: Search,
    title: 'SEO & Web Analytics',
    description: 'Understand how users find and interact with your site.',
    features: ['Keyword Rankings', 'Traffic Analysis', 'Conversion Tracking', 'Competitor Analysis'],
  },
  {
    icon: PieChart,
    title: 'Business Analytics',
    description: 'Make data-driven decisions that grow your business.',
    features: ['Revenue Analytics', 'Customer Insights', 'Market Trends', 'ROI Measurement'],
  },
];

const stats = [
  { value: 150, label: 'Projects Delivered', suffix: '+' },
  { value: 98, label: 'Client Satisfaction', suffix: '%' },
  { value: 3, label: 'Average Growth', suffix: 'x' },
  { value: 24, label: 'Support Available', suffix: '/7' },
];

const CounterAnimation = ({ end, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;
      
      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return <>{count}{suffix}</>;
};

const Analytics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 text-sm font-semibold tracking-wider uppercase">Data-Driven</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">Analytics & Insights</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Make informed decisions with comprehensive analytics and actionable insights.
          </p>
        </div>

        {/* Stats Row with Counter Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-50 border border-indigo-100 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">
                {isVisible ? (
                  <CounterAnimation end={stat.value} suffix={stat.suffix} />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Analytics Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {analyticsCategories.map((category) => (
            <div
              key={category.title}
              className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center mb-5 group-hover:bg-indigo-100 transition-colors">
                <category.icon className="w-7 h-7 text-indigo-600" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-slate-900">{category.title}</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">{category.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {category.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 font-medium hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Analytics;