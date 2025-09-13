import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Banner Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 tracking-wide">
                Bolstering Students an Employability, Innovation & Creative Skills.
              </h1>
              <p className="text-lg md:text-xl mb-8">
                An AI driven up-Skilling platform aligned with UN's Sustainable Development Goals (SDG)
              </p>
              <button className="bg-white text-red-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Know more...The Skillzza Way!
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="w-full max-w-lg md:max-w-md">
                <img src="/image_3d6bd5.jpg" alt="Smiling woman with thumbs up" className="w-full h-auto rounded-xl shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </section>

      {/* The Challenge Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="md:w-1/2">
              <img src="/image_3d6852.jpg" alt="Skill Gap concept" className="w-full h-auto rounded-xl shadow-lg" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xs font-bold uppercase text-red-500 mb-2 tracking-widest">THE CHALLENGE</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">A Widening Skill Gap</h2>
              <p className="text-lg text-gray-600 mb-6">
                As industries undergo rapid transformation, the gap between the skills employers demand and those available in the workforce is expanding. This widening disparity not only impedes career progress and curtails opportunities but also creates significant obstacles for countless individuals worldwide. Without the right skills, many find themselves struggling to keep pace with the relentless evolution of the job market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="bg-purple-100 py-24">
  <div className="container mx-auto px-6">
    {/* Top section with 3D graphic */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-16 mb-12">
      <div className="md:w-1/2">
        <h3 className="text-sm font-bold uppercase text-red-600 mb-2 tracking-widest">
          OUR SOLUTION
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          A 360 Degree Skill Development Framework
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          At Skillzza, we offer a revolutionary **360-Degree Skill Development 4M Framework** designed to empower individuals and organisations through a holistic approach to learning and growth.
        </p>
        <p className="text-lg text-gray-600">
          Our solution integrates advanced technology with personalised support to provide a comprehensive skill-building experience that addresses every aspect of career development.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img src="/image_3d6830.jpg" alt="360 Degree Framework" className="w-full h-auto max-w-sm" />
      </div>
    </div>

    {/* Platform Features Section */}
    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Platform Features</h3>
    <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
      <button className="py-3 px-6 rounded-lg font-semibold bg-purple-600 text-white shadow-md">
        Xperience Platform
      </button>
      <button className="py-3 px-6 rounded-lg font-semibold bg-white text-gray-800 hover:bg-gray-100">
        The Potential Meter
      </button>
      <button className="py-3 px-6 rounded-lg font-semibold bg-white text-gray-800 hover:bg-gray-100">
        Talent Transformation
      </button>
      <button className="py-3 px-6 rounded-lg font-semibold bg-white text-gray-800 hover:bg-gray-100">
        AI HackNex
      </button>
      <button className="py-3 px-6 rounded-lg font-semibold bg-white text-gray-800 hover:bg-gray-100">
        Hirenest
      </button>
    </div>
    
    {/* Default Tab Content */}
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Xperience Platform</h3>
          <p className="text-lg font-semibold text-gray-700 mb-4">Simulate. Solve. Showcase.</p>
          <p className="text-gray-600 mb-6">Step into virtual job roles through immersive simulations that mirror real industry challenges.</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Role-based job simulations rooted in real-world challenges</li>
            <li>Practical, challenge-based learning to develop problem-solving skills</li>
            <li>Digital, verifiable portfolios aligned with employer expectations</li>
            <li>Sharpened workplace readiness through applied learning</li>
          </ul>
          <button className="mt-8 bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            Start Your Simulation Journey
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="/image_3ba13b.jpg" alt="Xperience Platform" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* The Collaboration Section */}
      <section className="bg-white py-24">
  <div className="container mx-auto px-6">
    <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
      {/* Left side: Text content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h3 className="text-sm font-bold uppercase text-gray-500 mb-2 tracking-widest">
          THE COLLABORATION
        </h3>
        <div className="h-1 w-16 bg-purple-600 mx-auto lg:mx-0 mb-6"></div>
        <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
          Partnerships For Impact
        </h2>
        <p className="text-lg text-gray-600 max-w-lg lg:max-w-none mx-auto lg:mx-0">
          At Skillzza, we believe that collaboration is the cornerstone of impactful change. By joining forces, we aim to bridge skill gaps and create a future-ready workforce. Together, we can shape a world where education and skills are accessible to all, fostering innovation and sustainable growth.
        </p>
      </div>

      {/* Right side: Partnership cards grid */}
      <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {/* Schools / Universities Card (Highlighted) */}
        <div className="bg-purple-600 p-6 rounded-lg shadow-md border border-purple-600 flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          <img
            src="/scholluniversity.png" // Replace with your image path
            alt="Schools / Universities Icon"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-lg font-bold text-white">Schools / Universities</h3>
          <p className="text-sm text-white mt-2">Partnering to Cultivate the Next Generation of Leaders</p>
        </div>

        {/* Corporates Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          <img
            src="/corporate.png" // Replace with your image path
            alt="Corporates Icon"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-lg font-bold text-gray-800">Corporates</h3>
          <p className="text-sm text-gray-500 mt-2">Driving Business Success through Workforce Excellence</p>
        </div>

        {/* Government Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          <img
            src="/government.png" // Replace with your image path
            alt="Government Icon"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-lg font-bold text-gray-800">Government</h3>
          <p className="text-sm text-gray-500 mt-2">Building a Skilled Workforce for a Stronger Economy</p>
        </div>

        {/* Become our upskilling partner Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          <img
            src="/becomepartner.png" // Replace with your image path
            alt="Upskilling Partner Icon"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-lg font-bold text-gray-800">Become our upskilling partner</h3>
          <p className="text-sm text-gray-500 mt-2">Join Us in Shaping the Future of Work</p>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Connect with us Form Section */}
      <section
  className="relative py-16 md:py-24 overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: "url('/partnerwithbg.png')" }}
