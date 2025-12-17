import { ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  services: string[];
  logo?: string;
  mockup?: string;
}

const projects: Project[] = [
  {
    id: 'arbilo',
    title: 'Arbilo',
    subtitle: 'Crypto arbitrage & analytics platform',
    description: 'A comprehensive trading platform that helps users identify and execute arbitrage opportunities across multiple exchanges.',
    services: ['Product strategy', 'Platform development', 'Automation & dashboards'],
    mockup: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
  },
  {
    id: 'singhkarman',
    title: 'SinghKarman',
    subtitle: 'Brand & website for professional services firm',
    description: 'A premium personal brand website establishing thought leadership and credibility in the consulting space.',
    services: ['Brand positioning', 'Website design', 'Conversion optimization'],
    mockup: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
  },
  {
    id: 'igrowbig',
    title: 'iGrowBig',
    subtitle: 'Growth-focused digital platform for entrepreneurs',
    description: 'An intuitive platform that simplifies complex growth metrics and provides actionable insights for scaling businesses.',
    services: ['Product structuring', 'Website build', 'Content & growth systems'],
    mockup: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop',
  },
  
];

const SelectedWork = () => {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 text-sm font-semibold tracking-wider uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">Selected Work</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Explore some of our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-indigo-100/50 hover:border-indigo-200 transition-all duration-300"
            >
              {/* Mockup/Logo Area */}
              <div className="relative h-48 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8 overflow-hidden">
                {project.mockup ? (
                  <img 
                    src={project.mockup} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 "
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center">
                    <span className="text-2xl font-bold text-slate-900">{project.title.substring(0, 2)}</span>
                  </div>
                )}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                
                {/* Subtitle */}
                <p className="text-slate-600 font-medium mb-4">{project.subtitle}</p>

                {/* Services List */}
                <ul className="space-y-2 mb-6">
                  {project.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                {/* View Case Button */}
                <button className="group/btn flex items-center gap-2 text-slate-900 font-semibold text-sm hover:text-indigo-600 transition-colors">
                  View Case
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-indigo-600/20 pointer-events-none transition-colors duration-300" />
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default SelectedWork;