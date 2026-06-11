import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
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
            Privacy Policy <span className="text-[#BD1723]"></span>
          </h1>
          <p className="text-[#52525B] mb-6 font-medium pb-6 border-b border-gray-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#BD1723]"></span>
            Last updated: June 11, 2026 | Skillzza
          </p>
          
          <div className="prose prose-gray max-w-none text-[#4B5563] leading-relaxed space-y-6" style={{ fontFamily: "'Lato', sans-serif", fontSize: '18px' }}>
            
            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">Introduction</span>
            </h2>
            <p>
              We, Skillzza, are committed to safeguarding the privacy of our website visitors. In this policy, we explain how we will treat your personal information.
            </p>
            <p>
              By using our website and agreeing to this policy, you consent to our use of cookies in accordance with the terms of this policy.
            </p>

            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">Collecting Personal Information</span>
            </h2>
            <p>We may collect, store, and use the following kinds of personal information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Information about your computer and about your visits to and use of this website (including your IP address, geographical location, browser type and version, operating system, referral source, length of visit, page views, and website navigation paths);</li>
              <li>Information that you provide to us when registering with our website, including your email address;</li>
              <li>Information that you provide to us for the purpose of subscribing to our email notifications and/or newsletters (including your name and email address);</li>
              <li>Information that you provide to us when using the services on our website, or that is generated in the course of the use of those services (including the timing, frequency, and pattern of service use);</li>
              <li>Information contained in or relating to any communications that you send to us or send through enquiry forms or otherwise on our website (including the communication content and metadata associated with the communication);</li>
              <li>Any other personal information that you choose to send to us.</li>
            </ul>
            <p>
              Before you disclose to us the personal information of another person, you must obtain that person’s consent to both the disclosure and the processing of that personal information in accordance with this policy.
            </p>

            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">Using Your Personal Information</span>
            </h2>
            <p>
              Personal information submitted to us through our website will be used for the purposes specified in this policy or on the relevant pages of the website.
            </p>
            <p>We may use your personal information to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Administer our website and business;</li>
              <li>Personalize our website for you;</li>
              <li>Enable your use of the services available on our website;</li>
              <li>Send you email notifications that you have specifically requested;</li>
              <li>Send you our email newsletter, if you have requested it;</li>
              <li>Deal with enquiries and complaints made by or about you relating to our website;</li>
              <li>Keep our website secure and prevent fraud.</li>
            </ul>
            <p>
              If you submit personal information for publication on our website, we will publish and otherwise use that information in accordance with the license you grant to us.
            </p>

            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">Disclosing Personal Information</span>
            </h2>
            <p>
              We may disclose your personal information to any of our employees, officers, advisers, agents, insofar as reasonably necessary for the purposes set out in this policy.
            </p>
            <p>
              We may disclose your personal information to any member of our group of companies (this means our affiliates and subsidiaries), insofar as reasonably necessary for the purposes set out in this policy.
            </p>
            <p>We may disclose your personal information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>To the extent that we are required to do so by law;</li>
              <li>In order to establish, exercise or defend our legal rights (including providing information to others for the purposes of fraud prevention and reducing credit risk);</li>
              <li>To the purchaser (or prospective purchaser) of any business or asset that we are (or are contemplating) selling; and</li>
              <li>To any person who we reasonably believe may apply to a court or other competent authority for disclosure of that personal information where, in our reasonable opinion, such court or authority would be reasonably likely to order disclosure of that personal information.</li>
            </ul>
            <p>Except as provided in this policy, we will not provide your personal information to third parties.</p>

            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">International Data Transfers</span>
            </h2>
            <p>
              Information that we collect may be stored and processed in and transferred between any of the countries in which we operate in order to enable us to use the information in accordance with this policy.
            </p>
            <p>
              Personal information that you publish on our website or submit for publication on our website may be available, via the internet, around the world. We cannot prevent the use or misuse of such information by others.
            </p>
            <p>You expressly agree to the transfers of personal information described in this Section.</p>

            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">Retaining Personal Information</span>
            </h2>
            <p>
              This Section sets out our data retention policies and procedures, which are designed to help ensure that we comply with our legal obligations in relation to the retention and deletion of personal information.
            </p>
            <p>
              Personal information that we process for any purpose or purposes shall not be kept for longer than is necessary for that purpose or those purposes.
            </p>
            <p>Notwithstanding the other provisions of this Section, we will retain documents (including electronic documents) containing personal data:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>To the extent that we are required to do so by law;</li>
              <li>If we believe that the documents may be relevant to any ongoing or prospective legal proceedings; and</li>
              <li>In order to establish, exercise or defend our legal rights (including providing information to others for the purposes of fraud prevention and reducing credit risk).</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">Security of your Personal Information</span>
            </h2>
            <p>We will take reasonable technical and organizational precautions to prevent the loss, misuse, or alteration of your personal information.</p>
            <p>We will store all the personal information you provide on our secure (password- and firewall-protected) servers.</p>
            <p>
              You acknowledge that the transmission of information over the internet is inherently insecure, and we cannot guarantee the security of data sent over the internet.
            </p>

            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">Third Party Websites</span>
            </h2>
            <p>Our website includes hyperlinks to, and details of, third-party websites.</p>
            <p>We have no control over, and are not responsible for, the privacy policies and practices of third parties.</p>

            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">Cookies</span>
            </h2>
            <p>Our website uses cookies.</p>
            <p>
              A cookie is a file containing an identifier (a string of letters and numbers) that is sent by a web server to a web browser and is stored by the browser. The identifier is then sent back to the server each time the browser requests a page from the server.
            </p>

            <div className="mt-14 pt-8 border-t border-gray-200">
              <p className="font-semibold text-[#1F2937] text-center text-[18px]">
                This Privacy Policy may be amended and updated periodically and without prior notice to you to reflect changes in our online information practices. When changes are made to this Policy, it will be posted to the website, and the “last updated” date at the top of this policy will be revised. We also encourage users to periodically check this Policy to understand how we protect and use your information.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
