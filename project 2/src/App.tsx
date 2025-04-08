import React from 'react';
import { Cog, Phone, Clock, MapPin, Shield, ThumbsUp, Award, Mail, Snowflake, Star, Factory, Droplet, Home, PenTool as Tool, Flame } from 'lucide-react';

function App() {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Exceptional service! The team was professional and completed the work quickly. Our AC has never run better.",
      date: "2024-02-15"
    },
    {
      name: "Michael Rodriguez",
      rating: 5,
      text: "Best HVAC service in Texas! They came out same day when our AC went down during summer. Worth every penny.",
      date: "2024-02-10"
    },
    {
      name: "David Thompson",
      rating: 5,
      text: "The maintenance plan has saved us so much money. Their technicians are always thorough and professional.",
      date: "2024-02-05"
    },
    {
      name: "Robert Chen",
      rating: 5,
      text: "Called them at 2 AM when our chiller failed at our data center. They were on-site within an hour and had us back online before dawn. Worth every penny of the after-hours fee.",
      date: "2021-08-15"
    },
    {
      name: "Maria Garcia",
      rating: 5,
      text: "American Home Shield referred Element for our AC repair. They were fantastic! Diagnosed and fixed the issue quickly, and handled all the warranty paperwork seamlessly.",
      date: "2018-06-22"
    },
    {
      name: "James Wilson",
      rating: 5,
      text: "They've maintained our office building's chillers since 2015. Their expertise with large commercial systems is unmatched. Regular maintenance has prevented any major issues.",
      date: "2016-11-30"
    },
    {
      name: "Patricia Martinez",
      rating: 5,
      text: "American Home Shield warranty work done right! Other companies gave us the runaround, but Element came in and fixed our system properly the first time.",
      date: "2013-07-08"
    },
    {
      name: "Thomas Anderson",
      rating: 5,
      text: "One of their first customers from 2011. They installed and have maintained our warehouse's 500-ton chiller system ever since. Absolute professionals who know their stuff.",
      date: "2011-09-12"
    }
  ];

  const services = [
    {
      title: 'Commercial HVAC',
      icon: <Factory className="w-8 h-8" />,
      description: 'Complete commercial & industrial HVAC solutions including chillers, cooling towers, and air handlers'
    },
    {
      title: 'Residential HVAC',
      icon: <Home className="w-8 h-8" />,
      description: 'Expert residential heating and cooling services for your home comfort needs'
    },
    {
      title: 'Sheet Metal & Ductwork',
      icon: <Tool className="w-8 h-8" />,
      description: 'Custom sheet metal fabrication and professional ductwork installation'
    },
    {
      title: 'Process Water Systems',
      icon: <Droplet className="w-8 h-8" />,
      description: 'On-demand process water systems for industrial applications'
    },
    {
      title: 'Maintenance Plans',
      icon: <Shield className="w-8 h-8" />,
      description: 'Three-tier maintenance plans to fit your needs'
    }
  ];

  const maintenancePlans = [
    {
      tier: "Tier 1",
      name: "Basic Maintenance",
      features: [
        "Full system inspection",
        "Performance optimization",
        "Preventive maintenance",
        "Priority scheduling"
      ]
    },
    {
      tier: "Tier 2",
      name: "Filter Plus",
      features: [
        "All Tier 1 benefits",
        "Regular filter replacements",
        "Enhanced air quality",
        "Extended equipment life"
      ]
    },
    {
      tier: "Tier 3",
      name: "Total C-A-R-E",
      features: [
        "Cleaning - Deep system cleaning",
        "Audit - Comprehensive system analysis",
        "Restore - Proactive repairs & updates",
        "Empower - Energy optimization"
      ]
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen">
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1531218150217-54595bc2b934?auto=format&fit=crop&q=80"
          >
          <source src="https://player.vimeo.com/progressive_redirect/playback/689032779/rendition/720p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=e0fa5b700c0f4cedb0a21d27d4ba9c74c6b7b8ac" />
        </video>
        <div className="absolute inset-0 bg-gray-900/60">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <div className="relative w-32 md:w-40 h-32 md:h-40 mb-6 md:mb-8 transform hover:scale-110 transition-transform duration-500">
              <Cog className="w-full h-full text-blue-500 animate-spin-slow absolute filter drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
              <Cog className="w-4/5 h-4/5 text-red-500 animate-spin-slow-reverse absolute top-[10%] left-[10%] filter drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-2/5 h-2/5">
                  <Flame className="absolute w-full h-full text-red-500 animate-pulse filter drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  <Snowflake className="absolute w-full h-full text-blue-400 animate-pulse filter drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 filter drop-shadow-[0_2px_8px_rgba(59,130,246,0.5)]">Element</h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-center max-w-2xl text-blue-50 px-4">
              Your Trusted HVAC Partner in Texas Since 2011
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md px-4">
              <a href="tel:22109104822" className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all duration-300">
                <Phone className="w-5 h-5" />
                <span className="whitespace-nowrap">(210) 910-4822</span>
              </a>
              <button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-full shadow-lg shadow-blue-600/30 transition-all duration-300">
                <a href="https://customer.dispatch.me/booking?account_id=37&org_id=390881" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-full shadow-lg shadow-blue-600/30 transition-all duration-300">
                  Schedule Service 
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 md:py-20 relative bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg border border-blue-900/30 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover:from-blue-900/30 group-hover:to-purple-900/30 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-blue-50 text-center">{service.title}</h3>
                  <p className="text-gray-300 text-center">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Maintenance Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {maintenancePlans.map((plan, index) => (
              <div key={index} className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg border border-blue-900/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-blue-400">{plan.tier}</h3>
                <h4 className="text-lg font-semibold mb-4 text-blue-50">{plan.name}</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-blue-400 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-gray-300">
            <p>After hours service available ($325 fee applies)</p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Client Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-blue-900/30 shadow-xl shadow-blue-900/10 hover:shadow-blue-900/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">{review.text}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-blue-400 font-semibold">{review.name}</span>
                  <span className="text-gray-500">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="flex items-center gap-4">
              <Award className="w-10 h-10 md:w-12 md:h-12 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1 text-blue-100">Licensed & Insured</h3>
                <p className="text-gray-400">TACLA27304C</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-10 h-10 md:w-12 md:h-12 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1 text-blue-100">24/7 Emergency Service</h3>
                <p className="text-gray-400">$325 After Hours Fee</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-10 h-10 md:w-12 md:h-12 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1 text-blue-100">Service Area</h3>
                <p className="text-gray-400">Serving All of Texas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Contact Us</h2>
            <div className="space-y-4">
              <p className="text-lg md:text-xl">
                <a href="tel:22109104822" className="text-red-500 hover:text-red-400 flex items-center justify-center gap-2 transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                  (210) 910-4822
                </a>
              </p>
              <p className="text-lg md:text-xl">
                <a href="mailto:element.hvactx@gmail.com" className="text-red-500 hover:text-red-400 flex items-center justify-center gap-2 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                  element.hvactx@gmail.com
                </a>
              </p>
              <p className="text-gray-300">
                6213 Grissom Rd. Suite 606<br />
                Leon Valley, TX 78238
              </p>
              <p className="text-gray-300">
                License #TACLA27304C
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      <div className="fixed bottom-4 right-4 z-50">
        <button className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white p-4 rounded-full shadow-lg shadow-red-900/30 transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-6 md:py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-100">© {new Date().getFullYear()} Element. All rights reserved.</p>
          <p className="text-gray-500 mt-2">Serving Texas since 2011</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
