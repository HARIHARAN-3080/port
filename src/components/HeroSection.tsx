import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroSectionProps {
  isDarkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isDarkMode }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple animation on load
    const elements = [titleRef.current, subtitleRef.current, socialRef.current, ctaRef.current];
    
    elements.forEach((el, index) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 100 + index * 200);
      }
    });
  }, []);

  return (
    <section 
      id="hero" 
      className={`min-h-screen flex flex-col justify-center relative ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full ${
          isDarkMode ? 'bg-blue-500/10' : 'bg-blue-200/40'
        } blur-3xl`}></div>
        <div className={`absolute -bottom-20 -left-20 w-80 h-80 rounded-full ${
          isDarkMode ? 'bg-purple-500/10' : 'bg-purple-200/30'
        } blur-3xl`}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            Hi, I'm <span className="text-blue-500">Cam</span>
            <span className="inline-block animate-wave origin-bottom-right">👋</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className={`text-xl sm:text-2xl mb-8 leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Full-Stack Developer & Designer crafting beautiful digital experiences that solve real problems.
          </p>
          
          <div 
            ref={socialRef}
            className="flex justify-center space-x-6 mb-10"
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-colors ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
              }`}
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-colors ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:hello@example.com" 
              className={`p-3 rounded-full transition-colors ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
              }`}
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className={`inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 text-white border-gray-700 hover:bg-gray-700' 
                  : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
              }`}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a 
          href="#about" 
          className={`p-2 rounded-full transition-colors ${
            isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;