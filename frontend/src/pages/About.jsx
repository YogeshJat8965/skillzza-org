import React from 'react';

import { getAssetPath, getBackgroundImageUrl, getRoutePath } from '../utils/assets';
const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-24 md:py-32 flex items-center bg-cover bg-center"
        style={{
          backgroundImage: getBackgroundImageUrl('/about_us_banner.png'),
          minHeight: '600px',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="w-full md:w-2/3 lg:w-1/2 text-left text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              A pioneering Skill Development company dedicated to reshaping the future of career growth and talent enhancement.
            </h1>
          </div>
        </div>
      </section>


      {/* Intro Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-sm font-bold uppercase text-red-500 mb-2 tracking-widest">
                KNOW ABOUT
              </h3>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Witness the emergence of an organisation that will handhold you to unleash the true potential and achieve your career goals!
              </h2>
            </div>
            <div>
              <p className="text-lg text-gray-600 mb-6">
                In an era defined by rapid technological disruption and evolving workforce requirements, Skillzza represents a paradigm shift in professional development. Our comprehensive talent transformation platform leverages cutting-edge artificial intelligence, experiential learning methodologies, and industry-specific simulations to address the critical skills gap between traditional education and contemporary market demands.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Through scientifically-designed assessments and immersive learning environments, Skillzza delivers measurable competency development that directly translates to workplace performance. Our platform serves as a strategic bridge, connecting academic knowledge with practical application while ensuring learners develop the adaptive capabilities essential for sustained career success.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* About Bottom Section with image */}
      <section className="bg-gray-100 py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-left text-gray-800">
              <p className="text-lg mb-6">
                We champion democratized access to premium professional development, serving diverse stakeholders including individual professionals, educational institutions, and enterprise organizations. Our commitment extends beyond urban centers to Tier 2 and Tier 3 cities, addressing systemic barriers to quality education and creating pathways for economic mobility
              </p>
              <p className="text-lg">
                Operating in alignment with the United Nations Sustainable Development Goals, Skillzza cultivates an inclusive learning ecosystem that transforms potential into performance. We are building tomorrow's workforce today,one that is not only globally competitive but also locally relevant, sustainable, and equipped to navigate the complexities of an interconnected world.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src={getAssetPath('/potentialMeter_tile_img.png')} alt="Mentoring" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="bg-red-700 text-white py-12 md:py-16 text-center">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-bold">
            Join Skillzza Today And Gain The Skills You Need To Shape The Future You Aspire To.
          </h3>
          <a
            href={getRoutePath('/signup')}
            className="mt-8 inline-block bg-orange-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
          >
            Join
          </a>
        </div>
      </section>


      {/* Mission & Vision Section */}
      <section className="bg-white py-24">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Mission Card */}
      <div className="relative bg-purple-600 text-white p-10 rounded-lg shadow-lg">
        {/* Decorative Blue Block */}
        <div className="absolute -top-4 left-4 w-12 h-12 bg-blue-500 rounded-lg shadow-md"></div>
        {/* Decorative Yellow Block */}
        <div className="absolute -bottom-4 right-4 w-12 h-12 bg-yellow-400 rounded-lg shadow-md"></div>

        <h3 className="text-xl font-bold mb-2">Our MISSION</h3>
        <div className="h-0.5 w-16 bg-white mb-4"></div>
        <p className="text-lg">
          Our mission is to empower individuals through personalized, industry-aligned learning that drives real career growth, bridges skill gaps, and prepares every learner to lead in an ever-evolving world.
        </p>
      </div>

      {/* Vision Card */}
      <div className="relative bg-red-600 text-white p-10 rounded-lg shadow-lg">
        {/* Decorative Blue Block */}
        <div className="absolute -top-4 left-4 w-12 h-12 bg-blue-500 rounded-lg shadow-md"></div>
        {/* Decorative Yellow Block */}
        <div className="absolute -bottom-4 right-4 w-12 h-12 bg-yellow-400 rounded-lg shadow-md"></div>

        <h3 className="text-xl font-bold mb-2">Our VISION</h3>
        <div className="h-0.5 w-16 bg-white mb-4"></div>
        <p className="text-lg">
          Skillzza empowers individuals and organizations with the capabilities to thrive in an ever-evolving world, shaping a sustainable future of work where learning, innovation, and real-world experience converge. 
          We aspire to be a global force in skill development, talent transformation, and equitable education driving meaningful impact across industries and communities.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Core Values Section */}
      <section
  className="relative py-24 md:py-32 flex items-center bg-cover bg-center text-white"
  style={{
    backgroundImage: getBackgroundImageUrl('/partnerwithbg.png'), // Using corevaluebg.png as the section background
    minHeight: '500px', // Ensure enough height for the content
  }}
>
  {/* No dark overlay needed if corevaluebg.png already provides enough contrast */}
  
  <div className="container mx-auto px-6 relative z-10 flex justify-center items-center">
    {/* This image contains the "Core Values SPARK" text and the surrounding content */}
    <img src={getAssetPath('/corevalues_banner.png')} alt="Core Values SPARK" className="w-full max-w-5xl h-auto" />
  </div>
</section>
    </>
  );
};

export default AboutUs;