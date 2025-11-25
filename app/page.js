import React, { useState, useEffect } from 'react';

export default function OnyxLanding() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate submission
      setSubmitted(true);
      setTimeout(() => {
        setShowWaitlistModal(false);
        setSubmitted(false);
        setEmail('');
      }, 2000);
    }
  };

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const features = [
    {
      icon: "📅",
      title: "Smart Scheduling",
      description: "AI-powered routing optimization saves hours of planning. Auto-fill your calendar with the perfect route."
    },
    {
      icon: "💳",
      title: "Instant Payments",
      description: "Card-on-file processing means you get paid immediately. No more chasing invoices or dealing with cash."
    },
    {
      icon: "📱",
      title: "SMS Automation",
      description: "Automatic reminders, confirmations, and follow-ups keep customers engaged without lifting a finger."
    },
    {
      icon: "📊",
      title: "Revenue Analytics",
      description: "Track your growth with real-time dashboards. Know exactly what's working and what needs attention."
    },
    {
      icon: "🔄",
      title: "Recurring Services",
      description: "Set it and forget it. Automatically schedule repeat customers and watch your MRR grow."
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Built for mobile-first professionals. Access everything you need in seconds, even on the go."
    }
  ];

  return (
    <div className="relative bg-[#0a0a0a] overflow-x-hidden">
      {/* Magma Breathing Background - Fixed */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0e0e] via-[#0a0a0a] to-[#0f0a08]" />
        <div className="magma-orb magma-orb-1" />
        <div className="magma-orb magma-orb-2" />
        <div className="magma-orb magma-orb-3" />
        <div className="absolute inset-0 opacity-20" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
               backgroundRepeat: 'repeat',
               backgroundSize: '200px 200px'
             }} 
        />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between backdrop-blur-sm">
          <div className="text-2xl font-bold tracking-tight text-white">
            ONYX
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#features" 
              onClick={(e) => smoothScroll(e, 'features')}
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium cursor-pointer"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => smoothScroll(e, 'pricing')}
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium cursor-pointer"
            >
              Pricing
            </a>
            <a 
              href="#stories" 
              onClick={(e) => smoothScroll(e, 'stories')}
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium cursor-pointer"
            >
              Stories
            </a>
            <button 
              onClick={() => setShowLoginModal(true)}
              className="px-5 py-2 rounded-lg border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white transition-all text-sm font-medium"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full viewport height, centered */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center pt-20">
          <h1 className={`text-6xl sm:text-7xl lg:text-8xl font-black mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="block text-white leading-[0.9] mb-4 tracking-tight">
              Command Your
            </span>
            <span className="block bg-gradient-to-r from-orange-500 via-red-600 to-orange-500 bg-clip-text text-transparent leading-[0.9] tracking-tight glow-text">
              Business Empire.
            </span>
          </h1>

          <p className={`text-gray-400 text-xl sm:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            The all-in-one operating system designed for mobile service professionals.
          </p>
          
          <p className={`text-gray-500 text-base sm:text-lg mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Automate scheduling, payments, and customer retention while you sleep.
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button 
              onClick={() => setShowWaitlistModal(true)}
              className="group relative px-8 py-4 bg-white text-black font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Free Trial
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity" />
            </button>
            
            <button 
              onClick={() => setShowDemoModal(true)}
              className="px-8 py-4 bg-transparent border-2 border-gray-700 text-white font-semibold rounded-xl hover:border-gray-500 hover:bg-white/5 transition-all duration-300"
            >
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl backdrop-blur-sm bg-gradient-to-br from-gray-900/50 to-gray-950/50">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-900/80 border-b border-gray-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 mx-4">
                <div className="h-6 bg-gray-800/50 rounded-md px-3 flex items-center">
                  <div className="w-3 h-3 text-gray-600">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-xs text-gray-500">app.onyx.com/dashboard</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 sm:p-8 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { label: 'Today', value: '12' },
                  { label: 'This Week', value: '47' },
                  { label: 'Revenue', value: '$3.2k' },
                  { label: 'Pending', value: '5' }
                ].map((stat, i) => (
                  <div key={i} className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-lg p-3 sm:p-4 border border-gray-800/50">
                    <div className="text-gray-500 text-xs mb-1">{stat.label}</div>
                    <div className="text-white text-xl sm:text-2xl font-bold">{stat.value}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-gray-800/30 to-transparent rounded-lg p-3 sm:p-4 border border-gray-800/30">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="h-3 bg-gray-700/50 rounded w-2/3 mb-2" />
                      <div className="h-2 bg-gray-800/50 rounded w-1/2" />
                    </div>
                    <div className="hidden sm:flex gap-2 flex-shrink-0">
                      <div className="w-20 h-8 bg-gray-800/50 rounded" />
                      <div className="w-20 h-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded border border-orange-500/30" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -inset-x-20 -bottom-20 h-40 bg-gradient-to-t from-orange-600/10 via-red-600/5 to-transparent blur-3xl -z-10" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Everything You Need.
              <span className="block text-gray-500 mt-2">Nothing You Don't.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Built specifically for mobile service professionals who need power without complexity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="group relative bg-gradient-to-br from-gray-900/50 to-gray-950/30 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-red-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Simple Pricing.
            </h2>
            <p className="text-gray-400 text-lg">
              One plan. All features. No hidden fees.
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-gray-900/70 to-gray-950/50 border border-gray-800 rounded-3xl p-8 sm:p-12">
            <div className="absolute top-0 right-8 -translate-y-1/2">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                LAUNCHING SOON
              </div>
            </div>
            
            <div className="text-center mb-8">
              <div className="text-gray-400 text-sm uppercase tracking-wider mb-2">Professional</div>
              <div className="text-6xl font-black text-white mb-2">
                $50<span className="text-2xl text-gray-500">/mo</span>
              </div>
              <p className="text-gray-400">Everything you need to scale your service business</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                'Unlimited bookings & customers',
                'Automated SMS reminders',
                'Payment processing (2.9% + 30¢)',
                'Route optimization',
                'Revenue analytics',
                'Mobile app access',
                'Priority support'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>

            <button 
              onClick={() => setShowWaitlistModal(true)}
              className="w-full py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section id="stories" className="relative z-10 py-24 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Built by Service Pros.
              <span className="block text-gray-500 mt-2">For Service Pros.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real stories from mobile service professionals who took control of their business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Marcus T.",
                business: "Mobile Detailing",
                quote: "I went from scrambling through text messages to having a system that runs itself. 3x revenue in 6 months.",
                stat: "3x Revenue"
              },
              {
                name: "Sarah L.",
                business: "Pool Cleaning",
                quote: "The route optimization alone saves me 2 hours every day. That's 10 extra appointments per week.",
                stat: "10+ Extra Jobs/Week"
              },
              {
                name: "James K.",
                business: "Window Washing",
                quote: "Automated reminders cut my no-shows from 20% to under 3%. Game changer for my bottom line.",
                stat: "85% Less No-Shows"
              }
            ].map((story, i) => (
              <div key={i} className="relative bg-gradient-to-br from-gray-900/70 to-gray-950/50 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all">
                <div className="text-orange-500 text-5xl mb-4">"</div>
                <p className="text-gray-300 mb-6 leading-relaxed">{story.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30" />
                  <div>
                    <div className="text-white font-bold">{story.name}</div>
                    <div className="text-gray-500 text-sm">{story.business}</div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="text-2xl font-bold text-white">{story.stat}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">
            Ready to build your empire?
          </h2>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
            Join the waitlist and be first to access ONYX when we launch.
          </p>
          <button 
            onClick={() => setShowWaitlistModal(true)}
            className="group relative px-12 py-5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl text-lg"
          >
            Get Early Access
            <svg className="inline-block w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-900 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold text-white">ONYX</div>
            <div className="flex gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="text-center mt-6 text-gray-600 text-sm">
            © 2024 ONYX. Built for service professionals who command their future.
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      {showWaitlistModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowWaitlistModal(false)}>
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setShowWaitlistModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!submitted ? (
              <>
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-3xl font-black text-white mb-2">Join the Waitlist</h3>
                <p className="text-gray-400 mb-6">Be first to access ONYX when we launch. Limited spots available for early adopters.</p>
                
                <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    Join Waitlist
                  </button>
                </form>

                <p className="text-gray-500 text-sm mt-4 text-center">
                  No spam. Just updates on launch date and early access perks.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
                <p className="text-gray-400">We'll email you when ONYX launches.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowLoginModal(false)}>
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-3xl font-black text-white mb-2">Coming Soon</h3>
            <p className="text-gray-400 mb-6">ONYX is currently in development. Join our waitlist to be notified when we launch!</p>
            
            <button 
              onClick={() => {
                setShowLoginModal(false);
                setShowWaitlistModal(true);
              }}
              className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Join Waitlist Instead
            </button>
          </div>
        </div>
      )}

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowDemoModal(false)}>
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-8 max-w-2xl w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setShowDemoModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-4xl mb-4">🎥</div>
            <h3 className="text-3xl font-black text-white mb-2">Product Demo</h3>
            <p className="text-gray-400 mb-6">See how ONYX helps mobile service professionals automate their entire operation.</p>
            
            <div className="aspect-video bg-gray-800 rounded-xl mb-6 flex items-center justify-center border border-gray-700">
              <div className="text-center">
                <div className="text-6xl mb-4">▶️</div>
                <p className="text-gray-500">Demo video coming soon</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-300">See live route optimization in action</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-300">Watch automated SMS reminders go out</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-300">Experience instant payment processing</p>
              </div>
            </div>

            <button 
              onClick={() => {
                setShowDemoModal(false);
                setShowWaitlistModal(true);
              }}
              className="w-full mt-6 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Get Early Access
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;900&display=swap');

        * {
          font-family: 'Outfit', sans-serif;
        }
        
        html {
          scroll-behavior: smooth;
        }

        /* Magma breathing animation */
        .magma-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.4;
          animation: breathe 8s ease-in-out infinite;
        }

        .magma-orb-1 {
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(234, 88, 12, 0.6) 0%, rgba(220, 38, 38, 0.3) 50%, transparent 70%);
          top: 10%;
          left: 50%;
          transform: translateX(-50%);
          animation-delay: 0s;
        }

        .magma-orb-2 {
          width: 900px;
          height: 900px;
          background: radial-gradient(circle, rgba(220, 38, 38, 0.5) 0%, rgba(239, 68, 68, 0.2) 50%, transparent 70%);
          top: 50%;
          left: -10%;
          animation-delay: 2.5s;
        }

        .magma-orb-3 {
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.5) 0%, rgba(234, 88, 12, 0.2) 50%, transparent 70%);
          top: 40%;
          right: -5%;
          animation-delay: 5s;
        }

        @keyframes breathe {
          0%, 100% {
            transform: scale(1) translateX(-50%);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.25) translateX(-50%);
            opacity: 0.6;
          }
        }

        .magma-orb-2 {
          animation-name: breathe-left;
        }

        .magma-orb-3 {
          animation-name: breathe-right;
        }

        @keyframes breathe-left {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.5;
          }
        }

        @keyframes breathe-right {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.22);
            opacity: 0.55;
          }
        }

        /* Glow effect for text */
        .glow-text {
          animation: glow-pulse 4s ease-in-out infinite;
          filter: drop-shadow(0 0 20px rgba(234, 88, 12, 0.4));
        }

        @keyframes glow-pulse {
          0%, 100% {
            filter: drop-shadow(0 0 20px rgba(234, 88, 12, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 40px rgba(220, 38, 38, 0.6));
          }
        }

        /* Radial gradient utility */
        .bg-gradient-radial {
          background-image: radial-gradient(var(--tw-gradient-stops));
        }

        /* Modal animations */
        @keyframes modalFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fixed[class*="z-[100]"] {
          animation: modalFadeIn 0.2s ease-out;
        }

        .fixed[class*="z-[100]"] > div {
          animation: modalSlideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}