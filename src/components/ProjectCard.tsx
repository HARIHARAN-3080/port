import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

interface ProjectCardProps {
  project: Project;
  isDarkMode: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isDarkMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
        isDarkMode 
          ? 'bg-gray-800 shadow-lg shadow-blue-500/5' 
          : 'bg-white shadow-lg'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden" style={{ height: '200px' }}>
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${
          isDarkMode ? 'from-gray-900' : 'from-gray-900/70'
        } to-transparent opacity-60`}></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
        </div>
      </div>
      
      <div className="p-5">
        <p className={`mb-4 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className={`px-2 py-1 rounded-full text-xs ${
                isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between mt-4">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center transition-colors ${
              isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
            aria-label={`GitHub repository for ${project.title}`}
          >
            <Github className="h-5 w-5 mr-1" />
            <span>Code</span>
          </a>
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center transition-colors ${
              isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
            }`}
            aria-label={`Live demo for ${project.title}`}
          >
            <span>Live Demo</span>
            <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;