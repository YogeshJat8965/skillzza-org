import React, { useState } from 'react'
import { getBackgroundImageUrl } from '../utils/assets'

function ContactUs() {
  const [activeStep, setActiveStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    designation: '',
    organization: '',
    email: '',
    countryCode: '+91',
    phone: '',
    linkedin: '',
    message: '',
    experience: '',
    industry: '',
    achievements: '',
    motivation: '',
    engagementPreferences: [],
  })

  const steps = [
    { id: 1, label: 'Information' },
    { id: 2, label: 'Professional Background' },
    { id: 3, label: 'Interest & Motivation' },
    { id: 4, label: 'Engagement Preferences' },
  ]

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleEngagementPreference = (value) => {
    setFormData((prev) => {
      const exists = prev.engagementPreferences.includes(value)
      return {
        ...prev,
        engagementPreferences: exists
          ? prev.engagementPreferences.filter((item) => item !== value)
          : [...prev.engagementPreferences, value],
      }
    })
  }

  const goNext = () => {
    setSubmitted(false)
    setActiveStep((s) => Math.min(4, s + 1))
  }

  const goPrevious = () => {
    setSubmitted(false)
    setActiveStep((s) => Math.max(1, s - 1))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (activeStep < 4) {
      goNext()
      return
    }
    setSubmitted(true)
  }

  return (
    <main style={{ background: '#ffffff', minHeight: '100vh' }}>
      <section
        style={{
          position: 'relative',
          minHeight: '480px',
          backgroundImage: getBackgroundImageUrl('/improvements/call center.jpg'),
          backgroundSize: 'cover',
          backgroundPosition: 'center 22%',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.48) 0%, rgba(15, 23, 42, 0.24) 52%, rgba(15, 23, 42, 0.08) 100%)',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            maxWidth: 1240,
            margin: '0 auto',
            padding: '0 32px',
          }}
        >
          <h1
            style={{
              margin: 0,
              color: '#ffffff',
              fontSize: 'clamp(40px, 7vw, 72px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              textAlign: 'left',
              textShadow: '0 10px 26px rgba(0, 0, 0, 0.35)',
              maxWidth: 560,
              transform: 'translateX(10%)',
            }}
          >
            Contact Us
          </h1>
        </div>
      </section>

      <section className="cu-flow-wrap">
        <div className="cu-flow-bg-orb cu-flow-bg-orb--one" />
        <div className="cu-flow-bg-orb cu-flow-bg-orb--two" />

        <div className="cu-flow-inner">
          <h2 className="cu-flow-title">Join the Skillzza</h2>




          <div className="cu-flow-grid">
            <section className="cu-form-card" aria-label="Contact form wizard">
              <h3 className="cu-form-title">{steps[activeStep - 1].label}</h3>

              <form className="cu-form" onSubmit={handleSubmit}>
                {activeStep === 1 && (
                  <>
                    <label className="cu-label" htmlFor="cu-name">Full Name</label>
                    <input className="cu-input" id="cu-name" type="text" value={formData.fullName} onChange={(e) => updateField('fullName', e.target.value)} />

                    <label className="cu-label" htmlFor="cu-designation">Current Designation</label>
                    <input className="cu-input" id="cu-designation" type="text" value={formData.designation} onChange={(e) => updateField('designation', e.target.value)} />

                    <label className="cu-label" htmlFor="cu-org">Organization Name</label>
                    <input className="cu-input" id="cu-org" type="text" value={formData.organization} onChange={(e) => updateField('organization', e.target.value)} />

                    <label className="cu-label" htmlFor="cu-email">Official Email Address</label>
                    <input className="cu-input" id="cu-email" type="email" value={formData.email} onChange={(e) => updateField('email', e.target.value)} />

                    <label className="cu-label" htmlFor="cu-phone">Phone Number (with country code)</label>
                    <div className="cu-phone-row">
                      <select className="cu-code" aria-label="Country code" value={formData.countryCode} onChange={(e) => updateField('countryCode', e.target.value)}>
                        <option>+91</option>
                        <option>+1</option>
                        <option>+44</option>
                        <option>+61</option>
                      </select>
                      <input className="cu-input" id="cu-phone" type="tel" value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} />
                    </div>

                    <label className="cu-label" htmlFor="cu-linkedin">LinkedIn Profile URL</label>
                    <input className="cu-input" id="cu-linkedin" type="url" value={formData.linkedin} onChange={(e) => updateField('linkedin', e.target.value)} placeholder="https://linkedin.com/in/your-profile" />

                    <label className="cu-label" htmlFor="cu-message">Message</label>
                    <textarea className="cu-textarea" id="cu-message" value={formData.message} onChange={(e) => updateField('message', e.target.value)} placeholder="Your message here..." rows={4} />
                  </>
                )}

                {activeStep === 2 && (
                  <>
                    <label className="cu-label" htmlFor="cu-experience">Years of Experience in a Leadership Role</label>
                    <input className="cu-input" id="cu-experience" type="text" value={formData.experience} onChange={(e) => updateField('experience', e.target.value)} />

                    <label className="cu-label" htmlFor="cu-industry">Primary Industry</label>
                    <input className="cu-input" id="cu-industry" type="text" value={formData.industry} onChange={(e) => updateField('industry', e.target.value)} />

                    <label className="cu-label" htmlFor="cu-achievements">Key Achievements or Career Milestones</label>
                    <textarea className="cu-textarea" id="cu-achievements" value={formData.achievements} onChange={(e) => updateField('achievements', e.target.value)} />
                  </>
                )}

                {activeStep === 3 && (
                  <>
                    <label className="cu-label" htmlFor="cu-motivation">Why are you interested in joining the CIO Sherpa Council?</label>
                    <textarea className="cu-textarea cu-textarea--tall" id="cu-motivation" value={formData.motivation} onChange={(e) => updateField('motivation', e.target.value)} />
                  </>
                )}

                {activeStep === 4 && (
                  <>
                    <label className="cu-label">How would you prefer to engage with the community?</label>
                    <p className="cu-helper">(Select all that apply)</p>
                    <div className="cu-checklist">
                      {['Virtual Roundtables', 'In-Person Summits', 'Mentorship Programs', 'Policy Advocacy Groups'].map((option) => (
                        <label key={option} className="cu-checkitem">
                          <input
                            type="checkbox"
                            checked={formData.engagementPreferences.includes(option)}
                            onChange={() => toggleEngagementPreference(option)}
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </>
                )}

                <div className="cu-form-footer">
                  {activeStep > 1 && (
                    <button className="cu-prev-btn" type="button" onClick={goPrevious}>Previous</button>
                  )}
                  <button className="cu-next-btn" type="submit">
                    {activeStep === 4 ? 'Submit Application' : 'Next'}
                  </button>
                </div>
                {submitted && <p className="cu-success">Application submitted successfully.</p>}
              </form>
            </section>

            <aside className="cu-right-col">
              <section className="cu-contact-card" aria-label="Contact information">
                <h3 className="cu-contact-title">Contact Information</h3>

                <div className="cu-contact-item">
                  <div className="cu-contact-icon cu-contact-icon--blue" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="cu-contact-label">Headquarters</h4>
                    <p className="cu-contact-text">
                      Registered Office Skillzza,WeWork India,Chromium, CTS No. 106/1–5 Jogeshwari–Vikhroli Link Road, Milind Nagar, Powai, Mumbai – 400076
                    </p>
                  </div>
                </div>

                <div className="cu-contact-item">
                  <div className="cu-contact-icon cu-contact-icon--green" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.1 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="cu-contact-label">Phone</h4>
                    <p className="cu-contact-text">9136961978</p>
                  </div>
                </div>

                <div className="cu-contact-item">
                  <div className="cu-contact-icon cu-contact-icon--green" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="cu-contact-label">Email</h4>
                    <p className="cu-contact-text">contact@skillzza.com</p>
                  </div>
                </div>
              </section>
            </aside>
          </div>
        </div>
      </section>

      <style>{`
        .cu-flow-wrap {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #5a0b14 0%, #7d0f1a 48%, #8f1320 100%);
          padding: 40px 24px 60px;
        }

        .cu-flow-bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(8px);
          opacity: 0.28;
          pointer-events: none;
          animation: cuOrbFloat 10s ease-in-out infinite;
        }

        .cu-flow-bg-orb--one {
          width: 220px;
          height: 220px;
          background: radial-gradient(circle at 30% 30%, #ffb27a, transparent 70%);
          top: -70px;
          right: 12%;
        }

        .cu-flow-bg-orb--two {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle at 60% 40%, #ff8ea1, transparent 70%);
          bottom: -120px;
          left: 6%;
          animation-delay: 1.4s;
        }

        .cu-flow-inner {
          position: relative;
          z-index: 1;
          max-width: 1240px;
          margin: 0 auto;
        }

        .cu-flow-title {
          margin: 0 0 20px;
          text-align: center;
          color: #f8fafc;
          font-size: clamp(34px, 4.8vw, 52px);
          font-weight: 800;
          letter-spacing: -0.02em;
          animation: cuFadeUp 0.65s ease both;
        }

        .cu-flow-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.9fr;
          gap: 22px;
          align-items: stretch;
        }

        .cu-steps {
          position: relative;
          padding: 0;
          animation: cuFadeUp 0.75s 0.08s ease both;
        }

        .cu-steps--top {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
          margin-bottom: 34px;
        }

        .cu-right-col {
          display: flex;
          flex-direction: column;
        }

        .cu-step-row {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 72px;
          padding: 0 6px;
        }

        .cu-step-connector {
          flex: 1;
          min-width: 24px;
          height: 2px;
          margin-left: 6px;
          background: linear-gradient(90deg, rgba(148, 163, 184, 0.45), rgba(148, 163, 184, 0.16));
          border-radius: 999px;
        }

        .cu-step-dot {
          position: relative;
          z-index: 2;
          width: 46px;
          height: 46px;
          min-width: 46px;
          min-height: 46px;
          aspect-ratio: 1 / 1;
          flex: 0 0 46px;
          flex-shrink: 0;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.28);
          color: rgba(241, 245, 249, 0.55);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          line-height: 1;
          font-weight: 600;
          background: transparent;
          transition: all 0.28s ease;
        }

        .cu-step-dot.is-active {
          border-color: rgba(255, 196, 128, 0.95);
          background: linear-gradient(135deg, #f59e0b, #f97316);
          color: #ffffff;
          box-shadow: 0 0 0 10px rgba(245, 158, 11, 0.16), 0 10px 24px rgba(249, 115, 22, 0.28);
          animation: cuPulse 2.4s ease-in-out infinite;
        }

        .cu-step-dot.is-past {
          border-color: rgba(125, 211, 252, 0.9);
          color: #bae6fd;
        }

        .cu-step-text {
          color: rgba(241, 245, 249, 0.45);
          font-size: 28px;
          font-weight: 700;
          line-height: 1.1;
          transition: color 0.25s ease;
        }

        .cu-step-text.is-active {
          color: #ffffff;
        }

        .cu-form-card {
          border-radius: 12px;
          background: #f8fafc;
          padding: 34px 38px 30px;
          box-shadow: 0 24px 60px rgba(2, 6, 23, 0.28);
          animation: cuFadeUp 0.8s 0.12s ease both;
        }

        .cu-contact-card {
          border-radius: 18px;
          background: #f8fafc;
          padding: 30px 26px;
          box-shadow: 0 10px 28px rgba(2, 6, 23, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.7);
          animation: cuFadeUp 0.82s 0.16s ease both;
          align-self: stretch;
        }

        .cu-contact-title {
          margin: 0 0 20px;
          color: #0f172a;
          font-size: 24px;
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -0.01em;
        }

        .cu-contact-item {
          display: grid;
          grid-template-columns: 50px 1fr;
          gap: 14px;
          align-items: start;
          margin-bottom: 18px;
        }

        .cu-contact-item:last-child {
          margin-bottom: 0;
        }

        .cu-contact-icon {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #eef2f7;
        }

        .cu-contact-icon--blue {
          color: #2563eb;
        }

        .cu-contact-icon--green {
          color: #16a34a;
        }

        .cu-contact-label {
          margin: 0 0 6px;
          color: #0f172a;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.2;
        }

        .cu-contact-text {
          margin: 0;
          color: #334155;
          font-size: 16px;
          line-height: 1.45;
        }

        .cu-form-title {
          margin: 0 0 22px;
          font-size: 24px;
          line-height: 1.2;
          color: #0f172a;
          font-weight: 800;
        }

        .cu-form {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .cu-helper {
          margin: 2px 0 0;
          font-size: 14px;
          color: #475569;
          font-weight: 600;
        }

        .cu-label {
          font-size: 15px;
          font-weight: 700;
          color: #334155;
          margin-top: 8px;
        }

        .cu-input,
        .cu-code {
          width: 100%;
          height: 48px;
          border: 1px solid #d5dbe5;
          border-radius: 8px;
          padding: 0 14px;
          font-size: 16px;
          color: #0f172a;
          background: #ffffff;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }

        .cu-input::placeholder {
          color: #9ca3af;
        }

        .cu-input:focus,
        .cu-textarea:focus,
        .cu-code:focus {
          border-color: #f97316;
          box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.2);
          transform: translateY(-1px);
        }

        .cu-textarea {
          width: 100%;
          min-height: 120px;
          border: 1px solid #d5dbe5;
          border-radius: 8px;
          padding: 12px 14px;
          font-size: 16px;
          color: #0f172a;
          background: #ffffff;
          outline: none;
          resize: vertical;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }

        .cu-textarea--tall {
          min-height: 220px;
        }

        .cu-checklist {
          display: grid;
          gap: 16px;
          margin-top: 8px;
        }

        .cu-checkitem {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #334155;
          font-size: 18px;
          font-weight: 500;
        }

        .cu-checkitem input {
          width: 20px;
          height: 20px;
          accent-color: #f97316;
          cursor: pointer;
        }

        .cu-phone-row {
          display: grid;
          grid-template-columns: 112px 1fr;
          gap: 10px;
        }

        .cu-code {
          padding-right: 8px;
          font-weight: 600;
        }

        .cu-form-footer {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin-top: 22px;
          padding-top: 18px;
          border-top: 1px solid #e2e8f0;
        }

        .cu-prev-btn {
          min-width: 120px;
          height: 52px;
          border: none;
          border-radius: 8px;
          background: #d1d5db;
          color: #475569;
          font-size: 21px;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease, filter 0.2s ease;
        }

        .cu-prev-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.02);
        }

        .cu-next-btn {
          min-width: 120px;
          height: 52px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(135deg, #f97316, #ef4444);
          color: #ffffff;
          font-size: 21px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 10px 22px rgba(239, 68, 68, 0.28);
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
        }

        .cu-next-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 26px rgba(239, 68, 68, 0.34);
          filter: brightness(1.03);
        }

        .cu-next-btn:active {
          transform: translateY(0);
        }

        .cu-success {
          margin: 12px 2px 0;
          color: #065f46;
          font-size: 14px;
          font-weight: 600;
        }

        @keyframes cuFadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cuPulse {
          0%,
          100% {
            box-shadow: 0 0 0 10px rgba(245, 158, 11, 0.16), 0 10px 24px rgba(249, 115, 22, 0.28);
          }
          50% {
            box-shadow: 0 0 0 14px rgba(245, 158, 11, 0.12), 0 12px 28px rgba(249, 115, 22, 0.3);
          }
        }

        @keyframes cuOrbFloat {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(16px, -12px);
          }
        }

        @media (max-width: 1160px) {
          .cu-flow-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .cu-steps--top {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }

          .cu-contact-card {
            margin-top: 0;
          }

          .cu-contact-title {
            font-size: 22px;
          }

          .cu-step-connector {
            display: none;
          }
        }

        @media (max-width: 780px) {
          .cu-flow-wrap {
            padding: 32px 16px 48px;
          }

          .cu-flow-title {
            margin-bottom: 16px;
          }

          .cu-steps--top {
            grid-template-columns: 1fr;
          }

          .cu-step-row {
            min-height: 62px;
          }

          .cu-step-text {
            font-size: 24px;
          }

          .cu-form-card {
            padding: 24px 18px 22px;
          }

          .cu-form-title {
            font-size: 22px;
          }

          .cu-contact-card {
            padding: 24px 18px;
          }

          .cu-contact-title {
            font-size: 22px;
          }

          .cu-contact-item {
            grid-template-columns: 42px 1fr;
            gap: 10px;
          }

          .cu-contact-icon {
            width: 42px;
            height: 42px;
          }

          .cu-contact-label {
            font-size: 16px;
          }

          .cu-contact-text {
            font-size: 14px;
          }

          .cu-label {
            font-size: 14px;
          }

          .cu-helper {
            font-size: 13px;
          }

          .cu-input,
          .cu-textarea,
          .cu-code {
            height: 48px;
            font-size: 16px;
          }

          .cu-textarea,
          .cu-textarea--tall {
            min-height: 148px;
          }

          .cu-checkitem {
            font-size: 16px;
          }

          .cu-prev-btn,
          .cu-next-btn {
            height: 46px;
            font-size: 18px;
          }

          .cu-next-btn {
            min-width: 108px;
          }

          .cu-prev-btn {
            min-width: 108px;
          }
        }
      `}</style>
    </main>
  )
}

export default ContactUs
