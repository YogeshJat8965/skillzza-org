import React, { useEffect, useRef } from 'react'

/* ── Custom hook for scroll-reveal animation ── */
function useScrollReveal(options = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('about-revealed')
          observer.unobserve(el)
        }
      },
      { threshold: options.threshold || 0.12, rootMargin: options.rootMargin || '0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function AboutPage() {
  const bannerRef = useScrollReveal()
  const overviewRef = useScrollReveal()
  const commitmentRef = useScrollReveal()
  const ctaRef = useScrollReveal()
  const mvRef = useScrollReveal()
  const valuesRef = useScrollReveal()

  return (
    <>
      <style>{`
        /* 3D scrolling animation classes */
        .about-reveal {
          opacity: 0;
          transform: perspective(1200px) rotateX(-10deg) translateY(60px) translateZ(-40px);
          transform-origin: top center;
          transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }
        .about-revealed {
          opacity: 1 !important;
          transform: perspective(1200px) rotateX(0deg) translateY(0) translateZ(0) !important;
        }

        .about-revealed.about-stagger > *, .about-revealed .about-stagger > * {
          opacity: 0;
          transform: perspective(1200px) rotateX(-10deg) translateY(40px) translateZ(-40px);
          transform-origin: top center;
          animation: about-fade-up-3d 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity;
        }
        .about-revealed.about-stagger > *:nth-child(1), .about-revealed .about-stagger > *:nth-child(1) { animation-delay: 0.1s; }
        .about-revealed.about-stagger > *:nth-child(2), .about-revealed .about-stagger > *:nth-child(2) { animation-delay: 0.2s; }
        .about-revealed.about-stagger > *:nth-child(3), .about-revealed .about-stagger > *:nth-child(3) { animation-delay: 0.3s; }
        .about-revealed.about-stagger > *:nth-child(4), .about-revealed .about-stagger > *:nth-child(4) { animation-delay: 0.4s; }

        @keyframes about-fade-up-3d {
          to { opacity: 1; transform: perspective(1200px) rotateX(0deg) translateY(0) translateZ(0); }
        }

        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

        .about-banner-page {
          font-family: 'Poppins', sans-serif;
          background: #ffffff;
          min-height: 100vh;
        }

        .about-banner {
          position: relative;
          width: 100%;
          min-height: clamp(320px, 50vh, 520px);
          background-image: url('/Company/about/Post205-cover.jpg');
          // background-size: 118% auto;
          // background-position: 94% center;
          display: flex;
          align-items: center;
          color: #f1f5f9;
          overflow: hidden;
        }

        .about-banner::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(2, 6, 23, 0.9) 0%, rgba(2, 6, 23, 0.4) 55%, rgba(2, 6, 23, 0) 100%);
        }

        .about-banner__content {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: clamp(32px, 8vw, 96px) 0;
        }

        .about-banner__headline {
          font-size: clamp(16px, 2vw, 30px);
          line-height: 1.3;
          margin: 0;
          max-width: 32ch;
        }

        @media (max-width: 768px) {
          .about-banner {
            min-height: 58vh;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }

          .about-banner::after {
            background: linear-gradient(90deg, rgba(2, 6, 23, 0.82) 0%, rgba(2, 6, 23, 0.38) 56%, rgba(2, 6, 23, 0.12) 100%);
          }

          .about-banner__content {
            padding: 48px 24px;
          }

          .about-banner__headline {
            font-size: clamp(16px, 4.4vw, 24px);
            line-height: 1.28;
          }
        }

        .about-overview {
          background: #f5f5f5;
          padding: clamp(48px, 9vw, 120px) clamp(24px, 8vw, 120px) clamp(24px, 4vw, 40px);
        }

        .about-overview__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: clamp(32px, 6vw, 80px);
          max-width: 1100px;
          margin: 0 auto;
        }

        .about-overview__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          font-size: 14px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 400;
          color: #c8102e;
          margin-bottom: 18px;
        }

        .about-overview__eyebrow::after {
          content: '';
          display: block;
          width: 68px;
          height: 2px;
          background: currentColor;
        }

        .about-overview__title {
          font-size: clamp(24px, 2.6vw, 32px);
          font-weight: 400;
          line-height: 1.4;
          color: #2c2c2c;
        }

        .about-overview__body {
          font-size: 16px;
          line-height: 1.75;
          color: #1a1a1a;
        }

        .about-overview__body p {
          margin: 0 0 18px;
        }

        .about-overview__body p:last-child {
          margin-bottom: 0;
        }

        .about-commitment {
          --about-side-pad: clamp(24px, 8vw, 120px);
          --about-grid-max: 1100px;
          background: #ffffff;
          padding: clamp(24px, 4vw, 48px) var(--about-side-pad) clamp(48px, 9vw, 120px);
        }

        .about-commitment__grid {
          display: grid;
          grid-template-columns: minmax(320px, 1fr) minmax(300px, 0.82fr);
          gap: clamp(24px, 4vw, 64px);
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
        }

        .about-commitment__text {
          font-size: 16px;
          line-height: 1.75;
          color: #1a1a1a;
          max-width: 520px;
        }

        .about-commitment__text p { margin: 0 0 18px; }
        .about-commitment__text p:last-child { margin-bottom: 0; }

        .about-commitment__image-wrapper {
          position: relative;
          width: calc(
            100% + var(--about-side-pad) +
            max(0px, calc((100vw - (var(--about-grid-max) + (2 * var(--about-side-pad)))) / 2))
          );
          min-height: 290px;
          overflow: hidden;
          border-radius: 0;
          justify-self: end;
          margin-right: calc(
            -1 * (
              var(--about-side-pad) +
              max(0px, calc((100vw - (var(--about-grid-max) + (2 * var(--about-side-pad)))) / 2))
            )
          );
        }

        .about-commitment__image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          object-position: center;
        }

        @media (max-width: 992px) {
          .about-commitment__grid {
            grid-template-columns: 1fr;
          }

          .about-commitment__image-wrapper {
            order: -1;
            min-height: 260px;
          }

          .about-commitment__text {
            margin-left: 0;
          }

          .about-commitment {
            padding: clamp(24px, 4vw, 40px) clamp(24px, 8vw, 60px) clamp(40px, 11vw, 100px);
          }
        }

        .about-cta-strip {
          width: 100vw;
          height: 120px;
          margin-left: calc(50% - 50vw);
          margin-top: -120px;
          background: linear-gradient(90deg, #990913 0%, #60050a 100%);
          display: flex;
          align-items: center;
          padding: 0 clamp(20px, 6vw, 56px);
        }

        .about-cta-strip__inner {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }

        .about-cta-strip__button {
          min-width: 98px;
          border: 0;
          border-radius: 4px;
          background: #f2a93b;
          color: #111111;
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
          font-weight: 600;
          line-height: 1;
          padding: 8px 14px;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          will-change: transform, box-shadow;
        }

        .about-cta-strip__button:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.25);
        }
        
        .about-cta-strip__button:active {
          transform: translateY(0) scale(0.98);
        }

        .about-cta-strip__text {
          margin: 0;
          color: #ffffff;
          font-family: 'Poppins', sans-serif;
          font-size: clamp(15px, 1.4vw, 30px);
          font-weight: 500;
          line-height: 1.3;
          text-align: center;
        }

        .about-mv {
          background: #efefef;
          padding: clamp(46px, 8vw, 92px) clamp(20px, 6vw, 56px);
        }

        .about-mv__container {
          max-width: 1030px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(24px, 3.5vw, 36px);
          align-items: start;
        }

        .about-mv__card {
          color: #ffffff;
          border-radius: 0;
          border-top-left-radius: 34px;
          border-bottom-right-radius: 34px;
          padding: clamp(24px, 3.2vw, 36px);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, box-shadow;
        }

        .about-mv__card:hover {
          // transform: translateY(-10px) ;
          box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.28), 0px 12px 24px rgba(0, 0, 0, 0.14);
          position: relative;
          z-index: 10;
        }

        .about-mv__card--mission {
          background: #a27ab7;
          margin-top: 8px;
          min-height: 430px;
        }

        .about-mv__line {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 0 0 24px;
        }

        .about-mv__heading {
          margin: 0;
          font-size: clamp(22px, 1.9vw, 32px);
          font-weight: 500;
          line-height: 1;
        }

        .about-mv__divider {
          width: clamp(72px, 7vw, 100px);
          height: 1px;
          background: rgba(255, 255, 255, 0.9);
        }

        .about-mv__text {
          margin: 0;
          font-size: clamp(14px, 1.2vw, 18px);
          line-height: 1.4;
          font-weight: 400;
        }

        .about-mv__text + .about-mv__text {
          margin-top: 22px;
        }

        .about-mv__right {
          display: flex;
          flex-direction: column;
          gap: 22px;
          padding-top: 24px;
        }

        .about-mv__chip {
          width: 92px;
          height: 56px;
          background: #1c97d4;
          border-top-left-radius: 26px;
          border-bottom-right-radius: 26px;
        }

        .about-mv__card--vision {
          background: #cf2c2e;
          min-height: 430px;
        }

        .about-mv__card--vision strong {
          font-weight: 700;
        }

        .about-mv__chip--yellow {
          width: 92px;
          height: 56px;
          background: #fecd2a;
          border-top-left-radius: 26px;
          border-bottom-right-radius: 26px;
          align-self: flex-start;
          margin-top: -94px;
          margin-left: -138px;
        }

        @media (max-width: 992px) {
          .about-cta-strip {
            margin-top: 0;
            height: auto;
            min-height: 120px;
            padding: 24px clamp(20px, 6vw, 56px);
          }

          .about-cta-strip__inner {
            gap: 10px;
          }

          .about-cta-strip__button {
            min-width: 78px;
            font-size: 18px;
            padding: 8px 10px;
          }

          .about-cta-strip__text {
            font-size: clamp(13px, 3vw, 20px);
          }

          .about-mv__container {
            grid-template-columns: 1fr;
          }

          .about-mv__right {
            padding-top: 0;
          }

          .about-mv__chip,
          .about-mv__chip--yellow {
            display: none;
          }

          .about-mv__card--mission,
          .about-mv__card--vision {
            min-height: auto;
            margin-top: 0;
          }
        }

        .about-core-values {
          width: 100vw;
          margin-left: calc(50% - 50vw);
          background: #fba93e;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: clamp(24px, 4vw, 44px) 0;
        }

        .about-core-values__image {
          width: min(1300px, 100vw);
          height: auto;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
          will-change: transform, filter;
        }

        .about-core-values__image:hover {
          transform: scale(1.02);
          filter: drop-shadow(0px 20px 40px rgba(0,0,0,0.15));
        }
      `}</style>
      <main className="about-banner-page">
        <section ref={bannerRef} className="about-banner about-reveal">
          <div className="about-banner__content">
            <p className="about-banner__headline">
              A pioneering Skill Development
              <br />
              company dedicated to reshaping
              <br />
              the future of career growth and
              <br />
              talent enhancement.
            </p>
          </div>
        </section>
        <section ref={overviewRef} className="about-overview about-reveal about-stagger">
          <div className="about-overview__grid">
            <div>
              <p className="about-overview__eyebrow">Know About</p>
              <p className="about-overview__title">
                Witness the emergence of an organisation that will handhold you to unleash the true potential and
                achieve your career goals!
              </p>
            </div>
            <div className="about-overview__body">
              <p>
                In today’s fast-paced world, where technological advancements and job market dynamics are constantly
                evolving, Skillzza leads the charge in providing innovative solutions that bridge the global skills gap
                and prepare the workforce for tomorrow’s challenges.
              </p>
              <p>
                Our mission is to democratise access to high-quality, impactful learning experiences, equipping
                individuals with the skills they need to excel in a competitive and ever-changing landscape. By offering
                personalised, industry-aligned training, we ensure our learners are always ahead of the curve.
              </p>
            </div>
          </div>
        </section>
        <section ref={commitmentRef} className="about-commitment about-reveal about-stagger">
          <div className="about-commitment__grid">
            <div className="about-commitment__text">
              <p>
                Our platform serves as a strategic bridge, connecting academic knowledge with practical application while ensuring learners develop the adaptive capabilities essential for sustained career success.We champion democratized access to premium professional development, serving diverse stakeholders including individual professionals, educational institutions, and enterprise organizations.
              </p>
              <p>
               Our commitment extends beyond urban centers to Tier 2 and Tier 3 cities, addressing systemic barriers to quality education and creating pathways for economic mobility.
              </p>
              <p>
                Operating in alignment with the United Nations Sustainable Development Goals, Skillzza cultivates an inclusive learning ecosystem that transforms potential into performance. We are building tomorrow's workforce today,one that is not only globally competitive but also locally relevant, sustainable, and equipped to navigate the complexities of an interconnected world.
              </p>
            </div>
            <div className="about-commitment__image-wrapper">
              <img src="/Company/about/women.png" alt="Women collaborating" />
            </div>
          </div>
        </section>
        <section ref={ctaRef} className="about-cta-strip about-reveal">
          <div className="about-cta-strip__inner about-stagger">
            <button type="button" className="about-cta-strip__button">Join</button>
            <p className="about-cta-strip__text">Skillzza Today And Gain The Skills You Need To Shape The Future You Aspire To.</p>
          </div>
        </section>
        <section ref={mvRef} className="about-mv about-reveal">
          <div className="about-mv__container about-stagger">
            <article className="about-mv__card about-mv__card--mission">
              <div className="about-mv__line">
                <h2 className="about-mv__heading">Our MISSION</h2>
                <span className="about-mv__divider" aria-hidden="true" />
              </div>
              <p className="about-mv__text">
                To empower every student globally to realise their full potential, eliminating geographical, social,
                and economic barriers to skill development.
              </p>
              <p className="about-mv__text">
                We are committed to providing opportunities that enable individuals to advance their skills and achieve
                their aspirations, regardless of their starting point.
              </p>
            </article>
            <div className="about-mv__right">
              <div className="about-mv__chip" aria-hidden="true" />
              <article className="about-mv__card about-mv__card--vision">
                <div className="about-mv__line">
                  <h2 className="about-mv__heading">Our VISION</h2>
                  <span className="about-mv__divider" aria-hidden="true" />
                </div>
                <p className="about-mv__text">
                  To <strong>empower every individual and organization</strong> with the skills required to thrive in a
                  dynamic world, creating <strong>a sustainable future of work</strong> where every learner is equipped
                  with the knowledge, experience, and innovation to lead in their fields.
                </p>
                <p className="about-mv__text">
                  We aspire to be a global leader in <strong>skill development, talent transformation, and sustainable education</strong>,
                  driving a positive impact on industries and communities.
                </p>
              </article>
              <div className="about-mv__chip--yellow" aria-hidden="true" />
            </div>
          </div>
        </section>
        <section ref={valuesRef} className="about-core-values about-reveal">
          <img
            className="about-core-values__image"
            src="/Company/about/core value.png"
            alt="Core values spark"
          />
        </section>
      </main>
    </>
  )
}

export default AboutPage
