import { Globe, Zap, TrendingUp, BarChart3, Check } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Solutions Designed for Every Stage of Growth</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Whether you're launching, automating, or scaling, Zuvigo provides structured digital systems that help your business thrive.
          </p>
        </div>

        {/* Build & Presence Section */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                
                <h3 className="text-3xl font-bold">Build & Presence</h3>
              </div>
              <p className="text-xl font-semibold text-muted-foreground mb-2">
                Build a digital foundation that converts.
              </p>
              <p className="text-muted-foreground">
                From your first website to an integrated digital ecosystem, we help you create an online presence that performs and converts.
              </p>
            </div>
            <div className="relative h-64  flex items-center justify-center">
              <img src="./Build.png" alt="" />
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-3">Custom Website Design</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Build stunning, mobile-responsive websites tailored to your brand.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Mobile Optimization</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">SEO-Integrated Design</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Fast Loading, High Conversion</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">CMS & Custom Dashboards</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-3">High-Converting Landing Pages</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Create funnels that turn visitors into booked calls and sales.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Conversion-focused layouts & flows</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Custom Funnels</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">A/B Testing</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Analytics Integration</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-3">Google Business Profile</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Boost your local visibility and attract clients where they search most.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Local SEO Optimization</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Profile Setup & Review Management</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Analytics Tracking</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Local Listing Management</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground italic">
              Your digital home — designed to earn trust and convert visitors into customers.
            </p>
          </div>
        </div>

        {/* Automate & Scale Section */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                
                <h3 className="text-3xl font-bold">Automate & Scale</h3>
              </div>
              <p className="text-xl font-semibold text-muted-foreground mb-2">
                Let your systems work while you sleep.
              </p>
              <p className="text-muted-foreground">
                Streamline operations, automate repetitive tasks, and scale your business with smart integrations and marketing automation.
              </p>
            </div>
            <div className="relative h-64  flex items-center justify-center">
              <img src="./Automate.png" alt="" />
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-3">AI Setup & Automation</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Automate client interactions with intelligent systems for calls, chats, & scheduling.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">AI Chat & Call Systems</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Auto Booking & Lead Capture</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Workflow Integrations</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">24/7 Automated Operations</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-3">Email Marketing Campaigns</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Nurture leads with personalized, automated email sequences that build relationships.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Campaign Design & Segmentation</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Drip Sequences & Analytics</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Lead Nurturing Automations</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Engagement Tracking</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-3">Reputation & Reviews</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Build credibility with automated feedback and reputation management.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Review Collection & Display</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Testimonial Automation</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Feedback Monitoring Systems</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Response Management</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground italic">
              From leads to bookings — everything runs seamlessly.
            </p>
          </div>
        </div>

        {/* Engage & Grow Section */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
               
                <h3 className="text-3xl font-bold">Engage & Grow</h3>
              </div>
              <p className="text-xl font-semibold text-muted-foreground mb-2">
                Build an audience that stays.
              </p>
              <p className="text-muted-foreground">
                Transform your audience into loyal advocates through authentic content, storytelling, and consistent visibility.
              </p>
            </div>
            <div className="relative h-64   flex items-center justify-center">
              <img src="./Grow.png" alt="" className='object-cover' />
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-3">Social Media Management</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Engage audiences with content that builds trust and community.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Content Creation & Strategy</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Posting Schedules & Automation</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Engagement Tracking</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Brand Community Building</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-3">Custom Reels & Videos</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Show your story through professional, shareable videos that drive attention & leads.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Video Production & Reels Creation</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Content Strategy</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Social Media Integration</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Professional Editing</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-3">Content Growth Campaigns</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Build consistent visibility through strategic content that attracts, educates, & converts.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Blog & Newsletter Systems</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Cross-Channel Publishing</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">SEO-Driven Content Planning</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Engagement Optimization</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground italic">
              Turn engagement into growth through storytelling and visibility.
            </p>
          </div>
        </div>

        {/* Analytics & Insights Section */}
        <div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                
                <h3 className="text-3xl font-bold">Analytics & Insights</h3>
              </div>
              <p className="text-xl font-semibold text-muted-foreground mb-2">
                Know what works. Improve what matters.
              </p>
              <p className="text-muted-foreground">
                Make smarter decisions with real data — not guesswork. We help you understand user behavior, optimize performance, and measure success with precision.
              </p>
            </div>
            <div className="relative h-64  flex items-center justify-center">
            <img src="./Analytics.png " alt="" />
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-3">Performance Analytics</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Get visibility into what's driving growth and what's not.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Funnel Performance & Drop-off Tracking</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Real-time KPI Dashboards</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Conversion Metrics & Trend Visualization</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Traffic Source Analysis</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-3">Optimization Experiments</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Continuously test, learn, and refine to boost results.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">A/B Testing & Variant Tracking</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">UX & UI Impact Measurement</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Behavior Heatmaps & Click Maps</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Data-Driven Content Improvements</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-3">Business Intelligence Dashboards</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Centralize your data and insights across tools in one clean view.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Marketing ROI Reporting</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Attribution & Forecasting Models</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Data Pipeline Integrations</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Automated Performance Summaries</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground italic">
              Data-backed decisions for continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;