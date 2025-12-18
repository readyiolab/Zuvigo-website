import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Calendar, Mail, User } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi there! 👋 I'm Zuvigo's AI assistant. How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const messagesEndRef = useRef(null);

  const OPENROUTER_API_KEY = "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"; // Replace with your OpenRouter API key

  const faqData = {
    "brand": "Zuvigo",
    "category": "Digital Agency for Founders",
    "faqs": [
    {
      "id": 1,
      "category": "General",
      "question": "What does Zuvigo do?",
      "answer": "Zuvigo is a digital agency that helps founders and entrepreneurs build scalable digital systems. We design high-converting websites, automate operations, drive growth through content, and provide analytics for data-driven decisions."
    },
    {
      "id": 2,
      "category": "General",
      "question": "Who is Zuvigo best suited for?",
      "answer": "Zuvigo works with startup founders, SaaS companies, service businesses, agencies, e-commerce brands, and creators who want to build, automate, and scale their digital presence."
    },
    {
      "id": 3,
      "category": "General",
      "question": "Do you only build websites?",
      "answer": "No. Websites are only one part of the system. Zuvigo builds complete digital ecosystems including automation, AI tools, marketing workflows, analytics dashboards, and growth systems."
    },
    {
      "id": 4,
      "category": "Process",
      "question": "What is your working process?",
      "answer": "Our process has four stages: Strategy & Product, Website & Platform, Growth & Optimization, and Ongoing Support. Each stage ensures alignment with business goals and scalable execution."
    },
    {
      "id": 5,
      "category": "Process",
      "question": "How do you start a new project?",
      "answer": "We begin with a discovery and strategy session to understand your goals, audience, and challenges. From there, we create a roadmap and execution plan."
    },
    {
      "id": 6,
      "category": "Strategy",
      "question": "What is included in Strategy & Product planning?",
      "answer": "This includes market research, user personas, competitor analysis, feature planning, and a clear product or website roadmap aligned with business objectives."
    },
    {
      "id": 7,
      "category": "Website & Platform",
      "question": "What kind of websites do you build?",
      "answer": "We build custom, mobile-first, high-performance websites including business websites, SaaS platforms, landing pages, dashboards, and CMS-based systems."
    },
    {
      "id": 8,
      "category": "Website & Platform",
      "question": "Are your websites SEO-friendly?",
      "answer": "Yes. All Zuvigo websites are built with SEO best practices including fast loading, clean structure, mobile optimization, and analytics integration."
    },
    {
      "id": 9,
      "category": "Build & Presence",
      "question": "What is Build & Presence?",
      "answer": "Build & Presence focuses on creating a strong digital foundation through websites, landing pages, CMS systems, and local visibility tools that convert visitors into customers."
    },
    {
      "id": 10,
      "category": "Build & Presence",
      "question": "Do you build landing pages for lead generation?",
      "answer": "Yes. We design high-converting landing pages with optimized layouts, funnels, A/B testing, and analytics tracking."
    },
    {
      "id": 11,
      "category": "Local SEO",
      "question": "Do you manage Google Business Profiles?",
      "answer": "Yes. We handle profile setup, optimization, review management, analytics tracking, and local listing management to improve local visibility."
    },
    {
      "id": 12,
      "category": "Automate & Scale",
      "question": "What does Automate & Scale mean?",
      "answer": "Automate & Scale focuses on streamlining operations using AI, automation tools, and integrations so your business can run efficiently 24/7."
    },
    {
      "id": 13,
      "category": "Automation",
      "question": "What kind of automation do you offer?",
      "answer": "We build AI chat and call systems, auto-booking workflows, lead capture systems, CRM integrations, email automation, and internal workflow automations."
    },
    {
      "id": 14,
      "category": "Automation",
      "question": "Can you integrate AI into my business?",
      "answer": "Yes. We set up AI-powered chatbots, call agents, booking systems, and intelligent workflows tailored to your business needs."
    },
    {
      "id": 15,
      "category": "Email Marketing",
      "question": "Do you handle email marketing automation?",
      "answer": "Yes. We design email campaigns, drip sequences, segmentation strategies, and analytics to nurture leads and improve conversions."
    },
    {
      "id": 16,
      "category": "Engage & Grow",
      "question": "What is Engage & Grow?",
      "answer": "Engage & Grow focuses on building loyal audiences through content, social media management, storytelling, and consistent brand visibility."
    },
    {
      "id": 17,
      "category": "Social Media",
      "question": "Do you manage social media accounts?",
      "answer": "Yes. We handle content strategy, post scheduling, engagement tracking, community building, and growth optimization."
    },
    {
      "id": 18,
      "category": "Video & Reels",
      "question": "Do you create videos and reels?",
      "answer": "Yes. We produce professional videos and reels including content strategy, editing, platform optimization, and social media integration."
    },
    {
      "id": 19,
      "category": "Analytics & Insights",
      "question": "What is Analytics & Insights?",
      "answer": "Analytics & Insights helps businesses understand performance through dashboards, KPIs, funnel tracking, user behavior analysis, and optimization experiments."
    },
    {
      "id": 20,
      "category": "Analytics",
      "question": "What analytics tools do you use?",
      "answer": "We use tools like Google Analytics, dashboards, heatmaps, A/B testing platforms, CRM analytics, and custom reporting systems."
    },
    {
      "id": 21,
      "category": "Analytics",
      "question": "Do you provide real-time dashboards?",
      "answer": "Yes. We build custom dashboards showing KPIs, conversions, traffic, revenue insights, and performance summaries."
    },
    {
      "id": 22,
      "category": "Portfolio",
      "question": "Can I see your past work?",
      "answer": "Yes. Our portfolio includes projects like Arbilo, SinghKarman, and iGrowBig, covering product strategy, platforms, automation, branding, and growth systems."
    },
    {
      "id": 23,
      "category": "Pricing",
      "question": "How do you price your services?",
      "answer": "Pricing depends on project scope, complexity, and timelines. We offer custom quotes after understanding your business requirements."
    },
    {
      "id": 24,
      "category": "Timeline",
      "question": "How long does a project take?",
      "answer": "Timelines vary by project. A website may take 2–4 weeks, while full systems with automation and analytics can take 4–8 weeks or more."
    },
    {
      "id": 25,
      "category": "Support",
      "question": "Do you offer ongoing support?",
      "answer": "Yes. We provide 24/7 support, maintenance, regular updates, and continuous optimization based on performance data."
    },
    {
      "id": 26,
      "category": "Collaboration",
      "question": "Do you work with remote clients?",
      "answer": "Yes. Zuvigo is a remote-first agency working with founders and businesses worldwide."
    },
    {
      "id": 27,
      "category": "Getting Started",
      "question": "How can I start working with Zuvigo?",
      "answer": "You can schedule a call or send us a message. We’ll discuss your goals and recommend the best strategy to build what’s next."
    }
  ]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    "What services do you offer?",
    "Show me pricing",
    "Book a meeting",
    "Tell me about automation"
  ];

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      type: 'user',
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    const userInput = input;
    setInput('');
    setIsTyping(true);

    try {
      // Check if user wants to book a meeting
      if (userInput.toLowerCase().includes('book') || 
          userInput.toLowerCase().includes('meeting') || 
          userInput.toLowerCase().includes('schedule') ||
          userInput.toLowerCase().includes('call')) {
        setIsTyping(false);
        setShowBookingForm(true);
        setMessages(prev => [...prev, {
          type: 'bot',
          text: "Great! I'd love to help you schedule a meeting. Please fill out the form below and our team will reach out to you within 24 hours! 📅",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        return;
      }

      // Create context from FAQ data
      const context = faqData.faqs.map(faq => 
        `Q: ${faq.question}\nA: ${faq.answer}`
      ).join('\n\n');

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.href,
          "X-Title": "Zuvigo AI Chatbot"
        },
        body: JSON.stringify({
          model: "nvidia/nemotron-nano-12b-v2-vl:free",
          messages: [
            { 
              role: "system", 
              content: `You are Zuvigo's helpful AI assistant. Use the following FAQ information to answer questions about Zuvigo's services:

${context}

Provide helpful, friendly, and concise responses. If asked about booking a meeting or scheduling a call, let them know they can book a meeting. Keep responses engaging and professional.` 
            },
            {
              role: "user",
              content: userInput
            }
          ],
          stream: true
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let botResponse = "";
      
      // Create a placeholder message that we'll update
      const botMessageIndex = messages.length + 1;
      setMessages(prev => [...prev, {
        type: 'bot',
        text: "",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n').filter(line => line.trim() !== '');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') continue;

            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices?.[0]?.delta?.content;
              
              if (content) {
                botResponse += content;
                // Update the message in real-time
                setMessages(prev => {
                  const updated = [...prev];
                  updated[botMessageIndex] = {
                    type: 'bot',
                    text: botResponse,
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  };
                  return updated;
                });
              }
            } catch (e) {
              console.error('Parse error:', e);
            }
          }
        }
      }

      setIsTyping(false);

    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        type: 'bot',
        text: "I apologize, but I'm having trouble connecting right now. Please try again or contact us directly at hello@zuvigo.com",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setIsTyping(false);
    }
  };

  const handleQuickReply = (reply) => {
    setInput(reply);
    setTimeout(() => handleSend(), 100);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    setMessages(prev => [...prev, {
      type: 'bot',
      text: `Thank you, ${formData.name}! 🎉\n\nWe've received your booking request at ${formData.email}. Our team will reach out to you within 24 hours to schedule your consultation.\n\nIs there anything else I can help you with?`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);

    setShowBookingForm(false);
    setFormData({ name: '', email: '' });
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 group transition-all duration-300 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full animate-ping opacity-20"></div>
          
          <div className="relative w-16 h-16 bg-indigo-600 rounded-full shadow-lg flex items-center justify-center hover:shadow-2xl hover:scale-110 transition-all duration-300">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>

          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce">
            1
          </div>
        </div>

        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl">
            Chat with us! 💬
            <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[380px] h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h3 className="text-white font-semibold">Zuvigo AI Assistant</h3>
              <p className="text-white/80 text-xs">Online • AI-Powered</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-[420px] overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                  msg.type === 'user'
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-br-none'
                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                }`}
              >
                <p className="text-sm whitespace-pre-line">{msg.text}</p>
                <p className={`text-xs mt-1 ${msg.type === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start animate-in slide-in-from-bottom-2 duration-300">
              <div className="bg-gray-100 rounded-2xl rounded-bl-none px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}

          {/* Booking Form */}
          {showBookingForm && (
            <div className="animate-in slide-in-from-bottom-2 duration-300">
              <div className="bg-white border-2 border-indigo-200 rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-5 h-5 text-indigo-600" />
                  <h4 className="font-semibold text-gray-800">Book a Meeting</h4>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Your Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Email Address</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleFormSubmit}
                    disabled={!formData.name.trim() || !formData.email.trim()}
                    className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-2 rounded-lg font-medium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    Submit Request
                  </button>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {messages.length === 1 && (
          <div className="px-4 py-2 border-t border-gray-200 bg-gray-50">
            <p className="text-xs text-gray-600 mb-2">Quick replies:</p>
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs px-3 py-1.5 bg-white border border-gray-200 hover:bg-gray-100 rounded-full transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-3 rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;