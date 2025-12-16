import { Lightbulb, Monitor, TrendingUp, Headphones } from 'lucide-react';

const processes = [
  {
    icon: Lightbulb,
    title: 'Strategy & Product',
    description: 'We define your vision, target audience, and build a roadmap that aligns with your business goals.',
    features: ['Market Research', 'User Personas', 'Product Roadmap'],
  },
  {
    icon: Monitor,
    title: 'Website & Platform',
    description: 'We design and develop stunning, high-performance websites and platforms that convert.',
    features: ['Custom Design', 'Development', 'Mobile-First'],
  },
  {
    icon: TrendingUp,
    title: 'Growth & Optimization',
    description: 'We implement strategies to drive traffic, improve conversions, and scale your business.',
    features: ['SEO & Analytics', 'A/B Testing', 'Performance'],
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'We provide continuous support, updates, and improvements to keep your business growing.',
    features: ['24/7 Support', 'Regular Updates', 'Maintenance'],
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Process</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">How We Build</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that transforms your ideas into successful digital products.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processes.map((process, index) => (
            <div
              key={process.title}
              className="group relative p-6 rounded-xl bg-card border border-border card-hover"
            >
              {/* Number */}
              <span className="absolute top-4 right-4 text-6xl font-bold text-muted/20 group-hover:text-primary/20 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <process.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{process.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {process.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
