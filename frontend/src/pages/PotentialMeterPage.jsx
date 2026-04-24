import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/potentiometer/Mask Group 129.png';

const AnimatedNumber = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.1 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [hasTriggered]);

  useEffect(() => {
    if (!hasTriggered) return;
    let startTime = null;
    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      // easeOut component
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(end * easeProgress);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [hasTriggered, end, duration]);

  const isFloat = end % 1 !== 0;
  const displayValue = isFloat ? count.toFixed(1) : Math.floor(count);

  return <span ref={nodeRef}>{displayValue}{suffix}</span>;
};

export default function PotentialMeterPage() {
  const imgRef = useRef(null);
  const [imgHeight, setImgHeight] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Track the image height so we can position the gradient cutoff precisely
  useEffect(() => {
    const updateHeight = () => {
      if (imgRef.current) {
        setImgHeight(imgRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* ── Hero Section ── */}
      <section className="relative w-full pt-[20px]">

        {/* Gradient bg — covers from top to halfway through the image */}
        <div
          className="absolute top-0 left-0 w-full pointer-events-none"
          style={{
            /* bottom edge = total section height minus half the image height */
            height: imgHeight > 0 ? `calc(100% - ${imgHeight / 2}px)` : '70%',
            background:
              'linear-gradient(253deg, rgba(221,232,255,0.45) 0%, rgba(255,255,255,0.45) 33%, rgba(250,252,255,0.45) 51%, rgba(239,244,255,0.45) 100%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-8">

          {/* Breadcrumb */}
          <div className="w-full max-w-[1400px] mb-3 text-left">
            <span className="font-['DM_Sans',sans-serif] text-[13px] text-[#71717A]">
              Home {'>'} Products {'>'} Potential Meter AI
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="font-['DM_Sans',sans-serif] font-semibold text-[#0F1114] max-w-[1118px] text-[48px] leading-[54px] md:text-[60px] md:leading-[66px] lg:text-[68px] lg:leading-[76px] tracking-[-1.9px] mb-3"
          >
            Stop Guessing <span className="text-[#2563eb]">Career Potential.</span>
            <br />
            Start <span className="text-[#2563eb]">Measuring</span> It.
          </h1>

          {/* Sub Heading */}
          <p
            className="font-['DM_Sans',sans-serif] font-semibold text-[#0F1114] max-w-[1050px] text-[16px] leading-[24px] md:text-[19px] md:leading-[27px] lg:text-[21px] lg:leading-[29px] tracking-[-0.6px] mb-3"
          >
            The AI-powered platform that transforms career uncertainty into data-backed decisions in minutes.
            <br />
            Traditional assessments measure knowledge.&nbsp; We measure real-world performance capability.
          </p>

          {/* Content Paragraph */}
          <p
            className="font-['DM_Sans',sans-serif] font-medium text-[#71717A] max-w-[800px] text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] lg:text-[18px] lg:leading-[26px] mb-5"
          >
            The Potential Meter AI combines artificial intelligence, behavioral science, and
            role-based analytics to deliver precision insights into skills, cognitive agility, and
            career readiness helping individuals find their best-fit career path and
            organizations make confident talent decisions.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 mb-6">
            <button className="bg-[#245CE2] hover:bg-[#1E4DBC] transition-colors text-white font-['DM_Sans',sans-serif] font-medium text-[15px] px-7 py-3 rounded">
              Start Free Skill Assessment
            </button>
            <button className="bg-white border border-[#E4E4E7] hover:bg-gray-50 transition-colors text-[#0F1114] font-['DM_Sans',sans-serif] font-medium text-[15px] px-7 py-3 rounded">
              Book Demo
            </button>
          </div>

          {/* Hero Image */}
          <div className="w-full max-w-[1400px] mx-auto">
            <img
              ref={imgRef}
              src={heroImg}
              alt="Potential Meter AI — Assess, Analyze, Readiness, Roadmap"
              className="w-full h-auto object-contain"
              onLoad={() => {
                if (imgRef.current) setImgHeight(imgRef.current.offsetHeight);
              }}
            />
          </div>

        </div>
      </section>

      {/* ── Statistics Section ── */}
      <section 
        className="w-full flex-shrink-0 flex items-center justify-center bg-[#1F57C7] px-4 py-16 md:py-20"
      >
        <div className="max-w-[1400px] w-full flex flex-col items-center text-center">
          <h2 className="font-['DM_Sans',sans-serif] font-medium text-white text-[36px] leading-[44px] md:text-[52px] md:leading-[60px] tracking-[-0.5px] mb-4">
            Real Outcomes. Measurable Impact.
          </h2>
          <p className="font-['DM_Sans',sans-serif] font-normal text-white/90 text-[18px] md:text-[22px] leading-[30px] mb-12 max-w-[800px]">
            What users and institutions achieve after using the Potential Meter
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
            {/* Stat 1 */}
            <div className="flex flex-col items-center px-4">
              <div className="font-['DM_Sans',sans-serif] font-semibold text-white text-[64px] md:text-[76px] leading-[1] mb-6">
                <AnimatedNumber end={87} suffix="%" />
              </div>
              <p className="font-['DM_Sans',sans-serif] font-normal text-white text-[16px] md:text-[18px] leading-[26px]">
                Improvement in career<br/>clarity
              </p>
            </div>
            
            {/* Stat 2 */}
            <div className="flex flex-col items-center px-4">
              <div className="font-['DM_Sans',sans-serif] font-semibold text-white text-[64px] md:text-[76px] leading-[1] mb-6">
                <AnimatedNumber end={2.5} suffix="X" />
              </div>
              <p className="font-['DM_Sans',sans-serif] font-normal text-white text-[16px] md:text-[18px] leading-[26px]">
                faster career and learning<br/>decision-making
              </p>
            </div>
            
            {/* Stat 3 */}
            <div className="flex flex-col items-center px-4">
              <div className="font-['DM_Sans',sans-serif] font-semibold text-white text-[64px] md:text-[76px] leading-[1] mb-6">
                <AnimatedNumber end={60} suffix="%" />
              </div>
              <p className="font-['DM_Sans',sans-serif] font-normal text-white text-[16px] md:text-[18px] leading-[28px] max-w-[250px]">
                higher role-fit accuracy<br/>for institutions and<br/>employers
              </p>
            </div>
            
            {/* Stat 4 */}
            <div className="flex flex-col items-center px-4">
              <div className="font-['DM_Sans',sans-serif] font-semibold text-white text-[64px] md:text-[76px] leading-[1] mb-6">
                <AnimatedNumber end={40} suffix="%" />
              </div>
              <p className="font-['DM_Sans',sans-serif] font-normal text-white text-[16px] md:text-[18px] leading-[26px] max-w-[220px]">
                reduction in early-career<br/>misalignment
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
