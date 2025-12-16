import { BarChart3, Search, PieChart, TrendingUp, Database, Target } from 'lucide-react';

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
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '3x', label: 'Average Growth' },
  { value: '24/7', label: 'Support Available' },
];

const Analytics = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Data-Driven</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">Analytics & Insights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Make informed decisions with comprehensive analytics and actionable insights.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Analytics Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {analyticsCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-card border border-border card-hover"
            >
             

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{category.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {category.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
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