>
  {/* Dark overlay for text readability, matching the original site's look */}
  <div className="absolute inset-0 opacity-60 z-0"></div>

  <div className="container mx-auto px-6 relative z-10">
    {/* Image at the top */}
    <div className="flex justify-center mb-12 md:mb-16">
      <img
        src="/partner-bg.png" // This is the image of people shaking hands
        alt="Business people shaking hands"
        className="w-full max-w-4xl h-auto rounded-lg shadow-xl"
      />
    </div>

    <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
      {/* Left side: Text content */}
      <div className="md:w-1/2 text-center md:text-left text-white">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Partner with us <br /> To make a Difference
        </h2>
        <p className="text-lg md:text-xl max-w-md mx-auto md:mx-0">
          Connect with our industry experts for a personalised consultation. Let’s explore how our solutions can revolutionise your growth.
        </p>
      </div>

      {/* Right side: Contact Form */}
      <div className="md:w-1/2 w-full max-w-md bg-white p-8 md:p-10 rounded-lg shadow-2xl text-gray-800">
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Name*"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-200"
          />
          <input
            type="email"
            placeholder="Email*"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-200"
          />
          <div className="flex items-center space-x-4">
            <select className="flex-shrink-0 p-4 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600">
              <option>India +91</option>
              {/* Add other country codes as needed */}
            </select>
            <input
              type="tel"
              placeholder="Mobile Number*"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-md font-bold text-lg hover:bg-gray-800 transition-all duration-200 shadow-md"
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
      <section className="bg-white py-24">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Partners</h2>
    <p className="text-lg text-gray-600 mb-12">Take your skill transformation to the next level.</p>
    
    <div className="relative w-full overflow-hidden">
      <div className="flex w-[200%] animate-slide-logos gap-8">
        {/* First set of logos */}
        <div className="flex items-center gap-8">
          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border border-gray-100">
            <img src="/logo-redhat.png" alt="Red Hat" className="h-10 w-auto object-contain" />
          </div>
          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border border-gray-100">
            <img src="/logo-google.png" alt="Google" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border border-gray-100">
            <img src="/logo-green-gold.png" alt="Green Gold Formation" className="h-16 w-auto object-contain" />
          </div>
          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border border-gray-100">
            <img src="/logo-midland.png" alt="Midland Microfin" className="h-16 w-auto object-contain" />
          </div>
          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border border-gray-100">
            <img src="/logo-meta.png" alt="Meta" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border border-gray-100">
            <img src="/logo-ailifebot.png" alt="AI LifeBot" className="h-16 w-auto object-contain" />
          </div>
          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border border-gray-100">
            <img src="/logo-microsoft.png" alt="Microsoft" className="h-10 w-auto object-contain" />
          </div>
        </div>

        {/* Second identical set of logos for seamless loop */}
        <div className="flex items-center gap-8">
          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border border-gray-100">
            <img src="/logo-redhat.png" alt="Red Hat" className="h-10 w-auto object-contain" />
          </div>
          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border border-gray-100">
            <img src="/logo-google.png" alt="Google" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border border-gray-100">
            <img src="/logo-green-gold.png" alt="Green Gold Formation" className="h-16 w-auto object-contain" />
          </div>
          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border border-gray-100">
            <img src="/logo-midland.png" alt="Midland Microfin" className="h-16 w-auto object-contain" />
          </div>
          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border border-gray-100">
            <img src="/logo-meta.png" alt="Meta" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border border-gray-100">
            <img src="/logo-ailifebot.png" alt="AI LifeBot" className="h-16 w-auto object-contain" />
          </div>
          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border border-gray-100">
            <img src="/logo-microsoft.png" alt="Microsoft" className="h-10 w-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      <section className="bg-gray-50 py-20">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">The Skillzza Digest</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Blog Card */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        <img src="/startYourjourney_tile_img.jpeg" alt="Blog" className="w-full h-48 object-cover" />
        <div className="p-6 text-left">
          <h3 className="text-lg font-bold text-gray-800 mb-2">The Skill Digest</h3>
          <p className="text-sm text-gray-600">
            From new program launches to thought leadership, our blog keeps you updated. Read perspectives from our founders and industry experts on AI, innovation, and talent transformation.
          </p>
        </div>
      </div>
      {/* Research Hub Card */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        <img src="/image_3cefee_research.jpg" alt="Research Hub" className="w-full h-48 object-cover" />
        <div className="p-6 text-left">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Research Hub</h3>
          <p className="text-sm text-gray-600">
            The skills economy is evolving fast. Our research reveals what’s driving the change. Dive into expert reports, case studies, and analyses to separate real skill trends from passing buzz.
          </p>
        </div>
      </div>
      {/* The Skill Blueprint Card */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        <img src="/image_3cefee_blueprint.jpg" alt="The Skill Blueprint" className="w-full h-48 object-cover" />
        <div className="p-6 text-left">
          <h3 className="text-lg font-bold text-gray-800 mb-2">The Skill Blueprint</h3>
          <p className="text-sm text-gray-600">
            Beyond traditional learning, Skillzza’s blueprints help you map skills, pathways, and opportunities with clarity. Discover how AI-crafted learning journeys can prepare you for tomorrow’s industries.
          </p>
        </div>
      </div>
      {/* Podcast Card */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        <img src="/image_3cefee_podcast.jpg" alt="Podcast" className="w-full h-48 object-cover" />
        <div className="p-6 text-left">
          {/* <p className="text-sm text-gray-500 mb-2">December 12, 2023</p> */}
          <h3 className="text-lg font-bold text-gray-800 mb-2">Podcast</h3>
          <p className="text-sm text-gray-600">
            Tune in to The Skillzza Talks podcast where leaders, innovators, and changemakers unpack the skills reshaping careers, industries, and societies. Practical, insightful, and future-ready.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}