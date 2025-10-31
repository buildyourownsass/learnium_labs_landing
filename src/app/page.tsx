import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen gradient-bg flex items-center pt-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-main.svg"
            alt="Learning and development illustration"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-100 rounded-full opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-orange-100 rounded-full opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="container-max section-padding relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Learners.<br />
              <span className="text-blue-600">Enabling Industries.</span><br />
              Enhancing Futures.
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              At Learnium Labs, we are redefining skill development by delivering industry-aligned, experiential learning programs that prepare individuals and organizations to thrive in the modern world.
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
              Whether you are a student exploring your potential, a graduate entering the workforce, or an organization nurturing talent — we bridge the gap between learning and employability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#programs" className="btn-primary text-lg px-8 py-4">
                Explore Programs
              </Link>
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Partner with Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Where Education Meets Industry
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Learnium Labs is a forward-thinking Skill Development and Learning Solutions Centre built to close the growing skill gap between academia and the workplace.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  We collaborate with industry experts, academic institutions, and corporate partners to design customized, hands-on learning programs that focus on the skills that matter most — practical application, innovation, and adaptability.
                </p>
              </div>
              <div className="bg-indigo-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-indigo-900 mb-4">Our Philosophy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Learning should not stop at understanding — it should transform into impact. We are not just another training provider; we are your learning partner for growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section id="programs" className="section-padding gradient-bg">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Offerings
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our programs are strategically designed to serve different learner segments — from schools to corporates — ensuring every individual gets a personalized, purpose-driven learning experience.
            </p>
          </div>
          
          {/* Cards Grid with Equal Heights */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Ignite Program */}
            <div className="bg-white rounded-2xl shadow-xl p-8 card-hover flex flex-col h-full border border-gray-100">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <svg className="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ignite</h3>
                <div className="inline-block bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                  For School Students
                </div>
              </div>
              
              <div className="flex-grow">
                <p className="text-orange-600 font-semibold text-lg mb-3 text-center">
                  Inspire Curiosity. Ignite Innovation.
                </p>
                <p className="text-gray-700 leading-relaxed text-center">
                  Introducing school students to the world beyond textbooks through interactive workshops and STEM-based learning.
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link 
                  href="/programs/ignite" 
                  className="block w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Elevate Program */}
            <div className="bg-white rounded-2xl shadow-xl p-8 card-hover flex flex-col h-full border border-gray-100">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 14l3-3 3 3 6-6M16 6v4M20 6v4"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Elevate</h3>
                <div className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  For Graduates & Early Career
                </div>
              </div>
              
              <div className="flex-grow">
                <p className="text-green-600 font-semibold text-lg mb-3 text-center">
                  From Classroom to Career.
                </p>
                <p className="text-gray-700 leading-relaxed text-center">
                  Bridging the gap between academic learning and employability with industry-relevant technical training.
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link 
                  href="/programs/elevate" 
                  className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Advance Program */}
            <div className="bg-white rounded-2xl shadow-xl p-8 card-hover flex flex-col h-full border border-gray-100">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Advance</h3>
                <div className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  For Working Professionals
                </div>
              </div>
              
              <div className="flex-grow">
                <p className="text-blue-600 font-semibold text-lg mb-3 text-center">
                  Stay Relevant. Stay Ahead.
                </p>
                <p className="text-gray-700 leading-relaxed text-center">
                  Flexible, high-impact upskilling programs for professionals seeking growth or reinvention.
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link 
                  href="/programs/advance" 
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Empower Program */}
            <div className="bg-white rounded-2xl shadow-xl p-8 card-hover flex flex-col h-full border border-gray-100">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5S12 9.67 12 10.5V18h2v-4h3v4h2V8.5c0-1.38-1.12-2.5-2.5-2.5H17c-.28 0-.5.22-.5.5V7h-1V5.5c0-.83-.67-1.5-1.5-1.5S13 4.67 13 5.5V7h-1v-.5c0-.28-.22-.5-.5-.5H6.5C5.12 6 4 7.12 4 8.5V18z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Empower</h3>
                <div className="inline-block bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                  Corporate L&D Solutions
                </div>
              </div>
              
              <div className="flex-grow">
                <p className="text-purple-600 font-semibold text-lg mb-3 text-center">
                  Transforming Teams into Strategic Assets.
                </p>
                <p className="text-gray-700 leading-relaxed text-center">
                  Corporate learning and development solutions for organizations aiming to stay ahead.
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link 
                  href="/programs/empower" 
                  className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
          
          {/* Additional Info Section */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Our Programs Work</h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Industry-Aligned</h4>
                  <p className="text-gray-600 text-sm">Curriculum designed with industry experts</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Hands-On Learning</h4>
                  <p className="text-gray-600 text-sm">Real projects and practical experience</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Proven Results</h4>
                  <p className="text-gray-600 text-sm">Measurable outcomes and career success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Learnium Labs
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tailor-Made Programs</h3>
              <p className="text-gray-700">Designed to match learner and industry needs with customized learning paths.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry-Aligned Curriculum</h3>
              <p className="text-gray-700">Created in collaboration with domain experts and industry professionals.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hands-On Learning</h3>
              <p className="text-gray-700">Real-world projects, simulations, and practical exposure for effective skill building.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Delivery Models</h3>
              <p className="text-gray-700">Online, on-site, or blended formats to suit different learning preferences.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Impact</h3>
              <p className="text-gray-700">Measurable results for individuals and organizations with demonstrated success.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dedicated Support</h3>
              <p className="text-gray-700">Comprehensive mentorship and support throughout the learning journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Solutions */}
      <section className="section-padding bg-linear-to-br from-gray-50 to-blue-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Partner Solutions
            </h2>
            <p className="text-2xl text-blue-600 font-semibold mb-4">
              Extend Your Learning Capability
            </p>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Your Training Partner. Powered by Learnium Labs.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
                We collaborate with organizations, institutions, and digital learning platforms to act as their dedicated training team — integrating seamlessly with existing tools and systems to deliver effective, scalable learning.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
                Our partnership model allows you to focus on core business while we handle everything from curriculum design to delivery and performance tracking.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Solutions Include:</h3>
                  <ul className="space-y-4">
                    {[
                      "White-labeled training modules for internal learning platforms",
                      "Curriculum co-development and content licensing",
                      "Trainer-on-demand and faculty partnerships",
                      "Learning analytics and reporting dashboards"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Ideal For:</h3>
                  <div className="grid gap-4">
                    {[
                      { title: "EdTech Platforms", desc: "Enhance your platform with expert-designed training content" },
                      { title: "Universities", desc: "Supplement academic curriculum with industry-focused modules" },
                      { title: "Professional Training Firms", desc: "Expand your capabilities with specialized expertise" },
                      { title: "Corporates without In-house L&D", desc: "Access complete learning solutions without building internal teams" }
                    ].map((item, index) => (
                      <div key={index} className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">{item.title}</h4>
                        <p className="text-gray-700 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Explore Partnership Opportunities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-blue-600">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Shape the Future Together
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            At Learnium Labs, we believe that the future belongs to those who learn, unlearn, and relearn. Join us in creating a generation of skilled, confident, and industry-ready professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              Enroll Now
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              Partner With Us
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}