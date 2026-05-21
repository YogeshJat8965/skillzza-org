import React, { useState } from 'react';
import { getAssetPath, getBackgroundImageUrl } from '../utils/assets';

const PartnerForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', countryCode: '+91' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <section
      id="partner-contact-form"
      className="w-full relative overflow-hidden bg-white bg-cover bg-center"
      style={{ backgroundImage: getBackgroundImageUrl('/img/Group%2037835.png') }}
    >
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center justify-between pt-0 sm:pt-2 md:pt-4 lg:pt-6 xl:pt-8 pb-6 sm:pb-10 md:pb-12 lg:pb-14 xl:pb-16">
        {/* Left - Image (constrained on mobile) */}
        <div className="w-full lg:w-1/2 xl:w-[55%] flex justify-start mb-8 lg:mb-0">
          <img
            src={getAssetPath('/img/businesspeople-having-discussion-office.png')}
            alt="Business meeting"
            className="w-full h-auto max-w-full lg:max-w-[820px] object-contain rounded-r-2xl lg:rounded-r-3xl pr-4 lg:pr-8"
          />
        </div>

        {/* Right - Form */}
        <div className="w-full lg:w-1/2 xl:w-[45%] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 flex flex-col justify-center">
          <h2
            className="mb-4 sm:mb-5 text-[#0F1114] font-bold leading-[1.2]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(24px, 2.8vw, 52px)',
            }}
          >
            Partner with us<br />
            To make a Difference
          </h2>

          <p className="mb-6 sm:mb-7 md:mb-8 font-[Lato] text-[#414040] font-normal leading-relaxed text-base sm:text-lg md:text-[18px] lg:text-[20px] max-w-[440px]">
            Connect with our industry experts for a personalised consultation. Let's explore how our solutions can revolutionise your growth.
          </p>

          {submitted ? (
            <div className="max-w-[440px] bg-[#EBFDF5] border border-[#A7F3D0] rounded-xl p-6 text-center shadow-md animate-fade-in">
              <div className="w-12 h-12 bg-[#10B981] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-200">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-[DM_Sans] text-[#065F46] font-bold text-xl mb-2">Thank you!</h3>
              <p className="font-[Lato] text-[#047857] text-base leading-relaxed">
                Your partnership inquiry has been received. Our team will get in touch with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-[440px]">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-[50px] sm:h-[55px] px-4 sm:px-5 bg-white border-none rounded-lg text-base text-[#71717B] font-[Lato] outline-none"
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-[50px] sm:h-[55px] px-4 sm:px-5 bg-white border-none rounded-lg text-base text-[#71717B] font-[Lato] outline-none"
                />
              </div>

              <div className="flex gap-2 sm:gap-3 mb-4">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="w-[85px] sm:w-[95px] h-[50px] sm:h-[55px] px-2 sm:px-3 bg-white border-none rounded-lg text-sm text-[#71717B] font-[Lato] outline-none cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2371717B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-[position:right_10px_center] bg-no-repeat pr-6"
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                </select>

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number*"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="flex-1 min-w-0 h-[50px] sm:h-[55px] px-4 sm:px-5 bg-white border-none rounded-lg text-base text-[#71717B] font-[Lato] outline-none"
                />
              </div>

              <div className="mt-5 sm:mt-6">
                <button
                  type="submit"
                  className="w-full h-[50px] sm:h-[55px] bg-black text-white text-base sm:text-lg font-medium font-[Lato] border-none rounded-lg cursor-pointer hover:bg-[#1a1a1a] transition-colors"
                >
                  Get Started
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default PartnerForm;
