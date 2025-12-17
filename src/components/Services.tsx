import { Globe, Zap, TrendingUp, BarChart3, Check } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Solutions Designed for Every Stage of Growth</h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            Whether you're launching, automating, or scaling, Zuvigo provides structured digital systems that help your business thrive.
          </p>
        </div>

        {/* Build & Presence Section - Image Right */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-12">
            <div>
              <h3 className="text-4xl font-bold mb-4 text-slate-900">Build & Presence</h3>
              <p className="text-xl font-semibold text-indigo-600 mb-3">
                Build a digital foundation that converts.
              </p>
              <p className="text-slate-600 text-lg">
                From your first website to an integrated digital ecosystem, we help you create an online presence that performs and converts.
              </p>
            </div>
            <div className="relative h-80 bg-gray-100 rounded-3xl flex items-center justify-center shadow-lg shadow-blue-100/50">
              <img src="./Build.png" alt="Build & Presence" className="max-h-full object-contain" />
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
              <h4 className="text-xl font-bold mb-3 text-slate-900">Custom Website Design</h4>
              <p className="text-slate-600 text-sm mb-6">
                Build stunning, mobile-responsive websites tailored to your brand.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Mobile Optimization</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">SEO-Integrated Design</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Fast Loading, High Conversion</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">CMS & Custom Dashboards</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
              <h4 className="text-xl font-bold mb-3 text-slate-900">High-Converting Landing Pages</h4>
              <p className="text-slate-600 text-sm mb-6">
                Create funnels that turn visitors into booked calls and sales.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Conversion-focused layouts & flows</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Custom Funnels</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">A/B Testing</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Analytics Integration</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
              <h4 className="text-xl font-bold mb-3 text-slate-900">Google Business Profile</h4>
              <p className="text-slate-600 text-sm mb-6">
                Boost your local visibility and attract clients where they search most.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Local SEO Optimization</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Profile Setup & Review Management</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Analytics Tracking</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Local Listing Management</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-slate-500 italic text-lg">
              Your digital home — designed to earn trust and convert visitors into customers.
            </p>
          </div>
        </div>

        {/* Automate & Scale Section - Image Left */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-12">
            <div className="relative h-80 bg-gray-100 rounded-3xl flex items-center justify-center  shadow-lg shadow-indigo-100/50 order-2 md:order-1">
              <img src="./Automate.png" alt="Automate & Scale" className="max-h-full object-contain" />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-4xl font-bold mb-4 text-slate-900">Automate & Scale</h3>
              <p className="text-xl font-semibold text-indigo-600 mb-3">
                Let your systems work while you sleep.
              </p>
              <p className="text-slate-600 text-lg">
                Streamline operations, automate repetitive tasks, and scale your business with smart integrations and marketing automation.
              </p>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300">
              <h4 className="text-xl font-bold mb-3 text-slate-900">AI Setup & Automation</h4>
              <p className="text-slate-600 text-sm mb-6">
                Automate client interactions with intelligent systems for calls, chats, & scheduling.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">AI Chat & Call Systems</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Auto Booking & Lead Capture</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Workflow Integrations</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">24/7 Automated Operations</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300">
              <h4 className="text-xl font-bold mb-3 text-slate-900">Email Marketing Campaigns</h4>
              <p className="text-slate-600 text-sm mb-6">
                Nurture leads with personalized, automated email sequences that build relationships.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Campaign Design & Segmentation</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Drip Sequences & Analytics</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Lead Nurturing Automations</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Engagement Tracking</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300">
              <h4 className="text-xl font-bold mb-3 text-slate-900">Reputation & Reviews</h4>
              <p className="text-slate-600 text-sm mb-6">
                Build credibility with automated feedback and reputation management.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Review Collection & Display</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Testimonial Automation</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Feedback Monitoring Systems</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Response Management</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-slate-500 italic text-lg">
              From leads to bookings — everything runs seamlessly.
            </p>
          </div>
        </div>

        {/* Engage & Grow Section - Image Right */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-12">
            <div>
              <h3 className="text-4xl font-bold mb-4 text-slate-900">Engage & Grow</h3>
              <p className="text-xl font-semibold text-indigo-600 mb-3">
                Build an audience that stays.
              </p>
              <p className="text-slate-600 text-lg">
                Transform your audience into loyal advocates through authentic content, storytelling, and consistent visibility.
              </p>
            </div>
            <div className="relative h-80 bg-gray-100 rounded-3xl flex items-center justify-center shadow-lg shadow-violet-100/50">
              <img src="./Grow.png" alt="Engage & Grow" className="max-h-full object-contain" />
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/50 transition-all duration-300">
              <h4 className="text-xl font-bold mb-3 text-slate-900">Social Media Management</h4>
              <p className="text-slate-600 text-sm mb-6">
                Engage audiences with content that builds trust and community.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Content Creation & Strategy</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Posting Schedules & Automation</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Engagement Tracking</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Brand Community Building</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/50 transition-all duration-300">
              <h4 className="text-xl font-bold mb-3 text-slate-900">Custom Reels & Videos</h4>
              <p className="text-slate-600 text-sm mb-6">
                Show your story through professional, shareable videos that drive attention & leads.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Video Production & Reels Creation</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Content Strategy</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Social Media Integration</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Professional Editing</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/50 transition-all duration-300">
              <h4 className="text-xl font-bold mb-3 text-slate-900">Content Growth Campaigns</h4>
              <p className="text-slate-600 text-sm mb-6">
                Build consistent visibility through strategic content that attracts, educates, & converts.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Blog & Newsletter Systems</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Cross-Channel Publishing</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">SEO-Driven Content Planning</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Engagement Optimization</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-slate-500 italic text-lg">
              Turn engagement into growth through storytelling and visibility.
            </p>
          </div>
        </div>

        {/* Analytics & Insights Section - Image Left */}
        <div>
          <div className="grid md:grid-cols-2 gap-16 items-center mb-12">
            <div className="relative h-80 bg-gray-100 rounded-3xl flex items-center justify-center  shadow-lg shadow-emerald-100/50 order-2 md:order-1">
              <img src="./Analytics.png" alt="Analytics & Insights" className="max-h-full object-contain" />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-4xl font-bold mb-4 text-slate-900">Analytics & Insights</h3>
              <p className="text-xl font-semibold text-indigo-600 mb-3">
                Know what works. Improve what matters.
              </p>
              <p className="text-slate-600 text-lg">
                Make smarter decisions with real data — not guesswork. We help you understand user behavior, optimize performance, and measure success with precision.
              </p>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300">
              <h4 className="text-xl font-bold mb-3 text-slate-900">Performance Analytics</h4>
              <p className="text-slate-600 text-sm mb-6">
                Get visibility into what's driving growth and what's not.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Funnel Performance & Drop-off Tracking</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Real-time KPI Dashboards</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Conversion Metrics & Trend Visualization</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Traffic Source Analysis</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300">
              <h4 className="text-xl font-bold mb-3 text-slate-900">Optimization Experiments</h4>
              <p className="text-slate-600 text-sm mb-6">
                Continuously test, learn, and refine to boost results.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">A/B Testing & Variant Tracking</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">UX & UI Impact Measurement</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Behavior Heatmaps & Click Maps</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Data-Driven Content Improvements</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300">
              <h4 className="text-xl font-bold mb-3 text-slate-900">Business Intelligence Dashboards</h4>
              <p className="text-slate-600 text-sm mb-6">
                Centralize your data and insights across tools in one clean view.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Marketing ROI Reporting</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Attribution & Forecasting Models</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Data Pipeline Integrations</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Automated Performance Summaries</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-slate-500 italic text-lg">
              Data-backed decisions for continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;