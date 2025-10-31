import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProgramCard from '../components/ProgramCard';
import FeatureCard from '../components/FeatureCard';
import AccordionItem from '../components/AccordionItem';
import WhyProgramWorksCard from '../components/WhyProgramWorksCard';
import { programsData } from '../data/programsData';
import { whyProgramWorksData } from '../data/whyProgramWorksData';
import { featuresData } from '../data/featuresData';
import { accordionData } from '../data/accordionData';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen gradient-bg relative overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-main.svg"
            alt="Learning and development illustration"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        
        {/* Background decorative elements */}
        <div className="container-max section-padding relative z-30 flex items-center min-h-screen">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Empowering Learners.<br />
              <span style={{ color: 'var(--color-secondary)' }}>Enabling Industries.</span><br />
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
      <section id="about" className="section-padding section-alt">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Where Education Meets Industry
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Learnium Labs is a forward-thinking Skill Development and Learning Solutions Centre built to close the growing skill gap between academia and the workplace.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
              <div className="bg-green-100 p-8 rounded-xl border border-green-200">
                <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: 'var(--color-primary)' }}>Our Mission</h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  We collaborate with industry experts, academic institutions, and corporate partners to design customized, hands-on learning programs that focus on the skills that matter most — practical application, innovation, and adaptability.
                </p>
              </div>
              <div className="bg-green-100 p-8 rounded-xl border border-green-200">
                <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: 'var(--color-primary)' }}>Our Philosophy</h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Learning should not stop at understanding — it should transform into impact. We are not just another training provider; we are your learning partner for growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section id="programs" className="section-padding section-primary">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Offerings
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Our programs are strategically designed to serve different learner segments — from schools to corporates — ensuring every individual gets a personalized, purpose-driven learning experience.
            </p>
          </div>
          
          {/* Cards Grid with Equal Heights */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {programsData.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Programs Work - Separate Section */}
      <section className="section-padding section-alt">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Our Programs Work</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our proven methodology combines industry expertise with innovative learning approaches to deliver measurable results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyProgramWorksData.map((item) => (
              <WhyProgramWorksCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Learnium Labs
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Partner Solutions */}
      <section className="section-padding section-primary">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Partner Solutions
            </h2>
            <p className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-accent)' }}>
              Extend Your Learning Capability
            </p>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Your Training Partner. Powered by Learnium Labs.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto ">
            <div className="section-alt rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
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
                        <svg className="w-6 h-6 text-green-400 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Ideal For:</h3>
                  <div className="space-y-3">
                    {accordionData.map((item) => (
                      <AccordionItem
                        key={item.id}
                        title={item.title}
                        description={item.description}
                      />
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
      <section className="section-padding section-accent">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let&apos;s Shape the Future Together
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            At Learnium Labs, we believe that the future belongs to those who learn, unlearn, and relearn. Join us in creating a generation of skilled, confident, and industry-ready professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Enroll Now
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Partner With Us
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}