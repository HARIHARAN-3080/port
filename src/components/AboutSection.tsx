import React, { useEffect, useRef } from 'react';

interface AboutSectionProps {
  isDarkMode: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isDarkMode }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-section-visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-20 fade-in-section ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className={`h-1 w-20 mx-auto ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-2">
              <div className={`relative rounded-lg overflow-hidden ${
                isDarkMode ? 'shadow-blue-500/20' : 'shadow-xl'
              } shadow-lg`}>
                <div className={`absolute inset-0 ${
                  isDarkMode ? 'bg-blue-500/10' : 'bg-blue-100/30'
                }`}></div>
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Portrait of Cam" 
                  className="w-full h-auto relative z-10"
                />
              </div>
            </div>
            
            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold mb-4">Hello, I'm Cam!</h3>
              <p className={`mb-4 leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I'm a passionate full-stack developer and designer with a keen eye for creating beautiful, functional digital experiences. With a background in computer science and design, I blend technical expertise with creative problem-solving.
              </p>
              <p className={`mb-6 leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                My journey in tech began 5 years ago, and since then, I've had the privilege of working with various startups and established companies to bring their visions to life. I believe in writing clean, maintainable code and designing intuitive user interfaces that delight users.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <h4 className="font-bold mb-2">Education</h4>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    B.S. Computer Science<br />
                    University of Technology
                  </p>
                </div>
                <div className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <h4 className="font-bold mb-2">Experience</h4>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    5+ Years in Web Development<br />
                    3+ Years in UI/UX Design
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  isDarkMode ? 'bg-blue-900/50 text-blue-200' : 'bg-blue-100 text-blue-800'
                }`}>Problem Solver</span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  isDarkMode ? 'bg-green-900/50 text-green-200' : 'bg-green-100 text-green-800'
                }`}>Creative Thinker</span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  isDarkMode ? 'bg-purple-900/50 text-purple-200' : 'bg-purple-100 text-purple-800'
                }`}>Team Player</span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  isDarkMode ? 'bg-yellow-900/50 text-yellow-200' : 'bg-yellow-100 text-yellow-800'
                }`}>Detail-Oriented</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;