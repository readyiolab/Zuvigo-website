import { ArrowRight, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Lead form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50 to-sky-50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-blue-50/50 to-sky-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
              <span className="text-sm font-bold text-black">Ready to start?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Ready to Build
              <br />
              <span className="text-indigo-600">What's Next?</span>
            </h2>

            <p className="text-lg text-slate-700 mb-10">
              Let's discuss how we can help transform your ideas into a powerful digital presence 
              that drives real results.
            </p>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-slate-300">
              <p className="text-sm text-slate-600 mb-4">Trusted by founders worldwide</p>
              <div className="flex items-center gap-4 flex-wrap">
                {['Startups', 'Agencies', 'E-Commerce', 'SaaS', 'Creators'].map((type) => (
                  <span key={type} className="text-slate-500 text-sm">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 rounded-2xl p-8 border border-slate-200 shadow-lg">
            <h3 className="text-2xl font-bold mb-2 text-slate-900">Get in Touch</h3>
            <p className="text-slate-700 mb-8">Fill out the form below and we'll get back to you shortly.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-800 flex items-center gap-2">
                  <User className="w-4 h-4 text-black" />
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 "
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-800 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-black" />
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white border-slate-300  "
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-800 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-black" />
                  Tell us about your project
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Describe your project, goals, or any specific requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-500  min-h-32 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-indigo-600 hover:bg-slate-900 hover:text-white transition-all duration-300"
              >
                Send Message
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>

              <p className="text-xs text-slate-600 font-bold text-center">
                We respect your privacy. Your information is secure.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
