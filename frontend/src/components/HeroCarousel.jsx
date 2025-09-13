import { useState, useEffect } from 'react';

export default function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Array of slides with their content and styling
  const slides = [
    {
      bgImage: '/banner_1.png',
      heading: 'Bolstering Students an Employability, Innovation & Creative Skills.',
      subtext: "An AI driven up-Skilling platform aligned with UN's Sustainable Development Goals (SDG)",
      ctaText: 'Know more...The Skillzza Way!',
      ctaLink: '#',
      textColor: 'text-white', // Text color for this slide
    },
    {
        bgImage: '/banner_5.png',
        heading: 'Elevate Your Success with a Game-Changing Edge',
        subtext: 'The sole Job simulation platform that ensures you gain invaluable real-world work experience in your hand-picked industry and region.',
        ctaText: 'Enroll Now',
        ctaLink: '#',
        secondaryCtaText: 'How It Works',
        secondaryCtaLink: '#',
        textColor: 'text-black', // Text color for this slide, changed to black
      },
    {
      bgImage: '/banner_2.png',
      heading: 'Master AI, Transform Your World ..',
      subtext: 'Join the School of AI & Data empowering individuals and organisations to harness the transformative power of AI.',
      ctaText: 'Join Us.. Be an AI Pioneer!',
      ctaLink: '#',
      textColor: 'text-white', // Text color for this slide
    },
    {
      bgImage: '/banner_3.png',
      heading: 'Lead with Purpose... Act for the Planet',
      subtext: 'Join the Global School of Sustainability & Climate Action!',
      ctaText: 'Enroll Now and Be a Catalyst for Global Sustainability!',
      ctaLink: '#',
      textColor: 'text-white', // Text color for this slide
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(timer);
  }, [activeSlide]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            
            <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
              <div className={`md:w-1/2 text-center md:text-left ${slide.textColor}`}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 tracking-wide">
                  {slide.heading}
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
                  {slide.subtext}
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                  <a
                    href={slide.ctaLink}
                    className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
                  >
                    {slide.ctaText}
                  </a>
                  {slide.secondaryCtaText && (
                    <a
                      href={slide.secondaryCtaLink}
                      className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                      {slide.secondaryCtaText}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Manual Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-400 bg-opacity-30 p-2 rounded-full text-white hover:bg-opacity-50 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-400 bg-opacity-30 p-2 rounded-full text-white hover:bg-opacity-50 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === activeSlide ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}