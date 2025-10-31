import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import ProgramHero from '../../../components/ProgramHero';
import IdealForSection from '../../../components/IdealForSection';
import CallToActionSection from '../../../components/CallToActionSection';

export default function AdvancePage() {
  const heroData = {
    title: "Advance Program",
    subtitle: "For Working Professionals",
    tagline: "Skill Up. Scale Up.",
    description: "The Advance program empowers working professionals to stay ahead in their careers through continuous learning and skill enhancement. It provides flexible, industry-relevant training designed for busy professionals who want to advance their expertise without compromising their current commitments.",
    iconSvg: (
      <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.5 10.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5zm0-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5zm0-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5zm0-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5zm0-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5z"/>
      </svg>
    ),
    backgroundImage: "/images/advance-hero.svg",
    primaryColor: "bg-blue-100",
    decorativeColors: {
      primary: "bg-blue-100",
      secondary: "bg-indigo-100",
      tertiary: "bg-cyan-100"
    }
  };

  const idealForData = [
    {
      title: "Mid-Level Professionals",
      description: "Experienced professionals looking to advance their careers and take on leadership roles"
    },
    {
      title: "Team Leads",
      description: "Team leaders seeking to enhance their technical expertise and management capabilities"
    },
    {
      title: "Managers",
      description: "Managers aiming to stay current with emerging technologies and industry trends"
    },
    {
      title: "Freelancers Seeking Growth",
      description: "Independent professionals looking to expand their skill set and market opportunities"
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
              Through advanced workshops, strategic leadership training, innovation labs, and peer networking, professionals enhance their expertise while building the leadership capabilities needed for career advancement.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Emerging Technologies</h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    "AI and Machine Learning applications",
                    "Data Science and Analytics", 
                    "Automation and Process Optimization",
                    "Cybersecurity and Risk Management",
                    "Advanced project and team leadership"
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
              
              <div className="bg-indigo-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-indigo-900 mb-4">Flexible Learning Formats</h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    "Modular, customizable learning paths tailored to job roles",
                    "Self-paced, virtual, and on-site sessions",
                    "Leadership and managerial development programs", 
                    "Blended learning formats for working professionals",
                    "Industry-focused case studies and real-world applications"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-indigo-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Leadership Development</h3>
              <p className="text-gray-600 leading-relaxed">Advanced leadership skills and strategic thinking for career progression</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2.05v2.02c4.39.54 7.5 4.53 6.96 8.92-.39 3.16-2.58 5.8-5.54 6.67v2.03c5.68-.94 9.64-6.07 8.7-11.75C22.22 5.99 18.01 2.94 13 2.05z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Learning</h3>
              <p className="text-gray-600 leading-relaxed">Designed for working professionals with flexible schedules and remote options</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation Focus</h3>
              <p className="text-gray-600 leading-relaxed">Cutting-edge technologies and innovation methodologies for competitive advantage</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Executive Mentorship</h3>
              <p className="text-gray-600 leading-relaxed">One-on-one guidance from industry executives and senior professionals</p>
            </div>
          </div>
        </div>
      </section>

      <IdealForSection 
        items={idealForData}
        bgColor="bg-blue-50"
        textColor="text-blue-900"
        columns={4}
      />

      <CallToActionSection
        title="Ready to Advance Your Career?"
        description="Join the Advance program and take your professional skills to the next level with strategic learning designed for working professionals."
        primaryButtonText="Enroll Now"
        secondaryButtonText="Learn More"
        backgroundColor="bg-blue-600"
      />

      <Footer />
    </>
  );
}