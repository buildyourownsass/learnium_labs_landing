import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-center md:text-left">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 justify-center md:justify-start">
              <Image
                src="/logo.svg"
                alt="Learnium Labs"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <h3 className="text-2xl font-bold" style={{ color: 'var(--color-accent)' }}>
                Learnium Labs
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed mx-auto md:mx-0">
              Empowering Learners. Enabling Industries. Enhancing Futures. We bridge the gap between learning and employability through industry-aligned, experiential learning programs.
            </p>
            
            {/* Social Media Icons with Hover Animation */}
            <div className="flex space-x-4 justify-center md:justify-start">
              <a 
                href="mailto:learn@learniumlabs.com" 
                className="social-icon"
                aria-label="Email"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a 
                href="tel:+918248680174" 
                className="social-icon"
                aria-label="Phone"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="social-icon"
                aria-label="Twitter"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="social-icon"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Programs */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-6" style={{ color: 'var(--color-accent)' }}>
              Programs
            </h4>
            <ul className="space-y-3">
              <li><Link href="/programs/ignite" className="footer-link">Ignite Program</Link></li>
              <li><Link href="/programs/elevate" className="footer-link">Elevate Program</Link></li>
              <li><Link href="/programs/advance" className="footer-link">Advance Program</Link></li>
              <li><Link href="/programs/empower" className="footer-link">Empower Program</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-6" style={{ color: 'var(--color-accent)' }}>
              Company
            </h4>
            <ul className="space-y-3">
              <li><Link href="/#about" className="footer-link">About Us</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
              <li><Link href="#" className="footer-link">Careers</Link></li>
              <li><Link href="#" className="footer-link">Blog</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-opacity-20 pt-8 mb-8" style={{ borderColor: 'var(--color-accent)' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="contact-item">
              <h5 className="font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>Email</h5>
              <a href="mailto:learn@learniumlabs.com" className="footer-link">
                learn@learniumlabs.com
              </a>
            </div>
            <div className="contact-item">
              <h5 className="font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>Phone</h5>
              <a href="tel:+918248680174" className="footer-link">
                +91 8248680174
              </a>
            </div>
            <div className="contact-item">
              <h5 className="font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>Address</h5>
              <p className="text-gray-300">
                No: 240, TTC Nagar,<br />
                Guduvancheri,<br />
                Chennai - 603202
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-opacity-20 pt-6 text-center" style={{ borderColor: 'var(--color-accent)' }}>
          <p className="text-gray-400">
            &copy; {currentYear} Learnium Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;