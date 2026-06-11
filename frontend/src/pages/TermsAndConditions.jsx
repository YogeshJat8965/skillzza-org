import React, { useEffect } from 'react';

const TermsAndConditions = () => {
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
            Terms and<span className="text-[#BD1723]"> Conditions</span>
          </h1>
          <p className="text-[#52525B] mb-10 font-medium pb-8 border-b border-gray-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#BD1723]"></span>
            Skillzza Platform & Exam Terms
          </p>
          
          <div className="prose prose-gray max-w-none text-[#4B5563] leading-relaxed space-y-6" style={{ fontFamily: "'Lato', sans-serif", fontSize: '18px' }}>
            
            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">Platform Instructions:</span>
            </h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>This site is best viewed in 1366 * 768 resolution with the latest version of Google Chrome browser only.</li>
              <li>Clear browser cache before logging into the application.</li>
              <li>Use the appropriate test-taking link/URL.</li>
              <li>Key in, carefully, your username and passcode provided in the email sent.</li>
              <li>If you are unable to start the test after logging in, please clear the cache & retry.</li>
              <li>Take a photo of the ID using the webcam if you face difficulty in uploading any Govt. issued ID card.</li>
              <li>Check your webcam and permission on your browser, If you can’t take a photo.</li>
              <li>If you can’t share your screen, check for pop-up blockers, check for webcam and microphone permissions from browser.</li>
              <li>If your screen freezes or you face any difficulty during the test, close the browser, re-open Google Chrome, login and resume the test.</li>
              <li>Please disable custom settings in your Google Chrome browser and allow cookies in your web browser.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">General Instructions:</span>
            </h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Please ensure that you are in a closed room with no other individual present in the room.</li>
              <li>Please ensure that there is no study material available with you on the desk or in the room.</li>
              <li>The room you are seated in should be "WELL-LIT" and you should be seated "FACING THE LIGHT SOURCE".</li>
              <li>You should ensure appropriate internet connectivity and use a fully functional laptop/computer ready (webcam, speakers, and microphone).</li>
              <li>You should also arrange for uninterrupted power to prevent any disruptions during the test-taking process.</li>
              <li>Kindly ensure that all other Windows/tabs or applications are closed, as it will be considered an attempt to indulge in some form of MALPRACTICE.</li>
              <li>You are not allowed to take any washroom breaks in the middle of the exam.</li>
              <li>Please note that the Entire Exam process, which includes your actions in front of the system and on the system, are being "MONITORED & RECORDED" and any form of malpractice will lead to your exam being cancelled.</li>
              <li>Test cannot be taken from a mobile device(s) or mobile phone. You need to attend the test only from a Laptop with camera enabled or with a desktop with webcam enabled.</li>
              <li>Do not forward this email or the content to anyone.</li>
            </ul>

            <h3 className="text-xl font-bold text-[#1F2937] mt-10 mb-3 flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-[4px] h-[18px] bg-[#CF2C2E] rounded-sm"></span> Please avoid the following during the exam:
            </h3>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Using your mobile phone for any communication.</li>
              <li>Using any written or printed material.</li>
              <li>Leaving your seat during the exam.</li>
              <li>Going out of focus of the camera monitoring you.</li>
              <li>Trying to open any other tabs apart from the exam tab.</li>
              <li>Trying to Copy paste from any file or website.</li>
              <li>Talking to anyone in the room.</li>
              <li>Trying to Stop the Camera or block its view.</li>
              <li>Presence of other individuals in the room.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">Exam Taking Instructions</span>
            </h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>You will receive login credentials for the test/assessment through a separate mail at least one day before the scheduled start time.</li>
              <li>Please check spam/junk in case you are unable to find it.</li>
              <li>Please refresh the webpage around the test start time to activate the test before clicking "Start".</li>
              <li>The test will begin only at the scheduled time.</li>
              <li>Please refresh your browser in case the test page seems inactive.</li>
              <li>If you face any issues related to functioning of the test, please close the browser window, clear the browser cache and login again by clicking on "Resume".</li>
              <li>In case for some reason, you close the browser, your responses will be available and there will be no loss of data.</li>
              <li>Please focus on completing the test appropriately - the messages from remote proctoring system will not have any adverse effect on genuine test-takers.</li>
              <li>Once you login, the candidate onboarding process will begin, and you will be required to capture an image of yourself and provide a valid Identity Proof. Please keep ready your ID card which may be required.</li>
              <li>In case of delay, beyond scheduled time, you will not be allowed to login.</li>
              <li>In case your test page crashes, you may re-try with the same URL and credentials after 2-3 minutes.</li>
              <li>Completed screen comes up once the test is/gets submitted.</li>
              <li><strong className="text-[#0F1114]">Note:</strong> Genuine test-takers need not worry on account of some messages from the sensitive remote/auto-proctoring system.</li>
              <li>You may call (044-48134590) or write to <a href="mailto:assess.support@skillzza.com" className="text-[#BD1723] hover:underline">assess.support@skillzza.com</a> for technical support during the test/assessment.</li>
            </ul>

            <div className="bg-[#FEF2F2] border-l-4 border-[#BD1723] p-6 rounded-r-xl shadow-sm my-10 text-[#991B1B]">
              <h2 className="text-xl font-bold text-[#991B1B] mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>Exam Terms and Conditions</h2>
              <p className="font-semibold mb-0">
                THESE TERMS ARE SUBJECT TO CHANGE FROM TIME TO TIME IN SKILLZZA’S SOLE DISCRETION. IT IS YOUR RESPONSIBILITY TO REVIEW THESE TERMS CAREFULLY AS YOU MUST COMPLY WITH THE MOST CURRENT VERSION OF THE AGREEMENT.
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#1F2937] mt-10 mb-3 flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-[4px] h-[18px] bg-[#CF2C2E] rounded-sm"></span> Details
            </h3>
            <p>Skillzza’s Exam Terms and Conditions (the “Terms”) are entered into between the examinee (“You”) and Skillzza as of the date you click “I agree” below (the “Effective Date”).</p>

            <h3 className="text-xl font-bold text-[#1F2937] mt-10 mb-3 flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-[4px] h-[18px] bg-[#CF2C2E] rounded-sm"></span> Eligibility
            </h3>
            <p>Skillzza’s Exams: you must be at least 18 years of age to be eligible for any Skillzza exam or be of the age prescribed by the concerned authority on behalf of which the exam is being conducted.</p>

            <h3 className="text-xl font-bold text-[#1F2937] mt-10 mb-3 flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-[4px] h-[18px] bg-[#CF2C2E] rounded-sm"></span> Confidential Information
            </h3>
            <p>
              The content of the Exam, including without limitation, questions, answers, or any communication, including oral communication, regarding or related to the Exam is Skillzza’s confidential information (“Confidential Information”). Any disclosure of Confidential Information is a violation of these Terms and could compromise the integrity and security of this exam. Skillzza makes exams available to you solely for the purpose of demonstrating competency in the content area assessed by the Exam. You are expressly prohibited from disclosing, publishing, reproducing, copying, selling, posting, downloading, or transmitting any Confidential Information, in whole or in part, in any form or by any means, oral or written, electronic or mechanical, for any purpose.
            </p>

            <h3 className="text-xl font-bold text-[#1F2937] mt-10 mb-3 flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-[4px] h-[18px] bg-[#CF2C2E] rounded-sm"></span> Certification/Revocation
            </h3>
            <p>
              If you violate these Terms, you may be prohibited from taking the Exam and/or any other Skillzza Exam or for the organization for whom the exam is being conducted; you may be decertified from any Skillzza Certification Program; and Skillzza, in its sole discretion, may terminate any applicable business relationship with you and prohibit you from accessing any of our exam services.
            </p>

            <h3 className="text-xl font-bold text-[#1F2937] mt-10 mb-3 flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-[4px] h-[18px] bg-[#CF2C2E] rounded-sm"></span> Misconduct
            </h3>
            <p>If Skillzza discovers that you have violated these Terms or assisted others in doing so:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>You may lose all Skillzza certifications.</li>
              <li>You may be barred from taking or retaking any exam.</li>
              <li>Skillzza or the organization for whom the exam is being conducted, at their sole discretion, may choose to terminate any applicable relationship with you, if one exists.</li>
            </ul>
            <p className="mt-4 font-semibold text-[#1F2937]">Examples of misconduct and/or misuse of the Exam include but are not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Providing false or fraudulent identification.</li>
              <li>Providing or accepting improper assistance.</li>
              <li>Disseminating actual Exam content by any means including, but not limited to, web postings, formal or informal test preparation or discussion groups, reconstruction through memorization, or any other method.</li>
              <li>Having non-authorized items in your possession during the Exam.</li>
              <li>Using unauthorized materials (including brain-dump material and/or unauthorized publication of Exam questions with or without answers) to prepare for the Exam.</li>
              <li>Making notes of any kind during the Exam.</li>
              <li>Removing or attempting to remove Exam material (in any format).</li>
              <li>Intentionally causing a disturbance of any kind during the Exam.</li>
              <li>Modifying and/or altering the results and/or score report for this Exam or any other Exam record.</li>
              <li>Circumventing the Exam retake policy, if any.</li>
              <li>Misrepresentation of certification status.</li>
              <li>Misconduct as determined by statistical analysis.</li>
              <li>Unauthorized accessing of Exam or Exam content (including access to materials in forums, chat rooms, discussion groups, blogs, or other sharing sites with intent to circumvent Exam procedures).</li>
              <li>Failing and/or Retaking the Exam.</li>
            </ul>

            <h3 className="text-xl font-bold text-[#1F2937] mt-10 mb-3 flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-[4px] h-[18px] bg-[#CF2C2E] rounded-sm"></span> Personal Information and Privacy
            </h3>
            <p>
              When we collect and process your personal information during participation in the Exam, your personal information is handled in accordance with Skillzza’s Privacy Policy, as well as the additional Exam Privacy and Policies Terms below.
            </p>
            <p>In providing Exam services, we may collect personal information such as:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Your answers to exam questions and the results of the exam.</li>
              <li>A record of your interactions with our performance-based exams.</li>
              <li>Your certification status.</li>
              <li>Photographic and/or video recordings taken to confirm your identity, prevent fraud, and to otherwise help administer and score the test.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F1114] mt-12 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">Skillzza Exam Privacy and Policies</span>
            </h2>
            <p>Below is the Exam Privacy and Policies agreement that is presented to the examinee during the registration process.</p>
            
            <h3 className="text-xl font-bold text-[#1F2937] mt-8 mb-3 flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-[4px] h-[18px] bg-[#CF2C2E] rounded-sm"></span> Instructions to examinee
            </h3>
            <p>
              Read the following terms carefully. If you accept the terms, please click the checkbox next to the Start button alongside. If you do not accept the terms of this agreement, you will not be permitted to take the exam.
            </p>

            <h3 className="text-xl font-bold text-[#1F2937] mt-8 mb-3 flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-[4px] h-[18px] bg-[#CF2C2E] rounded-sm"></span> Privacy
            </h3>
            <p>
              As part of taking the Exam, Skillzza will capture your personal information which includes, but is not limited to, your photograph, your digital keystroke patterns, and your personally identifying information (including, but not limited to, name, address, company, title). In addition, as part of the online proctoring of each Exam, if applicable, Skillzza or an agent of Skillzza may be watching a live webcast of you at your session (and can communicate with you, tell you to stop taking cell phone calls, etc.). All information collected in connection with the Exam shall collectively be referred to as “Exam Information”. The Skillzza Privacy Policy describes how we treat personal information when you use Skillzza’s products and services, including the Exam Information. In addition, the following describes our privacy practices that are specific to the Exam. All Exam Information you submit to Skillzza is collected by Skillzza or its authorized agents in India, as well as the jurisdiction where you take the Exam. Exam Information may be shared with the organization for which the exam is conducted for the purpose of maintaining records. This Policy is governed by the laws of India.
            </p>

            <h3 className="text-xl font-bold text-[#1F2937] mt-8 mb-3 flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-[4px] h-[18px] bg-[#CF2C2E] rounded-sm"></span> How will Exam Information be used?
            </h3>
            <p>The Exam Information you submit is used for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Registering test takers to take exams.</li>
              <li>Ensuring the security of the Exam process.</li>
            </ul>

            <h3 className="text-xl font-bold text-[#1F2937] mt-8 mb-3 flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-[4px] h-[18px] bg-[#CF2C2E] rounded-sm"></span> Your Choices
            </h3>
            <p>
              Submitting your Exam Information is voluntary. However, if you choose not to submit your Exam Information, you will not be permitted to take the Exam.
            </p>

            <h3 className="text-xl font-bold text-[#1F2937] mt-8 mb-3 flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-[4px] h-[18px] bg-[#CF2C2E] rounded-sm"></span> Who may access your data?
            </h3>
            <p>
              Skillzza employees and the organization for whom the exam is being conducted process Exam Information for the purposes listed above. Skillzza takes appropriate technical, organizational, and legal steps to protect Exam Information. The organization for whom the exam is conducted for, and with whom we share your Exam Information, will be bound by terms of confidentiality.
            </p>

            <h3 className="text-xl font-bold text-[#1F2937] mt-8 mb-3 flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-[4px] h-[18px] bg-[#CF2C2E] rounded-sm"></span> Does Skillzza keep your data?
            </h3>
            <p>Exam Information is retained in accordance with local law. We may also retain Exam Information to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Dispute resolutions around test taking and passing.</li>
              <li>Do demographic and similar non-personally identifiable analyses regarding the test-taker populations, pass rates, and other behaviors.</li>
            </ul>

            <div className="bg-gradient-to-r from-[#faf2f3] to-[#F8FAFC] p-6 rounded-xl border border-[#f5d0d3] mt-10 shadow-sm relative overflow-hidden inline-block pr-16">
              <div className="absolute top-0 right-0 w-2 h-full bg-[#BD1723]"></div>
              <p className="mb-0">
                <strong className="text-[#374151]">Contacting Us:</strong> For more information about our privacy practices, please contact us through this website any time, or write to us at:{' '}
                <a href="mailto:assess.support@skillzza.com" className="text-[#BD1723] hover:text-[#8b1019] hover:underline transition-colors font-medium ml-1">
                  assess.support@skillzza.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditions;
