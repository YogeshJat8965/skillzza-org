import React, { useState } from 'react';

const PartnerForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', countryCode: '+91' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section
      id="partner-contact-form"
      className="w-full relative overflow-hidden bg-white bg-cover bg-center"
      style={{ backgroundImage: "url('/img/Group%2037835.png')" }}
    >
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center py-10 sm:py-16 md:py-20 lg:py-32 xl:py-40">
        {/* Left — Image (constrained on mobile) */}
        <div className="flex-shrink-0 w-full lg:w-auto px-4 sm:px-6 md:px-8 lg:px-0 mb-8 lg:mb-0">
          <img
            src="/img/businesspeople-having-discussion-office.png"
            alt="Business meeting"
            className="w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[1000px] h-auto mx-auto lg:mx-0"
          />
        </div>

        {/* Right — Form */}
        <div className="flex-1 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <h2 className="mb-4 sm:mb-6 font-[DM_Sans] text-[#0F1114] font-medium leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px]">
            Partner with us<br />
            To make a Difference
          </h2>

          <p className="mb-6 sm:mb-8 md:mb-12 font-[Lato] text-[#414040] font-normal leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl max-w-[440px]">
            Connect with our industry experts for a personalised consultation. Let's explore how our solutions can revolutionise your growth.
          </p>

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
                className="w-[85px] sm:w-[95px] h-[50px] sm:h-[55px] px-2 sm:px-3 bg-white border-none rounded-lg text-sm text-[#71717B] font-[Lato] outline-none cursor-pointer"
              >
                <option value="+91">India +91</option>
                <option value="+1">USA +1</option>
                <option value="+44">UK +44</option>
              </select>

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number*"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="flex-1 h-[50px] sm:h-[55px] px-4 sm:px-5 bg-white border-none rounded-lg text-base text-[#71717B] font-[Lato] outline-none"
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
        </div>
      </div>
    </section>
  );
};

export default PartnerForm;
