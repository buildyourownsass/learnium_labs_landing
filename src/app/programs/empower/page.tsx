import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import ProgramHero from '../../../components/ProgramHero';
import IdealForSection from '../../../components/IdealForSection';
import CallToActionSection from '../../../components/CallToActionSection';

export default function EmpowerPage() {
  const heroData = {
    title: "Empower Program",
    subtitle: "For Entrepreneurs & Business Leaders",
    tagline: "Lead Innovation. Empower Growth.",
    description: "The Empower program is designed for visionary entrepreneurs and business leaders who want to drive innovation and create sustainable impact. It focuses on advanced business strategy, leadership excellence, and cutting-edge technologies that shape the future of business.",
    iconSvg: (
      <svg className="w-12 h-12 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    backgroundImage: "/images/empower-hero.svg",
    primaryColor: "bg-purple-100",
    decorativeColors: {
      primary: "bg-purple-100",
      secondary: "bg-pink-100",
      tertiary: "bg-indigo-100"
    }
  };

  const idealForData = [
    {
      title: "Startup Founders",
      description: "Early-stage entrepreneurs building innovative startups and seeking strategic guidance"
    },
    {
      title: "Business Leaders",
      description: "Senior executives and managers driving organizational growth and transformation"
    },
    {
      title: "Innovation Champions",
      description: "Leaders focused on innovation, digital transformation, and disruptive technologies"
    }
  ];

  return (
    <>
      <Navigation />
      
      <ProgramHero {...heroData} />

      {/* Program Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Program Overview</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
              Through executive workshops, innovation masterclasses, strategic mentorship, and exclusive networking, leaders develop the visionary thinking and practical skills needed to drive sustainable growth and market leadership.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-purple-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Strategic Leadership</h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    "Visionary leadership and strategic planning",
                    "Innovation management and disruption", 
                    "Digital transformation and technology adoption",
                    "Sustainable business model development",
                    "Global market expansion strategies"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-purple-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-pink-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-pink-900 mb-4">Business Excellence</h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    "Executive-level workshops and masterclasses",
                    "Access to industry thought leaders and mentors",
                    "Exclusive networking with top entrepreneurs", 
                    "Investment readiness and funding strategies",
                    "International business development opportunities"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-pink-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Program Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visionary Leadership</h3>
              <p className="text-gray-600 leading-relaxed">Develop strategic thinking and visionary leadership for transformational growth</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation Mastery</h3>
              <p className="text-gray-600 leading-relaxed">Master innovation strategies and disruptive technologies for competitive advantage</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Elite Networking</h3>
              <p className="text-gray-600 leading-relaxed">Connect with top entrepreneurs, investors, and industry thought leaders</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Executive Mentorship</h3>
              <p className="text-gray-600 leading-relaxed">One-on-one guidance from successful entrepreneurs and business leaders</p>
            </div>
          </div>
        </div>
      </section>

      <IdealForSection 
        items={idealForData}
        bgColor="bg-purple-50"
        textColor="text-purple-900"
        columns={3}
      />

      <CallToActionSection
        title="Ready to Empower Your Vision?"
        description="Join the Empower program and develop the strategic leadership and innovation capabilities to drive transformational business growth."
        primaryButtonText="Enroll Now"
        secondaryButtonText="Learn More"
        backgroundColor="bg-purple-600"
      />

      <Footer />
    </>
  );
}