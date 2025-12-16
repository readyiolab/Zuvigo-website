import { useState } from 'react';
import { ExternalLink, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  services: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: 'singhkarman',
    title: 'SinghKarman',
    category: 'Personal Brand',
    description: 'A premium personal brand website for a professional looking to establish thought leadership.',
    challenge: 'Creating a unique digital presence that stands out in a crowded market while maintaining professionalism.',
    solution: 'We designed a bold, minimalist website with strong typography, seamless navigation, and integrated content strategy.',
    results: ['300% increase in inquiries', '50K+ monthly visitors', 'Featured in industry publications'],
    services: ['Website Design', 'Brand Strategy', 'SEO Optimization'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
  {
    id: 'igrowbig',
    title: 'iGrowBig',
    category: 'Growth Platform',
    description: 'A comprehensive growth platform helping businesses scale through data-driven strategies.',
    challenge: 'Building a platform that simplifies complex growth metrics for non-technical founders.',
    solution: 'We developed an intuitive dashboard with AI-powered insights and automated reporting.',
    results: ['2x user engagement', '40% faster onboarding', '95% user retention rate'],
    services: ['Platform Development', 'UI/UX Design', 'Analytics Integration'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
  {
    id: 'arbilo',
    title: 'Arbilo',
    category: 'SaaS Platform',
    description: 'An innovative SaaS solution streamlining business operations and team collaboration.',
    challenge: 'Creating a scalable platform that handles high traffic while maintaining performance.',
    solution: 'We built a robust, cloud-native architecture with real-time collaboration features.',
    results: ['10K+ active users', '99.9% uptime', '60% reduction in operational costs'],
    services: ['Full-Stack Development', 'Cloud Architecture', 'Automation'],
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
  },
  {
    id: 'techflow',
    title: 'TechFlow Solutions',
    category: 'Enterprise Software',
    description: 'Enterprise-grade workflow automation platform for mid-size companies.',
    challenge: 'Modernizing legacy systems while ensuring zero downtime during transition.',
    solution: 'Phased migration approach with custom integrations and comprehensive training.',
    results: ['75% time saved on manual tasks', '200+ workflows automated', '5x ROI in first year'],
    services: ['System Integration', 'Workflow Automation', 'Training & Support'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
  },
  {
    id: 'velocity',
    title: 'Velocity Brands',
    category: 'E-Commerce',
    description: 'A high-converting e-commerce platform with advanced personalization features.',
    challenge: 'Standing out in a saturated market with better customer experience.',
    solution: 'AI-driven product recommendations and a streamlined checkout experience.',
    results: ['150% increase in sales', '35% higher average order value', '4.9 star rating'],
    services: ['E-Commerce Development', 'AI Integration', 'Marketing Automation'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
  },
];

const SelectedWork = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleProject = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="work" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">Selected Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
                expandedId === project.id
                  ? 'md:col-span-2 lg:col-span-3 bg-card border border-border'
                  : 'bg-card border border-border card-hover cursor-pointer'
              } ${expandedId && expandedId !== project.id ? 'opacity-40' : ''}`}
              onClick={() => !expandedId && toggleProject(project.id)}
            >
              {expandedId === project.id ? (
                /* Expanded View */
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-primary text-sm font-medium">{project.category}</span>
                      <h3 className="text-3xl font-bold mt-2">{project.title}</h3>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedId(null);
                      }}
                      className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Image */}
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Overview</h4>
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-2">The Challenge</h4>
                        <p className="text-muted-foreground">{project.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-2">Our Solution</h4>
                        <p className="text-muted-foreground">{project.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-2">Results</h4>
                        <ul className="space-y-2">
                          {project.results.map((result, index) => (
                            <li key={index} className="flex items-center gap-2 text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-2">Services Provided</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.services.map((service) => (
                            <span
                              key={service}
                              className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Collapsed View */
                <div className="group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    
                    {/* Hover Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <span className="text-primary text-sm font-medium">{project.category}</span>
                    <h3 className="text-xl font-semibold mt-1 mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
