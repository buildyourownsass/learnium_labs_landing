import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import ProgramHero from '../../../components/ProgramHero';
import IdealForSection from '../../../components/IdealForSection';
import CallToActionSection from '../../../components/CallToActionSection';

export default function IgnitePage() {
  const heroData = {
    title: "Ignite Program",
    subtitle: "For School Students (Grades 8-12)",
    tagline: "Inspire Curiosity. Ignite Innovation.",
    description: "The Ignite program introduces school students to the world beyond textbooks. It focuses on nurturing critical thinking, creativity, problem-solving, and digital literacy — the foundational skills essential for success in the 21st century.",
    iconSvg: (
      <svg className="w-12 h-12 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    backgroundImage: "/images/ignite-hero.svg",
    primaryColor: "bg-orange-100",
    decorativeColors: {
      primary: "bg-orange-100",
      secondary: "bg-yellow-100",
      tertiary: "bg-red-100"
    }
  };

  const idealForData = [
    {
      title: "Students from Grades 8–12",
      description: "Perfect for middle and high school students ready to explore beyond traditional classroom learning"
    },
    {
      title: "School Partnerships",
      description: "Educational institutions looking to enhance their curriculum with modern skill development"
    },
    {
      title: "STEM & Innovation Clubs",
      description: "Science, technology, engineering, and mathematics clubs seeking enrichment programs"
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
              Through interactive workshops, STEM-based learning, coding sessions, and innovation labs, students develop confidence, communication, and a mindset for continuous learning.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-orange-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-orange-900 mb-4">What Students Learn</h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    "Critical thinking and problem-solving",
                    "Digital literacy and technology fundamentals", 
                    "Creative and innovative thinking",
                    "Communication and collaboration skills",
                    "Leadership and teamwork"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-orange-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Learning Methods</h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    "Interactive workshops and seminars",
                    "STEM-based learning activities",
                    "Hands-on coding sessions", 
                    "Innovation labs and maker spaces",
                    "Project-based learning approaches"
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
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Foundational Technology</h3>
              <p className="text-gray-600 leading-relaxed">Exposure to technology, design, and innovation fundamentals</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Problem-Solving</h3>
              <p className="text-gray-600 leading-relaxed">Creative problem-solving and leadership development activities</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Skills</h3>
              <p className="text-gray-600 leading-relaxed">Early introduction to industry skills through project-based learning</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5S12 9.67 12 10.5V18h2v-4h3v4h2V8.5c0-1.38-1.12-2.5-2.5-2.5H17c-.28 0-.5.22-.5.5V7h-1V5.5c0-.83-.67-1.5-1.5-1.5S13 4.67 13 5.5V7h-1v-.5c0-.28-.22-.5-.5-.5H6.5C5.12 6 4 7.12 4 8.5V18z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">School Partnerships</h3>
              <p className="text-gray-600 leading-relaxed">Collaboration with schools for tailored learning modules</p>
            </div>
          </div>
        </div>
      </section>

      <IdealForSection 
        items={idealForData}
        bgColor="bg-orange-50"
        textColor="text-orange-900"
      />

      <CallToActionSection
        title="Ready to Ignite Your Potential?"
        description="Join the Ignite program and discover the exciting world of innovation, technology, and creative problem-solving."
        primaryButtonText="Enroll Now"
        secondaryButtonText="Learn More"
        backgroundColor="bg-orange-600"
      />

      <Footer />
    </>
  );
}