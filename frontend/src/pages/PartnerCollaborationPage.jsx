import React, { useEffect, useRef } from 'react'

function PartnerCollaborationPage() {
  const pageRef = useRef(null)
  const corporateSectionRef = useRef(null)
  const governmentSectionRef = useRef(null)
  const educationSectionRef = useRef(null)

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleCardKeyDown = (event, sectionRef) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      scrollToSection(sectionRef)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('collab-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const els = pageRef.current?.querySelectorAll('.collab-animate')
    els?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        /* ===== ANIMATION KEYFRAMES ===== */
        @keyframes collabFadeUp {
          from { opacity: 0; transform: translateY(48px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes collabSlideLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes collabSlideRight {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes collabScaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }

        .collab-animate {
          opacity: 0;
        }
        .collab-animate.collab-visible {
          opacity: 1;
        }
        .collab-animate.collab-visible.anim-fade-up {
          animation: collabFadeUp 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .collab-animate.collab-visible.anim-slide-left {
          animation: collabSlideLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .collab-animate.collab-visible.anim-slide-right {
          animation: collabSlideRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .collab-animate.collab-visible.anim-scale-in {
          animation: collabScaleIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .anim-delay-1 { animation-delay: 0.1s !important; }
        .anim-delay-2 { animation-delay: 0.2s !important; }
        .anim-delay-3 { animation-delay: 0.3s !important; }
        .anim-delay-4 { animation-delay: 0.4s !important; }

        /* ===== BASE ===== */
        .collab-page {
          width: 100%;
          background: #f5f5f5;
          font-family: 'Poppins', sans-serif;
          overflow-x: hidden;
        }

        /* ===== HERO ===== */
        .collab-hero {
          position: relative;
          width: 100%;
          min-height: clamp(340px, 38vw, 500px);
          background-image: url('/Company/collaboration/heroSectionImage.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          overflow: hidden;
        }

        .collab-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(7, 7, 12, 0.88) 0%, rgba(7, 7, 12, 0.64) 32%, rgba(7, 7, 12, 0.30) 58%, rgba(7, 7, 12, 0.10) 100%);
        }

        .collab-hero__inner {
          position: relative;
          z-index: 1;
          height: 100%;
          min-height: clamp(340px, 38vw, 500px);
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          padding: clamp(28px, 5vw, 70px) clamp(22px, 6vw, 72px);
        }

        .collab-hero__title {
          margin: 0;
          font-size: clamp(38px, 4.5vw, 56px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.01em;
          color: #ffffff;
          max-width: 520px;
          text-shadow: 0 4px 24px rgba(0,0,0,0.35);
        }

        .collab-hero__title-line {
          display: block;
          white-space: nowrap;
        }

        .collab-hero__title-highlight {
          color: #f3ad3a;
        }

        /* ===== STRATEGIC PARTNERSHIPS GRID ===== */
        .collab-partners {
          background: linear-gradient(180deg, #e8e8e8 0%, #f0f0f0 100%);
          padding: clamp(50px, 7vw, 80px) clamp(18px, 4vw, 34px) clamp(60px, 8vw, 88px);
        }

        .collab-partners__heading {
          margin: 0 auto 20px;
          font-size: clamp(26px, 2.4vw, 38px);
          font-weight: 700;
          line-height: 1.15;
          color: #0f172a;
          text-align: center;
        }

        .collab-partners__intro {
          max-width: 1060px;
          margin: 0 auto clamp(30px, 4vw, 44px);
          font-size: clamp(15px, 1.5vw, 20px);
          line-height: 1.55;
          color: #475569;
          text-align: center;
        }

        .collab-partners__grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
        }

        .collab-partners__card {
          background: #ffffff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 8px 28px rgba(15, 23, 42, 0.10);
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;
          cursor: pointer;
        }

        .collab-partners__card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 48px rgba(15, 23, 42, 0.18);
        }

        .collab-partners__card-image {
          width: 100%;
          height: 210px;
          object-fit: cover;
          display: block;
          transition: transform 0.45s ease;
        }

        .collab-partners__card:hover .collab-partners__card-image {
          transform: scale(1.05);
        }

        .collab-partners__card-title {
          min-height: 80px;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px 14px;
          font-size: clamp(22px, 1.8vw, 32px);
          line-height: 1.2;
          font-weight: 600;
          color: #0f172a;
        }

        /* ===== SECTION BANNERS ===== */
        .section-banner {
          position: relative;
          width: 100%;
          min-height: clamp(280px, 30vw, 400px);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .section-banner::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(7, 7, 12, 0.84) 0%, rgba(7, 7, 12, 0.72) 40%, rgba(7, 7, 12, 0.60) 100%);
        }

        .section-banner--corporate {
          background-image: url('/Company/collaboration/corporate_banner.png');
        }

        .section-banner--govt {
          background-image: url('/Company/collaboration/government_banner.png');
        }

        .section-banner--education {
          background-image: url('/Company/collaboration/education_banner.png');
        }

        .section-banner__content {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 0 auto;
          padding: clamp(44px, 6vw, 72px) clamp(22px, 6vw, 72px);
          display: flex;
          flex-direction: column;
          gap: 16px;
          text-align: center;
          align-items: center;
        }

        .section-banner__title {
          margin: 0;
          font-size: clamp(32px, 3.4vw, 50px);
          font-weight: 800;
          color: #f3ad3a;
          text-shadow: 0 3px 16px rgba(0, 0, 0, 0.5);
          letter-spacing: -0.01em;
        }

        .section-banner__subtitle {
          margin: 0;
          font-size: clamp(19px, 2vw, 28px);
          font-weight: 500;
          color: #ffffff;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        }

        .section-banner__description {
          margin: 4px 0 0;
          font-size: clamp(15px, 1.4vw, 18px);
          line-height: 1.65;
          color: #e2e8f0;
          text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
          max-width: 750px;
        }

        /* ===== DETAIL SECTION — CONTENT LEFT, IMAGE RIGHT ===== */
        .detail-section {
          background: #f5f5f5;
          padding: clamp(50px, 6vw, 80px) clamp(18px, 6vw, 70px);
        }

        .detail-section__inner {
          max-width: 1140px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: clamp(36px, 5vw, 72px);
        }

        .detail-section__inner--reverse {
          flex-direction: row-reverse;
        }

        .detail-section__content {
          flex: 1 1 55%;
          min-width: 0;
        }

        .detail-section__heading {
          margin: 0 0 22px;
          font-size: clamp(24px, 2.3vw, 34px);
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
        }

        .detail-section__block + .detail-section__block {
          margin-top: 20px;
        }

        .detail-section__subheading {
          margin: 0 0 8px;
          font-size: clamp(16px, 1.7vw, 22px);
          font-weight: 600;
          color: #1e293b;
        }

        .detail-section__list {
          margin: 0;
          padding-left: 20px;
          font-size: clamp(14px, 1.25vw, 16.5px);
          line-height: 1.55;
          color: #334155;
        }

        .detail-section__list li + li {
          margin-top: 6px;
        }

        .detail-section__figure {
          flex: 0 0 auto;
          width: clamp(280px, 32vw, 420px);
        }

        .detail-section__image {
          width: 100%;
          height: auto;
          max-height: 460px;
          border-radius: 0;
          object-fit: cover;
          display: block;
          box-shadow: none;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .detail-section__image:hover {
          transform: scale(1.02);
        }

        .detail-section__image--plain {
          border-radius: 0;
          box-shadow: none;
        }

        .detail-section__image--plain:hover {
          box-shadow: none;
          transform: none;
        }

        /* ===== CARDS SECTION ===== */
        .cards-section {
          background: linear-gradient(180deg, #eaeaea 0%, #f2f2f2 100%);
          padding: clamp(50px, 6vw, 88px) clamp(18px, 6vw, 74px) clamp(60px, 8vw, 100px);
        }

        .cards-section__inner {
          max-width: 1140px;
          margin: 0 auto;
          text-align: center;
        }

        .cards-section__heading {
          margin: 0 0 clamp(28px, 4vw, 44px);
          font-size: clamp(28px, 2.6vw, 40px);
          font-weight: 700;
          color: #0f172a;
        }

        .cards-section__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(18px, 2.6vw, 26px);
        }

        .cards-section__card {
          position: relative;
          background: linear-gradient(145deg, #ffffff 0%, #fdf6e7 100%);
          border-radius: 20px;
          padding: 30px 24px;
          box-shadow: 0 10px 32px rgba(15, 23, 42, 0.09);
          overflow: hidden;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;
        }

        .cards-section__card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top right, rgba(243, 173, 58, 0.35), transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .cards-section__card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 52px rgba(15, 23, 42, 0.16);
        }

        .cards-section__card:hover::before {
          opacity: 1;
        }

        .cards-section__card-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f3ad3a, #e8942d);
          color: #ffffff;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 14px;
          box-shadow: 0 4px 12px rgba(243, 173, 58, 0.35);
        }

        .cards-section__card-title {
          margin: 0 0 10px;
          font-size: clamp(17px, 1.5vw, 21px);
          font-weight: 600;
          color: #0f172a;
        }

        .cards-section__card-text {
          margin: 0;
          font-size: clamp(13.5px, 1.15vw, 15.5px);
          line-height: 1.55;
          color: #475569;
        }

        .cards-section__cta {
          margin: clamp(30px, 4vw, 48px) auto 0;
          font-size: clamp(17px, 1.7vw, 22px);
          font-weight: 500;
          color: #1e293b;
          font-style: italic;
        }

        /* ===== CTA SECTION ===== */
        .collab-cta {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          padding: clamp(60px, 8vw, 110px) clamp(22px, 6vw, 72px);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .collab-cta::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 30% 40%, rgba(243, 173, 58, 0.06) 0%, transparent 50%);
          pointer-events: none;
        }

        .collab-cta__inner {
          position: relative;
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
        }

        .collab-cta__title {
          margin: 0;
          font-size: clamp(32px, 3.4vw, 50px);
          font-weight: 800;
          color: #f3ad3a;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }

        .collab-cta__text {
          margin: 0;
          font-size: clamp(16px, 1.6vw, 21px);
          line-height: 1.65;
          color: #cbd5e1;
        }

        .collab-cta__tagline {
          margin: 6px 0 0;
          font-size: clamp(19px, 2vw, 28px);
          font-weight: 600;
          color: #ffffff;
          font-style: italic;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1100px) {
          .cards-section__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 1200px) {
          .collab-partners__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .detail-section__inner,
          .detail-section__inner--reverse {
            flex-direction: column !important;
            align-items: stretch;
          }

          .detail-section__figure {
            width: 100%;
          }

          .detail-section__image {
            width: 100%;
            max-height: 340px;
            border-radius: 0;
          }
        }

        @media (max-width: 768px) {
          .collab-hero {
            min-height: 300px;
          }

          .collab-hero__inner {
            min-height: 300px;
            padding: 28px 24px;
          }

          .collab-hero__title {
            font-size: clamp(24px, 7.5vw, 38px);
            max-width: 280px;
          }

          .collab-partners {
            padding: 36px 16px 48px;
          }

          .collab-partners__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
          }

          .collab-partners__card-image {
            height: 150px;
          }

          .collab-partners__card-title {
            min-height: 64px;
            font-size: clamp(17px, 4.6vw, 22px);
            padding: 14px 10px;
          }

          .cards-section__grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
        }

        @media (max-width: 520px) {
          .collab-partners__grid {
            grid-template-columns: 1fr;
          }

          .cards-section__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <main className="collab-page" ref={pageRef}>
        {/* ===== HERO ===== */}
        <section className="collab-hero">
          <div className="collab-hero__inner">
            <h1 className="collab-hero__title collab-animate anim-slide-left collab-visible">
              <span className="collab-hero__title-line">
                <span className="collab-hero__title-highlight">Empowering</span> Futures
              </span>
              <span className="collab-hero__title-line">Together</span>
            </h1>
          </div>
        </section>

        {/* ===== STRATEGIC PARTNERSHIPS GRID ===== */}
        <section className="collab-partners">
          <h2 className="collab-partners__heading collab-animate anim-fade-up">Strategic Partnerships That Transform Futures</h2>
          <p className="collab-partners__intro collab-animate anim-fade-up anim-delay-1">
            Skillzza forges strategic alliances across sectors to drive meaningful skill development and innovation. Our collaborative approach delivers customized solutions that meet the unique needs of corporates, governments, and educational institutions creating shared value and sustainable impact.
          </p>
          <div className="collab-partners__grid">
            <article
              className="collab-partners__card collab-animate anim-fade-up anim-delay-1"
              role="button"
              tabIndex={0}
              onClick={() => scrollToSection(corporateSectionRef)}
              onKeyDown={(event) => handleCardKeyDown(event, corporateSectionRef)}
            >
              <img className="collab-partners__card-image" src="/Company/collaboration/corporates.jpg" alt="Corporates" />
              <h3 className="collab-partners__card-title">Corporates</h3>
            </article>
            <article
              className="collab-partners__card collab-animate anim-fade-up anim-delay-2"
              role="button"
              tabIndex={0}
              onClick={() => scrollToSection(governmentSectionRef)}
              onKeyDown={(event) => handleCardKeyDown(event, governmentSectionRef)}
            >
              <img className="collab-partners__card-image" src="/Company/collaboration/govtCardImg.jpg" alt="Government" />
              <h3 className="collab-partners__card-title">Government</h3>
            </article>
            <article
              className="collab-partners__card collab-animate anim-fade-up anim-delay-3"
              role="button"
              tabIndex={0}
              onClick={() => scrollToSection(educationSectionRef)}
              onKeyDown={(event) => handleCardKeyDown(event, educationSectionRef)}
            >
              <img className="collab-partners__card-image" src="/Company/collaboration/school_unversity_img.jpeg" alt="Educational institutions" />
              <h3 className="collab-partners__card-title">Educational Institutions</h3>
            </article>
          </div>
        </section>

        {/* ========================================== */}
        {/* ========= CORPORATE PARTNERSHIPS ========= */}
        {/* ========================================== */}

        <section ref={corporateSectionRef} className="section-banner section-banner--corporate">
          <div className="section-banner__content collab-animate anim-fade-up">
            <h3 className="section-banner__title">Corporate Partnerships</h3>
            <h4 className="section-banner__subtitle">Upskill Your Workforce. Empower Innovation.</h4>
            <p className="section-banner__description">
              In today's rapidly evolving business landscape, organizations need agile, skilled talent to stay competitive.
              Skillzza partners with forward-thinking companies to create future-ready upskilling and reskilling programs that align with your strategic vision.
            </p>
          </div>
        </section>

        {/* Why Choose Skillzza — content left, image right */}
        <section className="detail-section">
          <div className="detail-section__inner">
            <div className="detail-section__content collab-animate anim-slide-left">
              <h3 className="detail-section__heading">Why Choose Skillzza as Your Learning Partner?</h3>
              <div className="detail-section__block">
                <h4 className="detail-section__subheading">Tailored Workforce Solutions</h4>
                <ul className="detail-section__list">
                  <li>Custom learning ecosystems designed for your industry's specific challenges</li>
                  <li>Scalable programs that grow with your organization</li>
                  <li>ROI-focused training that delivers measurable results</li>
                </ul>
              </div>
              <div className="detail-section__block">
                <h4 className="detail-section__subheading">Enhanced Employee Experience</h4>
                <ul className="detail-section__list">
                  <li>Cutting-edge skills development that boosts engagement and retention</li>
                  <li>Career progression pathways that attract top talent</li>
                  <li>Performance-driven learning that increases productivity</li>
                </ul>
              </div>
            </div>
            <figure className="detail-section__figure collab-animate anim-slide-right">
              <img
                className="detail-section__image"
                src="/Company/collaboration/for_corporate_only_img1.jpg"
                alt="Corporate leaders collaborating during a learning session"
              />
            </figure>
          </div>
        </section>

        {/* Future-First Partnerships — image left, content right */}
        <section className="detail-section">
          <div className="detail-section__inner detail-section__inner--reverse">
            <div className="detail-section__content collab-animate anim-slide-right">
              <h3 className="detail-section__heading">Future-First Partnerships That Deliver Impact</h3>
              <div className="detail-section__block">
                <h4 className="detail-section__subheading">Future-Focused Curriculum</h4>
                <ul className="detail-section__list">
                  <li>AI, emerging technologies, and digital transformation training</li>
                  <li>Leadership development and soft skills enhancement</li>
                  <li>Sustainability and green skills for responsible business growth</li>
                </ul>
              </div>
              <div className="detail-section__block">
                <h4 className="detail-section__subheading">Meaningful CSR Impact</h4>
                <ul className="detail-section__list">
                  <li>Purpose-driven programs that uplift underserved communities</li>
                  <li>Skills-based social impact initiatives with measurable outcomes</li>
                  <li>Employee volunteer opportunities that build team culture</li>
                </ul>
              </div>
            </div>
            <figure className="detail-section__figure collab-animate anim-slide-left">
              <img
                className="detail-section__image"
                src="/Company/collaboration/corporate%20partnership%20image%202.jpg"
                alt="Professionals collaborating during a corporate partnership workshop"
              />
            </figure>
          </div>
        </section>

        {/* Partnership Models Cards */}
        <section className="cards-section">
          <div className="cards-section__inner">
            <h3 className="cards-section__heading collab-animate anim-fade-up">Partnership Models We Offer</h3>
            <div className="cards-section__grid">
              <article className="cards-section__card collab-animate anim-scale-in anim-delay-1">
                <span className="cards-section__card-number">1</span>
                <h4 className="cards-section__card-title">Custom Learning Academies</h4>
                <p className="cards-section__card-text">End-to-end skill development programs tailored to your workforce.</p>
              </article>
              <article className="cards-section__card collab-animate anim-scale-in anim-delay-2">
                <span className="cards-section__card-number">2</span>
                <h4 className="cards-section__card-title">Innovation Challenges</h4>
                <p className="cards-section__card-text">Hackathons and bootcamps to discover and nurture internal talent.</p>
              </article>
              <article className="cards-section__card collab-animate anim-scale-in anim-delay-3">
                <span className="cards-section__card-number">3</span>
                <h4 className="cards-section__card-title">CSR Skill Initiatives</h4>
                <p className="cards-section__card-text">Community-focused programs that create social value while engaging employees.</p>
              </article>
              <article className="cards-section__card collab-animate anim-scale-in anim-delay-4">
                <span className="cards-section__card-number">4</span>
                <h4 className="cards-section__card-title">Skillzza Xperience Platform</h4>
                <p className="cards-section__card-text">Immersive virtual simulations for hands-on learning and assessment.</p>
              </article>
            </div>
            <p className="cards-section__cta collab-animate anim-fade-up">Ready to build a workforce that's skilled for today and prepared for tomorrow?</p>
          </div>
        </section>

        {/* ========================================== */}
        {/* ======= GOVERNMENT PARTNERSHIPS ========= */}
        {/* ========================================== */}

        <section ref={governmentSectionRef} className="section-banner section-banner--govt">
          <div className="section-banner__content collab-animate anim-fade-up">
            <h3 className="section-banner__title">Government Partnerships</h3>
            <h4 className="section-banner__subtitle">Building a Skilled Nation Together</h4>
            <p className="section-banner__description">
              Skillzza collaborates with government bodies at every level to design scalable, sustainable skill
              development programs that bridge workforce gaps, accelerate economic growth, and promote social equity
              across communities.
            </p>
          </div>
        </section>

        {/* How We Empower Governments — content left, image right */}
        <section className="detail-section">
          <div className="detail-section__inner">
            <div className="detail-section__content collab-animate anim-slide-left">
              <h3 className="detail-section__heading">How We Empower Governments</h3>
              <div className="detail-section__block">
                <h4 className="detail-section__subheading">Policy-Integrated Programs</h4>
                <ul className="detail-section__list">
                  <li>Co-develop initiatives aligned with national development goals and UN SDGs</li>
                  <li>Evidence-based program design with clear success metrics</li>
                  <li>Flexible implementation models adapted to local contexts</li>
                </ul>
              </div>
              <div className="detail-section__block">
                <h4 className="detail-section__subheading">Employment-Ready Training</h4>
                <ul className="detail-section__list">
                  <li>Industry-specific upskilling in high-demand sectors (AI, EV, renewable energy, healthcare)</li>
                  <li>Job placement partnerships with leading employers</li>
                  <li>Entrepreneurship development for economic self-reliance</li>
                </ul>
              </div>
            </div>
            <figure className="detail-section__figure collab-animate anim-slide-right">
              <img
                className="detail-section__image"
                src="/Company/collaboration/howWeSupportGovt_image1.jpg"
                alt="Government partnership collaboration for skill development"
              />
            </figure>
          </div>
        </section>

        {/* Public-Private Partnerships — image left, content right */}
        <section className="detail-section">
          <div className="detail-section__inner detail-section__inner--reverse">
            <div className="detail-section__content collab-animate anim-slide-right">
              <div className="detail-section__block">
                <h4 className="detail-section__subheading">Public-Private Partnerships</h4>
                <ul className="detail-section__list">
                  <li>Collaborative funding and implementation models</li>
                  <li>Industry expertise combined with public reach</li>
                  <li>Sustainable programs with long-term impact</li>
                </ul>
              </div>
              <div className="detail-section__block">
                <h4 className="detail-section__subheading">Technology-Enabled Delivery</h4>
                <ul className="detail-section__list">
                  <li>Digital-first platforms for accessible, scalable learning</li>
                  <li>Real-time progress tracking and impact measurement</li>
                  <li>Mobile-friendly solutions for diverse populations</li>
                </ul>
              </div>
            </div>
            <figure className="detail-section__figure collab-animate anim-slide-left">
              <img
                className="detail-section__image"
                src="/Company/collaboration/KeyGovtCollaborationAreas_image2.jpg"
                alt="Key government collaboration areas"
              />
            </figure>
          </div>
        </section>

        {/* Priority Focus Areas — content left, image right */}
        <section className="detail-section">
          <div className="detail-section__inner">
            <div className="detail-section__content collab-animate anim-slide-left">
              <h3 className="detail-section__heading">Priority Focus Areas</h3>
              <div className="detail-section__block">
                <h4 className="detail-section__subheading">Youth Empowerment</h4>
                <ul className="detail-section__list">
                  <li>Job-ready skills for emerging workforce</li>
                </ul>
              </div>
              <div className="detail-section__block">
                <h4 className="detail-section__subheading">Women's Economic Participation</h4>
                <ul className="detail-section__list">
                  <li>Gender-inclusive skill programs</li>
                </ul>
              </div>
              <div className="detail-section__block">
                <h4 className="detail-section__subheading">Rural Development</h4>
                <ul className="detail-section__list">
                  <li>Bringing opportunities to underserved regions</li>
                </ul>
              </div>
              <div className="detail-section__block">
                <h4 className="detail-section__subheading">Green Transition</h4>
                <ul className="detail-section__list">
                  <li>Skills for sustainable economy jobs</li>
                </ul>
              </div>
              <div className="detail-section__block">
                <h4 className="detail-section__subheading">Digital Inclusion</h4>
                <ul className="detail-section__list">
                  <li>Bridging the digital divide through skill development</li>
                </ul>
              </div>
            </div>
            <figure className="detail-section__figure collab-animate anim-slide-right">
              <img
                className="detail-section__image"
                src="/Company/collaboration/govImageDiscuss.jpg"
                alt="Priority focus areas for government partnerships"
              />
            </figure>
          </div>
        </section>

        {/* Our Proven Engagement Process Cards */}
        <section className="cards-section">
          <div className="cards-section__inner">
            <h3 className="cards-section__heading collab-animate anim-fade-up">Our Proven Engagement Process</h3>
            <div className="cards-section__grid">
              <article className="cards-section__card collab-animate anim-scale-in anim-delay-1">
                <span className="cards-section__card-number">1</span>
                <h4 className="cards-section__card-title">Vision Alignment</h4>
                <p className="cards-section__card-text">Understanding your development priorities and constraints</p>
              </article>
              <article className="cards-section__card collab-animate anim-scale-in anim-delay-2">
                <span className="cards-section__card-number">2</span>
                <h4 className="cards-section__card-title">Strategic Co-Creation</h4>
                <p className="cards-section__card-text">Designing impactful, evidence-based programs</p>
              </article>
              <article className="cards-section__card collab-animate anim-scale-in anim-delay-3">
                <span className="cards-section__card-number">3</span>
                <h4 className="cards-section__card-title">Technology-Enabled Delivery</h4>
                <p className="cards-section__card-text">Implementing with digital tools for scale and efficiency</p>
              </article>
              <article className="cards-section__card collab-animate anim-scale-in anim-delay-4">
                <span className="cards-section__card-number">4</span>
                <h4 className="cards-section__card-title">Impact Measurement</h4>
                <p className="cards-section__card-text">Continuous monitoring and evaluation for sustainable success</p>
              </article>
            </div>
            <p className="cards-section__cta collab-animate anim-fade-up">Together, let's build a skilled and future-ready nation.</p>
          </div>
        </section>

        {/* ========================================== */}
        {/* ====== EDUCATIONAL PARTNERSHIPS ========== */}
        {/* ========================================== */}

        <section ref={educationSectionRef} className="section-banner section-banner--education">
          <div className="section-banner__content collab-animate anim-fade-up">
            <h3 className="section-banner__title">Educational Partnerships</h3>
            <h4 className="section-banner__subtitle">Empowering Students for Tomorrow's World</h4>
            <p className="section-banner__description">
              Skillzza partners with schools and educational institutions to equip young minds with
              essential 21st-century skills. Our programs go beyond traditional academics to inspire
              innovation, creativity, and leadership—preparing students to become tomorrow's
              changemakers.
            </p>
          </div>
        </section>

        {/* Why Educational Institutions Choose Skillzza — image left, content right */}
        <section className="detail-section">
          <div className="detail-section__inner detail-section__inner--reverse">
            <div className="detail-section__content collab-animate anim-slide-right">
              <h3 className="detail-section__heading">Why Educational Institutions Choose Skillzza</h3>
              <div className="detail-section__block">
                <h4 className="detail-section__subheading">Holistic Skill Development</h4>
                <ul className="detail-section__list">
                  <li>Critical thinking, communication, collaboration, and creativity</li>
                  <li>Social-emotional learning integrated with technical skills</li>
                  <li>Growth mindset and resilience building</li>
                </ul>
              </div>
              <div className="detail-section__block">
                <h4 className="detail-section__subheading">Future-Ready Learning</h4>
                <ul className="detail-section__list">
                  <li>Hands-on exposure to AI, robotics, and emerging technologies</li>
                  <li>Sustainability education and climate action projects</li>
                  <li>Design thinking and entrepreneurship workshops</li>
                </ul>
              </div>
              <div className="detail-section__block">
                <h4 className="detail-section__subheading">Real-World Application</h4>
                <ul className="detail-section__list">
                  <li>Project-based learning with industry connections</li>
                  <li>Hackathons and innovation challenges</li>
                  <li>Community problem-solving initiatives</li>
                </ul>
              </div>
            </div>
            <figure className="detail-section__figure collab-animate anim-slide-left">
              <img
                className="detail-section__image"
                style={{ objectFit: 'contain', maxHeight: 'none' }}
                src="/Company/collaboration/education%20image%203.png"
                alt="Educational partnerships skill development"
              />
            </figure>
          </div>
        </section>

        {/* Career & Educator Excellence — content left, image right */}
        <section className="detail-section">
          <div className="detail-section__inner">
            <div className="detail-section__content collab-animate anim-slide-left">
              <div className="detail-section__block">
                <h4 className="detail-section__subheading">Career & College Preparation</h4>
                <ul className="detail-section__list">
                  <li>Industry-aligned curriculum development</li>
                  <li>Higher education pathway guidance</li>
                  <li>Professional skill development and networking</li>
                </ul>
              </div>
              <div className="detail-section__block">
                <h4 className="detail-section__subheading">Educator Excellence</h4>
                <ul className="detail-section__list">
                  <li>Teacher training in modern pedagogies and digital tools</li>
                  <li>Professional development workshops</li>
                  <li>Collaborative curriculum design support</li>
                </ul>
              </div>
            </div>
            <figure className="detail-section__figure collab-animate anim-slide-right">
              <img
                className="detail-section__image"
                src="/Company/collaboration/education%20image2.jpeg"
                alt="Educator excellence and career preparation"
              />
            </figure>
          </div>
        </section>

        {/* Comprehensive Program Offerings — image left, content right */}
        <section className="detail-section">
          <div className="detail-section__inner detail-section__inner--reverse">
            <div className="detail-section__content collab-animate anim-slide-right">
              <h3 className="detail-section__heading">Comprehensive Program Offerings</h3>
              <div className="detail-section__block">
                <ul className="detail-section__list">
                  <li><strong>Skill Development Bootcamps</strong> Intensive programs in technology, creativity, and leadership</li>
                  <li><strong>STEM Innovation Labs</strong> Hands-on science, technology, engineering, and math experiences</li>
                  <li><strong>Sustainability Champions</strong> Environmental leadership and climate action programs</li>
                  <li><strong>Creative Arts Integration</strong> Design thinking, media, and artistic expression workshops</li>
                  <li><strong>Career Exploration:</strong> Industry mentorship and professional skill development</li>
                  <li><strong>Teacher Excellence Programs</strong> Educator training and curriculum enhancement</li>
                </ul>
              </div>
            </div>
            <figure className="detail-section__figure collab-animate anim-slide-left">
              <img
                className="detail-section__image detail-section__image--plain"
                src="/Company/collaboration/education%20Image1.png"
                alt="Comprehensive educational program offerings"
              />
            </figure>
          </div>
        </section>

        {/* Our Impact Commitment Cards */}
        <section className="cards-section">
          <div className="cards-section__inner">
            <h3 className="cards-section__heading collab-animate anim-fade-up">Our Impact Commitment</h3>
            <div className="cards-section__grid">
              <article className="cards-section__card collab-animate anim-scale-in anim-delay-1">
                <span className="cards-section__card-number">1</span>
                <h4 className="cards-section__card-title">Future Workforce Readiness</h4>
                <p className="cards-section__card-text">Skills and mindset for tomorrow's job market</p>
              </article>
              <article className="cards-section__card collab-animate anim-scale-in anim-delay-2">
                <span className="cards-section__card-number">2</span>
                <h4 className="cards-section__card-title">Inclusive Access</h4>
                <p className="cards-section__card-text">Reaching underserved and diverse student communities</p>
              </article>
              <article className="cards-section__card collab-animate anim-scale-in anim-delay-3">
                <span className="cards-section__card-number">3</span>
                <h4 className="cards-section__card-title">Sustainability Leadership</h4>
                <p className="cards-section__card-text">Inspiring climate action and environmental stewardship</p>
              </article>
              <article className="cards-section__card collab-animate anim-scale-in anim-delay-4">
                <span className="cards-section__card-number">4</span>
                <h4 className="cards-section__card-title">Leadership Development</h4>
                <p className="cards-section__card-text">Building confidence, resilience, and social responsibility</p>
              </article>
            </div>
            <p className="cards-section__cta collab-animate anim-fade-up">Let's shape the innovators and leaders of tomorrow—together.</p>
          </div>
        </section>

        {/* ===== CTA - READY TO PARTNER ===== */}
        <section className="collab-cta">
          <div className="collab-cta__inner collab-animate anim-fade-up">
            <h2 className="collab-cta__title">Ready to Partner with Skillzza?</h2>
            <p className="collab-cta__text">
              Contact us today to explore how we can create impactful, sustainable skill development programs tailored to your unique needs and goals.
            </p>
            <p className="collab-cta__tagline">Together, we're not just building skills, we're building futures.</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default PartnerCollaborationPage
