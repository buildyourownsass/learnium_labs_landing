import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import ProgramHero from '../../../components/ProgramHero';
import CallToActionSection from '../../../components/CallToActionSection';

export default function ElevatePage() {
  const heroData = {
    title: "Elevate Program",
    subtitle: "For Graduates & Early Career Aspirants",
    tagline: "From Classroom to Career.",
    description: "The Elevate program bridges the gap between academic learning and employability. It equips graduates with the technical and professional competencies that modern employers demand — ensuring they transition confidently into the workforce.",
    iconSvg: (
      <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 14l3-3 3 3 6-6M16 6v4M20 6v4"/>
      </svg>
    ),
    backgroundImage: "/images/elevate-hero.svg",
    primaryColor: "bg-green-100",
    decorativeColors: {
      primary: "bg-green-100",
      secondary: "bg-emerald-100",
      tertiary: "bg-teal-100"
    }
  };

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
              Through comprehensive training modules, industry exposure, mentorship programs, and practical applications, participants develop both technical expertise and professional acumen.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-green-900 mb-4">Professional Development</h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    "Industry-relevant technical skills",
                    "Professional communication and presentation", 
                    "Interview preparation and networking",
                    "Resume building and portfolio development",
                    "Project management and teamwork"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Career Readiness</h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    "Hands-on industry projects",
                    "Mentorship from experienced professionals",
                    "Real-world case studies and simulations", 
                    "Industry networking events",
                    "Certification and skill validation"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Training</h3>
              <p className="text-gray-600 leading-relaxed">Industry-relevant training in Data Analytics, Cloud Computing, and Business Tools</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Development</h3>
              <p className="text-gray-600 leading-relaxed">Communication, workplace etiquette, and leadership skills development</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mentorship Program</h3>
              <p className="text-gray-600 leading-relaxed">Guidance from industry professionals and hands-on project experience</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Placement Support</h3>
              <p className="text-gray-600 leading-relaxed">Interview preparation and placement assistance for career transitions</p>
            </div>
          </div>

          <div className="mt-12 bg-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-900 mb-6 text-center">Ideal For:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-green-900 mb-2">University Students</h4>
                <p className="text-gray-700 text-sm">Current students preparing for career transition</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-green-900 mb-2">Recent Graduates</h4>
                <p className="text-gray-700 text-sm">Fresh graduates seeking industry-ready skills</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 13v10h-6v-6h-6v6h-6v-10h-2l10-9 10 9h-2z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-green-900 mb-2">Entry-Level Job Seekers</h4>
                <p className="text-gray-700 text-sm">Professionals starting their career journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection
        title="Ready to Elevate Your Career?"
        description="Join the Elevate program and bridge the gap between academic learning and industry success with comprehensive skill development."
        primaryButtonText="Enroll Now"
        secondaryButtonText="Learn More"
        backgroundColor="bg-green-600"
      />

      <Footer />
    </>
  );
}