import React, { useEffect } from 'react';

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F4F5] flex flex-col font-sans relative">
      {/* Decorative top gradient bar */}
      <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#BD1723] via-[#8947B3] to-[#CF2C2E] z-10"></div>
      
      <main className="flex-grow max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full relative z-20">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle background circle for branding flair */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#BD1723] opacity-5 rounded-full blur-2xl"></div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#0F1114] mb-4 font-display tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Cookie Policy for<span className="text-[#BD1723]"> Skillzza</span>
          </h1>
          <p className="text-[#52525B] mb-6 font-medium pb-6 border-b border-gray-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#BD1723]"></span>
            Effective Date: January 11, 2026 | Website: Skillzza
          </p>
          
          <div className="prose prose-gray max-w-none text-[#4B5563] leading-relaxed space-y-6" style={{ fontFamily: "'Lato', sans-serif", fontSize: '18px' }}>
            <p>
              At Skillzza ("Skillzza", "we", "our", or "us"), we use cookies and similar technologies to enhance your browsing experience, improve platform performance, personalize content, and support our educational, training, internship, and AI-powered learning services. This Cookie Policy explains how we use cookies and the choices available to you. This policy applies to all visitors, learners, educators, institutions, partners, and users of the Skillzza website and related digital platforms. Skillzza operates an AI-driven upskilling and career development platform focused on education, virtual internships, job simulations, workforce transformation, and future-ready learning solutions.
            </p>

            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">1. What Are Cookies?</span>
            </h2>
            <p>
              Cookies are small text files stored on your computer, tablet, or mobile device when you visit a website. Cookies help websites remember user preferences, improve functionality, analyze traffic patterns, and deliver a more personalized experience. Cookies do not typically contain personally identifiable information but may be linked to information you provide through our platform.
            </p>

            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">2. Why We Use Cookies</span>
            </h2>
            <p>Skillzza uses cookies to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Ensure the website functions properly.</li>
              <li>Enable secure login and account access.</li>
              <li>Remember user preferences and settings.</li>
              <li>Improve website performance and user experience.</li>
              <li>Analyze platform usage and learning engagement.</li>
              <li>Measure effectiveness of marketing campaigns.</li>
              <li>Deliver personalized content and recommendations.</li>
              <li>Support AI-driven learning journeys and platform optimization.</li>
              <li>Prevent fraud and maintain platform security.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}></h2>
            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">3. Types of Cookies We Use</span>
            </h2>
            <h3 className="text-xl font-bold text-[#1F2937] mt-8 mb-3 flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-[4px] h-[18px] bg-[#CF2C2E] rounded-sm"></span> A. Essential Cookies
            </h3>
            <p>These cookies are necessary for the operation of our website and cannot be disabled. Examples include:</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>User authentication</li>
              <li>Session management</li>
              <li>Security and fraud prevention</li>
              <li>Form submissions</li>
              <li>Website navigation</li>
            </ul>
            <p className="mt-3 text-sm text-[#71717A] italic">Without these cookies, certain features of Skillzza may not function properly.</p>

            <h3 className="text-xl font-bold text-[#1F2937] mt-10 mb-3 flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-[4px] h-[18px] bg-[#CF2C2E] rounded-sm"></span> B. Performance & Analytics Cookies
            </h3>
            <p>These cookies help us understand how visitors interact with our website. They may collect information such as:</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>User navigation paths</li>
              <li>Device and browser information</li>
              <li>Traffic sources</li>
            </ul>
            <p className="mt-3 text-sm text-[#71717A] italic">This information helps us improve platform performance and user experience.</p>

            <h3 className="text-xl font-bold text-[#1F2937] mt-10 mb-3 flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-[4px] h-[18px] bg-[#CF2C2E] rounded-sm"></span> C. Functional Cookies
            </h3>
            <p>These cookies enable enhanced functionality and personalization. Examples include:</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>Language preferences</li>
              <li>Location settings</li>
              <li>Learning preferences</li>
              <li>Saved user settings</li>
              <li>Dashboard customization</li>
            </ul>

            <h3 className="text-xl font-bold text-[#1F2937] mt-10 mb-3 flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-[4px] h-[18px] bg-[#CF2C2E] rounded-sm"></span> D. Marketing & Advertising Cookies
            </h3>
            <p>These cookies may be used to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>Deliver relevant advertisements</li>
              <li>Measure campaign effectiveness</li>
              <li>Track conversions</li>
              <li>Understand user interests</li>
              <li>Retarget visitors across digital channels</li>
            </ul>
            <p className="mt-3 text-sm text-[#71717A] italic">These cookies may be placed by Skillzza or trusted third-party advertising partners.</p>

            <h3 className="text-xl font-bold text-[#1F2937] mt-10 mb-3 flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-[4px] h-[18px] bg-[#CF2C2E] rounded-sm"></span> E. Third-Party Cookies
            </h3>
            <p>We may use third-party services that place cookies on your device, including:</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>Google Analytics</li>
              <li>Google Tag Manager</li>
              <li>LinkedIn Insights</li>
              <li>Meta (Facebook) Pixel</li>
              <li>YouTube</li>
              <li>Webinar and event platforms</li>
              <li>CRM and marketing automation tools</li>
              <li>Learning management and assessment platforms</li>
            </ul>
            <p className="mt-3 text-sm text-[#71717A] italic">These providers may collect information according to their own privacy policies.</p>

            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">4. Information Collected Through Cookies</span>
            </h2>
            <p>Cookies may collect:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
              <ul className="list-disc pl-6 space-y-1">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Operating system</li>
                <li>Geographic region</li>
              </ul>
              <ul className="list-disc pl-6 space-y-1">
                <li>Session duration</li>
                <li>Clickstream data</li>
                <li>Referring websites</li>
                <li>User interaction patterns</li>
              </ul>
            </div>
            <p className="mt-3 text-sm text-[#71717A] italic">This information is generally aggregated and used for analytical and operational purposes.</p>

            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">5. How Long Cookies Remain on Your Device</span>
            </h2>
            <p>Cookies may be:</p>
            <ul className="list-none space-y-4 mt-5">
              <li className="bg-[#FAFAFA] p-5 rounded-xl border border-gray-200">
                <strong className="text-[#0F1114] block mb-1">Session Cookies</strong>
                These expire automatically when you close your browser.
              </li>
              <li className="bg-[#FAFAFA] p-5 rounded-xl border border-gray-200">
                <strong className="text-[#0F1114] block mb-1">Persistent Cookies</strong>
                These remain on your device until deleted or until they reach their expiration date.
              </li>
            </ul>
            <p className="mt-4">Retention periods vary depending on the purpose of the cookie.</p>

            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">6. Managing Your Cookie Preferences</span>
            </h2>
            <p>You can manage or disable cookies through your browser settings. Most browsers allow you to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>View stored cookies</li>
              <li>Delete cookies</li>
              <li>Block cookies</li>
              <li>Receive alerts before cookies are stored</li>
            </ul>
            <p className="mt-4 font-semibold text-[#1F2937]">
              Please note that disabling certain cookies may affect website functionality and your ability to access some Skillzza services.
            </p>

            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">7. Cookie Consent</span>
            </h2>
            <p>When you first visit the Skillzza website, you may be presented with a cookie consent banner requesting your consent to the use of non-essential cookies. You may:</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>Accept all cookies</li>
              <li>Reject non-essential cookies</li>
              <li>Customize cookie preferences</li>
            </ul>
            <p className="mt-3">Your preferences can be updated at any time through our Cookie Settings panel, where available.</p>

            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">8. Data Protection and Privacy</span>
            </h2>
            <p>
              Information collected through cookies may be combined with personal information collected through registration forms, learning activities, virtual internships, events, assessments, and other Skillzza services. Such information is processed in accordance with the Skillzza Privacy Policy and applicable data protection laws.
            </p>

            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">9. Children's Privacy</span>
            </h2>
            <p>
              Many Skillzza programs are designed for K-12 students, higher education learners, and young professionals. Where required, parental or institutional consent may be obtained before collecting personal information from minors. We encourage parents, guardians, and educational institutions to supervise online activities involving children.
            </p>

            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">10. Updates to This Cookie Policy</span>
            </h2>
            <p>We may update this Cookie Policy periodically to reflect changes in:</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>Legal requirements</li>
              <li>Technology</li>
              <li>Business operations</li>
              <li>Platform functionality</li>
            </ul>
            <p className="mt-3">Updated versions will be posted on this page with a revised "Effective Date."</p>

            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">11. Contact Us</span>
            </h2>
            <p>If you have any questions regarding this Cookie Policy or our use of cookies, please contact:</p>
            <div className="bg-gradient-to-r from-[#faf2f3] to-[#F8FAFC] p-6 rounded-xl border border-[#f5d0d3] mt-5 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-full bg-[#BD1723]"></div>
              <p className="mb-2"><strong className="text-[#0F1114] text-lg text-[#BD1723]">Skillzza</strong></p>
              <p className="mb-2"><strong className="text-[#374151]">Registered Office:</strong> WeWork India, Chromium, CTS No. 106/1-5, Jogeshwari-Vikhroli Link Road, Powai, Mumbai – 400076, India.</p>
              <p className="mb-2"><strong className="text-[#374151]">Email:</strong> <a href="mailto:privacy@skillzza.com" className="text-[#BD1723] hover:text-[#8b1019] hover:underline transition-colors font-medium">privacy@skillzza.com</a></p>
              <p><strong className="text-[#374151]">Website:</strong> <a href="https://www.skillzza.com" target="_blank" rel="noopener noreferrer" className="text-[#BD1723] hover:text-[#8b1019] hover:underline transition-colors font-medium">www.skillzza.com</a></p>
            </div>

            <div className="mt-14 pt-8 border-t border-gray-200">
              <p className="font-semibold text-[#1F2937] text-center text-[18px]">
                By continuing to use the Skillzza website, you acknowledge that you have read and understood this Cookie Policy and agree to the use of cookies as described herein.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CookiePolicy;
