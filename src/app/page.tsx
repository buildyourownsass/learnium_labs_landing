'use client'

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProgramCard from '../components/ProgramCard';
import FeatureCard from '../components/FeatureCard';
import AccordionItem from '../components/AccordionItem';
import WhyProgramWorksCard from '../components/WhyProgramWorksCard';
import CoreValueCard from '../components/CoreValueCard';
import CompanyInfoCard from '../components/CompanyInfoCard';
import { programsData } from '../data/programsData';
import { whyProgramWorksData } from '../data/whyProgramWorksData';
import { featuresData } from '../data/featuresData';
import { accordionData } from '../data/accordionData';
import { solutionsData } from '../data/solutionsData';
import { coreValuesData } from '../data/coreValuesData';
import { companyInfoData } from '../data/companyInfoData';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Empowering Learners.<br />
              <span style={{ color: 'var(--color-secondary)' }}>Enabling Industries.</span><br />
              Enhancing Futures.
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              At Learnium Labs, we are redefining skill development by delivering industry-aligned, experiential learning programs that prepare individuals and organizations to thrive in the modern world.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Whether you are a student exploring your potential, a graduate entering the workforce, or an organization nurturing talent — we bridge the gap between learning and employability.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <Link href="/#programs" className="btn-primary text-lg px-8 py-4">
                Explore Programs
              </Link>
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Partner with Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding section-alt">
        <div className="container-max">
          <motion.div 
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Where Education Meets Industry
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Learnium Labs is a forward-thinking Skill Development and Learning Solutions Centre built to close the growing skill gap between academia and the workplace.
            </p>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {companyInfoData.map((info, index) => (
                <motion.div
                  key={info.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4 + (index * 0.2), 
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <CompanyInfoCard 
                    title={info.title}
                    description={info.description}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programs Overview */}
      <section id="programs" className="section-padding section-primary">
        <div className="container-max">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Offerings
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Our programs are strategically designed to serve different learner segments — from schools to corporates — ensuring every individual gets a personalized, purpose-driven learning experience.
            </p>
          </motion.div>
          
          {/* Cards Grid with Equal Heights */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {programsData.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <ProgramCard {...program} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Our Programs Work - Separate Section */}
      <section className="section-padding section-alt">
        <div className="container-max">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Our Programs Work</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our proven methodology combines industry expertise with innovative learning approaches to deliver measurable results.
            </p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {whyProgramWorksData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.15,
                  ease: "easeOut" 
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <WhyProgramWorksCard {...item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding section-primary">
        <div className="container-max">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Core Values That Guide Everything We Do
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Our values are the foundation of our commitment to excellence, innovation, and meaningful impact in everything we do.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {coreValuesData.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <CoreValueCard {...value} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Learnium Labs
            </h2>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {featuresData.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partner Solutions */}
      <section className="section-padding section-primary">
        <div className="container-max">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Partner Solutions
            </h2>
            <p className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-accent)' }}>
              Extend Your Learning Capability
            </p>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Your Training Partner. Powered by Learnium Labs.
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="section-alt rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <motion.p 
                className="text-lg text-gray-700 mb-8 leading-relaxed text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                We collaborate with organizations, institutions, and digital learning platforms to act as their dedicated training team — integrating seamlessly with existing tools and systems to deliver effective, scalable learning.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-700 mb-8 leading-relaxed text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                Our partnership model allows you to focus on core business while we handle everything from curriculum design to delivery and performance tracking.
              </motion.p>
              
              <motion.div 
                className="grid md:grid-cols-2 gap-8 mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Solutions Include:</h3>
                  <div className="space-y-3">
                    {solutionsData.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.1 + (index * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <AccordionItem
                          title={item.title}
                          description={item.description}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Ideal For:</h3>
                  <div className="space-y-3">
                    {accordionData.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.3 + (index * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <AccordionItem
                          title={item.title}
                          description={item.description}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                viewport={{ once: true }}
              >
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Explore Partnership Opportunities
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding section-accent">
        <motion.div 
          className="container-max text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let&apos;s Shape the Future Together
          </h2>
          <motion.p 
            className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            At Learnium Labs, we believe that the future belongs to those who learn, unlearn, and relearn. Join us in creating a generation of skilled, confident, and industry-ready professionals.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Enroll Now
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Partner With Us
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Request a Consultation
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}